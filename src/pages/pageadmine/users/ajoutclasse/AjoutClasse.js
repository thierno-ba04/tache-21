import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useMyContext } from '../../../../context/MyContext';
import { useNavigate } from 'react-router-dom';

function AjoutClasse() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addClasse } = useMyContext();  // Assurez-vous que addClass est défini dans le contexte
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (addClasse) {
      addClasse({ ...data, id: Date.now() });  // Ajoutez une classe avec un ID unique
      navigate("/classe"); // Redirection vers la liste des classe
    } else {
      console.error("addClass function is not available");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
      <div className="lacours">
          <h2 className="mt-2">Classe</h2>
        </div>
        <Col md={8} className="addcours">
          <h2>Ajouter une classe</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNom">
                  <Form.Label>Nom de la classe</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de la classe"
                    {...register('nomClasse', { required: "Le nom de la classe est requis" })}
                  />
                  {errors.nomClasse && <Form.Text className="text-danger">{errors.nomClasse.message}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="formMatiere">
                  <Form.Label>Matière</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Matière"
                    {...register('matiere', { required: "La matière est requise" })}
                  />
                  {errors.matiere && <Form.Text className="text-danger">{errors.matiere.message}</Form.Text>}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                >
                  Ajouter
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AjoutClasse;
