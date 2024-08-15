// VoixClasse.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./voixclasse.css"

const VoixClasse = () => {
  const { id } = useParams();

  // Simulez la récupération des détails de la classe via l'ID
  const classeDetails = {
    id,
    Classe: 'Sixiéme',
    Matiére: 'Anglais',
    // Ajouter d'autres détails si nécessaire
  };

  return (
    <div className="mt-5  m-auto">
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={11} className="addvux">
          <h2 className="laclasse">Détails de la Classe</h2>
          <p><strong>ID:</strong> {classeDetails.id}</p>
          <p><strong>Classe:</strong> {classeDetails.Classe}</p>
          <p><strong>Matiére:</strong> {classeDetails.Matiére}</p>
          {/* Affichez d'autres détails ici */}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default VoixClasse;
