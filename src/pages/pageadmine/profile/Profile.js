import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../../firebase/firebase"; // Importation des données depuis Firebase
import { useAuthState } from "react-firebase-hooks/auth"; // Assure-toi que ce hook est bien importé
import "./profile.css";

const Profile = () => {
  const [user] = useAuthState(getAuth()); // Correctly get auth instance here
  const [donnee, setDonnee] = useState(null); // État pour stocker les données du profil
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        setLoading(true); // Start loading
        try {
          const docRef = doc(db, 'admins', user.uid); // Get a reference to the user's document
          const docSnap = await getDoc(docRef); // Use getDoc to get the single document
          if (docSnap.exists()) {
            setDonnee(docSnap.data());
          } else {
            setError('Aucune donnée trouvée.');
          }
        } catch (error) {
          setError('Erreur lors de la récupération des données: ' + error.message);
        } finally {
          setLoading(false); // End loading
        }
      } else {
        setError('Utilisateur non connecté.');
        setLoading(false); // End loading if no user is present
      }
    };

    fetchUserProfile();
  }, [user]);

  return (
    <Container>
      <Row className="shadow bg-body rounded profile">
        <Col lg={1} md={1}></Col>

        <Col lg={5} md={5}>
          <div className="profile-img">
            <img
              src="https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg"
              alt="user"
              className="profile-photo"
            />
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
                <p>Rôle: Administrateur</p>
              </div>
            ) : (
              <p>Aucune donnée trouvée.</p>
            )}
          </div>
          <Link to="/forgot" className="change-password-button">
            Modifier mon mot de passe !
          </Link>
          <div className="update-profile-form">
            <button
              type="button"
              onClick={() => navigate('/DashboardAdmin')}
              className="btn btn-secondary mt-3"
            >
              Retour
            </button>
          </div>
        </Col>

        <Col lg={1} md={1}></Col>
      </Row>
    </Container>
  );
};

export default Profile;
