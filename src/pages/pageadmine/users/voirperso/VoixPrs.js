import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../../../firebase/firebase';

import { doc, getDoc } from 'firebase/firestore';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './voixprs.css'; 

const VoixPrs = () => {
  const { id } = useParams(); // Obtient l'ID du personnel depuis les paramètres de l'URL
  const navigate = useNavigate();
  const [personnel, setPersonnel] = useState(null);
  const [loading, setLoading] = useState(true); // Nouvel état pour gérer le chargement
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPersonnel = async () => {
      setLoading(true); // Début du chargement
      try {
        const docRef = doc(db, 'personnels', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPersonnel(docSnap.data());
          setError(''); // Réinitialiser l'erreur si la récupération est réussie
        } else {
          setError('Personnel non trouvé');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du personnel:', error);
        setError('Erreur lors de la récupération des détails du personnel');
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchPersonnel();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} className="text-center">
            <Spinner animation="border" />
            <p>Chargement des détails...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={7} md={11}>
          <h2 className="laclasseH2">Détails du Coach</h2>
          {error && <p className="text-danger">{error}</p>}
          {personnel ? (
            <div className="personnel-details mt-5">
              <p><strong>Nom:</strong> {personnel.Nom}</p>
              <p><strong>Prénom:</strong> {personnel.Prenom}</p>
              <p><strong>Email:</strong> {personnel.Mail}</p>
              <p><strong>Numéro de téléphone:</strong> {personnel.Number}</p>
              <p><strong>Genre:</strong> {personnel.Genre}</p>
              <p><strong>Adresse:</strong> {personnel.Adress}</p>
              <p><strong>Domaine:</strong> {personnel.Domaine}</p>
            </div>
          ) : (
            <p>Personnel non trouvé.</p>
          )}
          <div className="btnvoir">
        <button
          type="button"
          onClick={() => navigate('/personnels')}
          className="btn btn-secondary mt-3"
        >
          Retour
        </button>
      </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default VoixPrs;
