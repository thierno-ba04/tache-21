// src/components/AjoutCours.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { AiOutlineUpload } from 'react-icons/ai';
import { FaImage } from "react-icons/fa6";
import { useMyContext } from '../../../../context/MyContext';
import { useNavigate } from 'react-router-dom';
import './ajoutcours.css';

export default function AjoutCours() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addCours } = useMyContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    if (addCours) {
      // Exclure le fichier des données envoyées si vous ne le gérez pas pour l'instant
      const { fichier, ...coursData } = data;
      const newCours = { ...coursData, id: Date.now() };
      addCours(newCours);
      console.log('Cours Add');
      navigate('/coursprfs', { state: { addCours: newCours } });
    } 
    // else {
      // console.error('addCourse function is not available');
    // }
  };
  

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="lacours">
          <h2 className="mt-2">Cours</h2>
        </div>
        <Col md={8} className="addcours">
          <h2>Ajouter un Cours</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNom">
                  <Form.Label>Nom du Cours</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom du cours"
                    {...register('nom', { required: 'Le nom du cours est requis' })}
                  />
                  {errors.nom && <Form.Text className="text-danger">{errors.nom.message}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Ajouter une description"
                    {...register('description', { required: 'La description est requise' })}
                  />
                  {errors.description && <Form.Text className="text-danger">{errors.description.message}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="formDuree">
                  <Form.Label>Choisir une photo</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="file"
                      placeholder="img"
                      {...register('img', { required: 'L\'image est requise' })}
                    />
                    <InputGroup.Text>
                    <FaImage />
                    </InputGroup.Text>
                  </InputGroup>
                  {errors.image && <Form.Text className="text-danger">{errors.duree.message}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="formFichier">
                  <Form.Label>Joindre un Fichier</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="file"
                      {...register('fichier')}
                    />
                    <InputGroup.Text>
                      <AiOutlineUpload />
                    </InputGroup.Text>
                  </InputGroup>
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
