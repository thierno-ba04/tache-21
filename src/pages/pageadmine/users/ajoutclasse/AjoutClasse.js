import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AjoutClasse = () => {
  const navigate = useNavigate();
  const [classeData, setClasseData] = useState({
    classe: '',
    matiere: ''
  });

  const handleChange = (e) => {
    setClasseData({
      ...classeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const classesCollection = collection(db, "classes");
      await addDoc(classesCollection, classeData);
      toast.success("Classe ajoutée avec succès");
      navigate('/classe'); // Redirection après ajout
    } catch (error) {
      console.error("Erreur lors de l'ajout de la classe:", error);
      toast.error("Erreur lors de l'ajout de la classe");
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={12} md={12}>
          <h2 className="mt-5">Ajouter une Classe</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formClasse">
              <Form.Label>Classe</Form.Label>
              <Form.Control
                type="text"
                name="classe"
                value={classeData.classe}
                onChange={handleChange}
                placeholder="Entrez le nom de la classe"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMatiere" className="mt-3">
              <Form.Label>Matière</Form.Label>
              <Form.Control
                type="text"
                name="matiere"
                value={classeData.matiere}
                onChange={handleChange}
                placeholder="Entrez la matière"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Ajouter
            </Button>
          </Form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default AjoutClasse;
