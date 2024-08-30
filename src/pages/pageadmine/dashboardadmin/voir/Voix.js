import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./voix.css";
import { db } from "../../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function Voix() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const docRef = doc(db, "students", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStudent(docSnap.data());
        } else {
          setError("Étudiant non trouvé");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setError("Erreur lors de la récupération des données");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>Étudiant non trouvé</div>;
  }

  return (
    <div className="shadow bg-body rounded details">
      <Container>
        <Row className="justify-content-center">
          <h2 className="titre_details">Détails de l'Étudiant</h2>

          <Col lg={7} md={11}>
            {error && <p className="text-danger">{error}</p>}
            {student ? (
              <div className="student-details mt-5">
                <p>
                  <strong>Nom:</strong> {student.Nom}
                </p>
                <p>
                  <strong>Prénom:</strong> {student.Prenom}
                </p>
                <p>
                  <strong>Email:</strong> {student.Mail}
                </p>
                <p>
                  <strong>Genre:</strong> {student.Genre}
                </p>
                <p>
                  <strong>Adresse:</strong> {student.Adress}
                </p>
                <p>
                  <strong>Niveau_classe:</strong> {student.Niveau_classe}
                </p>
              </div>
            ) : (
              <p>student non trouvé.</p>
            )}
            <div className="btnvoir">
              <button
                type="button"
                onClick={() => navigate("/dashboardadmin")}
                className="btn btn-secondary mt-3"
              >
                Retour
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Voix;
