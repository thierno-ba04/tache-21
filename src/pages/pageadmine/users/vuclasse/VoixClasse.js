import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './voixclasse.css'

const VoixClasse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [classeData, setClasseData] = useState({});
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

  return (
    <Container>
      <Row>
      <Col lg={2} md={2}></Col>

        <Col lg={10} md={10} className="mt-5">
          <h2 className="laclasses">Détails de la Classe</h2>
          {error ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : (
            <div className="détail_classe">
              <p><strong>Classe:</strong> {classeData.classe}</p>
              <p><strong>Matière:</strong> {classeData.matiere}</p>
              <Button className="me-auto" variant="primary" onClick={() => navigate(`/classes/editclasse/${id}`)}>
                Modifier
              </Button>
            </div>
          )}
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default VoixClasse;
