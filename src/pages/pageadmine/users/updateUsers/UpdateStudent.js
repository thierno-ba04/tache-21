import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useMyContext } from '../../../../context/MyContext';
import "./updateStudent.css"

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useMyContext();

  const [user, setUser] = useState({
    Nom: '',
    Prenom: '',
    Mail: '',
    Numero: '',
    Adresse: '',
    Statut: ''
  });

  useEffect(() => {
    const currentUser = students.find(student => student.id === parseInt(id));
    if (currentUser) {
      setUser(currentUser);
    }
  }, [id, students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { ...user, id: parseInt(id) };
    console.log("Submitting updated student:", updatedStudent); // Vérifie les données soumises
    updateStudent(updatedStudent);
    navigate('/dashboardadmin');
  };

  return (
    <div className="mt-5">
      <Container>

        <Row className="justify-content-center">
          <Col md={1}></Col>
          <Col md={11} className="mt-5">
          <h4 className="titrmodifier">Modifier l'Élève</h4>

          </Col>
          <Col md={10} className="updatestudent">
            <h2>Modifier</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNom">
                    <Form.Control
                      className="forme-input"
                      type="text"
                      name="Nom"
                      placeholder="Entrez le nom"
                      value={user.Nom}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPrenom">
                    <Form.Control
                      className="forme-input"
                      type="text"
                      name="Prenom"
                      placeholder="Entrez le prénom"
                      value={user.Prenom}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMail">
                    <Form.Control
                      className="forme-input"
                      type="email"
                      name="Mail"
                      placeholder="Entrez votre Mail"
                      value={user.Mail}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formNumero">
                    <Form.Control
                      className="forme-input"
                      type="number"
                      name="Numero"
                      placeholder="Entrez votre Numéro"
                      value={user.Numero}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formAdresse">
                    <Form.Control
                      className="forme-input"
                      type="text"
                      name="Adresse"
                      placeholder="Adresse"
                      value={user.Adresse}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formStatut">
                    <Form.Control
                      className="forme-input"
                      type="text"
                      name="Statut"
                      placeholder="Statut"
                      value={user.Statut}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="add-btn-container"
                  >
                    Modifier
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateStudent;
