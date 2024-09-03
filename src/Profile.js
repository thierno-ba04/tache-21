import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db, imageDb } from "./firebase"; // Importation des données depuis Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import "./profile.css";

const Profile = () => {
  const [user] = useAuthState(getAuth());
  const [donnee, setDonnee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newRole, setNewRole] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        setLoading(true);
        try {
          const docRef = doc(db, 'users-rôles', user.uid); // Assurez-vous que la collection et les documents existent
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDonnee(docSnap.data());
            setPhotoURL(docSnap.data().photoURL || ''); // Load existing photo URL
          } else {
            setError('Aucune donnée trouvée.');
          }
        } catch (error) {
          setError('Erreur lors de la récupération des données: ' + error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setError('Utilisateur non connecté.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleRoleChange = async () => {
    if (user && newRole.trim()) {
      try {
        const docRef = doc(db, 'users-rôles', user.uid);
        await updateDoc(docRef, { role: newRole });
        setDonnee(prev => ({ ...prev, role: newRole }));
        setNewRole('');
        alert('Rôle mis à jour avec succès');
      } catch (error) {
        setError('Erreur lors de la mise à jour du rôle: ' + error.message);
      }
    } else {
      setError('Veuillez entrer un nouveau rôle.');
    }
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(imageDb, `profile_photos/${user.uid}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Optionally, handle progress
        },
        (error) => {
          setError('Erreur lors du téléversement de la photo: ' + error.message);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(doc(db, 'users-rôles', user.uid), { photoURL: url });
            setPhotoURL(url);
            alert('Photo mise à jour avec succès');
          } catch (error) {
            setError('Erreur lors de la mise à jour de la photo: ' + error.message);
          }
        }
      );
    }
  };

  return (
    <Container>
      <Row className="shadow bg-body rounded profile">
        <Col lg={1} md={1}></Col>

        <Col lg={5} md={5}>
          <div className="profile-img">
            <img src={photoURL || "image"} alt="Photo de profil" className="profile-photo" />
           
          </div>
          <div className="update-profile-form">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary mt-5"
            >
              Retour
            </button>
          </div>
        </Col>

        <Col lg={5} md={5}>
          <h1 className="titr_profile mb-4">Mon Profil</h1>
          <div className="profile-details">
            {loading ? (
              <p>Chargement des données...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : donnee ? (
              <div>
                <p>Prénom: {donnee.prenom}</p>
                <p>Nom: {donnee.nom}</p>
                <p>Email: {donnee.email}</p>
                <p>Téléphone: {donnee.number}</p>
                <p>Rôle: {donnee.role || 'Non défini'}</p>
                <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
              </div>
              
            ) : (
              <p>Aucune donnée trouvée.</p>
            )}
            
          </div>
          <input
            type="text"
            placeholder="Nouveau rôle"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="mt-3"
          />
          <Button onClick={handleRoleChange} className="mt-3">
            Mettre à jour le rôle
          </Button>
          <Link to="/forgot" className="change-password-button">
            Modifier mon mot de passe !
          </Link>
         
        </Col>

        <Col lg={1} md={1}></Col>
      </Row>
    </Container>
  );
};
 
export default Profile;