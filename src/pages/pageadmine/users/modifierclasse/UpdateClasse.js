// UpdateClasse.js
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UpdateClasse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access state

  const [classe, setClasse] = useState({
    Classe: '',
    Matiére: '',
  });

  const { onUpdate } = location.state || {}; // Retrieve the onUpdate function

  useEffect(() => {
    // Simulez la récupération des données de la classe via l'ID
    setClasse({
      Classe: 'Sixiéme',
      Matiére: 'Anglais',
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure onUpdate is a function before calling it
    if (typeof onUpdate === 'function') {
      onUpdate(id, classe);
    }
    navigate('/classe');
  };

  return (
    <div className="mt-5 m-auto">
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={11} className="addvux">
            <h2 className="laclasse">Mettre à Jour la Classe</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formClasse">
                <Form.Label>Classe</Form.Label>
                <Form.Control
                  type="text"
                  value={classe.Classe}
                  onChange={(e) => setClasse({ ...classe, Classe: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formMatiere">
                <Form.Label>Matiére</Form.Label>
                <Form.Control
                  type="text"
                  value={classe.Matiére}
                  onChange={(e) => setClasse({ ...classe, Matiére: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">
                Sauvegarder
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateClasse;
