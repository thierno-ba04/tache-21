import { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase/firebase'; // Importer Firestore et Storage depuis votre fichier Firebase
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importer Firestore pour gérer les documents
import imgprofil from "../../assets/img/téléchargement.jpg";
import { toast, ToastContainer } from 'react-toastify'; // Importer react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importer les styles de react-toastify
import "./updProfileEtudiant.css";

const UpdProfileEtudiant = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        photo: null
    });

    const [photoPreview, setPhotoPreview] = useState(imgprofil); // État pour l'aperçu de la photo

    // Fonction pour récupérer l'URL de la photo depuis Firestore au chargement du composant
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const docRef = doc(db, "users", "userId"); // Remplacez "userId" par l'identifiant de l'utilisateur
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    if (userData.photoURL) {
                        setProfile((prevState) => ({
                            ...prevState,
                            photo: userData.photoURL
                        }));
                        setPhotoPreview(userData.photoURL);
                    }
                } else {
                    console.log("Aucune photo trouvée.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération de la photo:", error);
            }
        };

        fetchPhoto();
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
            photo: file  // Stocker le fichier objet dans l'état
        });

        // Créer une URL d'aperçu de l'image et la stocker dans l'état photoPreview
        setPhotoPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (profile.photo && typeof profile.photo !== "string") {
                const photoRef = ref(storage, `profilePhotos/${Date.now()}_${profile.photo.name}`);
                
                // Télécharger la photo sur Firebase Storage
                await uploadBytes(photoRef, profile.photo);

                // Récupérer l'URL de la photo
                const photoURL = await getDownloadURL(photoRef);

                // Mettre à jour l'état avec l'URL de la photo
                setProfile({
                    ...profile,
                    photo: photoURL
                });

                setPhotoPreview(photoURL); // Mettre à jour l'aperçu avec l'URL stockée

                // Enregistrer l'URL dans Firestore
                await setDoc(doc(db, "users", "userId"), { photoURL }); // Remplacez "userId" par l'identifiant de l'utilisateur

                // Afficher une notification de succès
                toast.success('Photo mise à jour avec succès !', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                console.log('Profil mis à jour:', profile);
            }
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
                            src={photoPreview} // Utiliser l'URL de l'aperçu stockée dans l'état
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

                            <Button variant="primary" type="submit">
                                Mettre à Jour le Profil
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <ToastContainer /> {/* Ajouter le conteneur de Toast */}
            </Container>
        </div>
    );
};

export default UpdProfileEtudiant;
