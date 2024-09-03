import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditClasse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [classeData, setClasseData] = useState({
    classe: '',
    matiere: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClasse = async () => {
      try {
        const classeDoc = doc(db, 'classes', id);
        const classeSnapshot = await getDoc(classeDoc);
        if (classeSnapshot.exists()) {
          setClasseData(classeSnapshot.data());
        } else {
          setError('Classe non trouvée');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la classe:', error);
        setError('Erreur lors de la récupération de la classe');
      }
    };

    fetchClasse();
  }, [id]);

  const handleChange = (e) => {
    setClasseData({
      ...classeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const classeDoc = doc(db, 'classes', id);
      await updateDoc(classeDoc, classeData);
      toast.success('Classe mise à jour avec succès');
      navigate('/classe');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la classe:', error);
      toast.error('Erreur lors de la mise à jour de la classe');
    }
  };

  return (
    <Container>
      <Row>
      <Col lg={1} md={1}></Col>
        <Col lg={11} md={11} className="mt-5">
          <h2 className="laclasses">Modifier la Classe</h2>
          {error ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : (
            <Form onSubmit={handleSubmit} className="détail_classe">
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
                Enregistrer
              </Button>
            </Form>
          )}
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default EditClasse;
