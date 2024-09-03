import { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from '../../firebase/firebase'; // Assurez-vous que auth est importé
import { doc, setDoc, getDoc } from "firebase/firestore";
import imgprofil from "../../assets/img/téléchargement.jpg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./updProfileEtudiant.css";

const UpdProfileEtudiant = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        photo: null
    });

    const [photoPreview, setPhotoPreview] = useState(imgprofil); // État pour l'aperçu de la photo

    // Fonction pour récupérer les informations utilisateur depuis Firestore
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const docRef = doc(db, "users-rôles", user.uid); // Utilisation de l'ID de l'utilisateur connecté
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        setProfile({
                            firstName: userData.prenom || '',
                            lastName: userData.nom || '',
                            phoneNumber: userData.number || '',
                            photo: userData.photoURL || imgprofil,
                        });
                        setPhotoPreview(userData.photoURL || imgprofil);
                    } else {
                        console.log("Aucune donnée d'utilisateur trouvée.");
                    }
                } else {
                    console.log("Utilisateur non authentifié.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du profil utilisateur:", error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setProfile({
            ...profile,
            photo: file
        });

        setPhotoPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let photoURL = profile.photo;
            if (profile.photo && typeof profile.photo !== "string") {
                const photoRef = ref(storage, `profilePhotos/${Date.now()}_${profile.photo.name}`);
                await uploadBytes(photoRef, profile.photo);
                photoURL = await getDownloadURL(photoRef);
            }

            await setDoc(doc(db, "users-rôles", auth.currentUser.uid), {
                nom: profile.lastName,
                prenom: profile.firstName,
                number: profile.phoneNumber,
                photoURL,
            });

            toast.success('Profil mis à jour avec succès !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setPhotoPreview(photoURL);

        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            toast.error('Erreur lors de la mise à jour de la photo', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div style={{ marginTop: "120px" }}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} className='imguprofile'>
                        <img 
                            src={photoPreview}
                            alt="Profile"
                            style={{ width: "50%", height: "75%" }} 
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Mettre à Jour</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Votre Prénom" 
                                    name="firstName" 
                                    value={profile.firstName} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nom" 
                                    name="lastName" 
                                    value={profile.lastName} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Numéro de téléphone</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Numéro de téléphone" 
                                    name="phoneNumber" 
                                    value={profile.phoneNumber} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoto">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control 
                                    type="file" 
                                    name="photo" 
                                    onChange={handlePhotoChange} 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className='mt-5'>
                                Mettre à Jour le Profil
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
};

export default UpdProfileEtudiant;
