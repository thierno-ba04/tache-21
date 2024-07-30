import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { TbSelector } from 'react-icons/tb';
import './ajoutelv.css';

function AddStudentForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Vous pouvez envoyer `data` à un serveur ou effectuer d'autres actions ici.
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <div className='laclasse'>
          <h2 className='mt-2'>Les élèves de la classe</h2>
        </div>
        <Col md={10} className='addetudiant'>
          <h2>Ajouter un Élève</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {/* Partie gauche */}
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control className='forme-input'
                    type="text"
                    placeholder="Entrez le nom"
                    {...register('lastName', { required: 'Nom est requis' })}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formFirstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control className='forme-input'
                    type="text"
                    placeholder="Entrez le prénom"
                    {...register('firstName', { required: 'Prénom est requis' })}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBirthDate">
                  <Form.Label>Date de naissance</Form.Label>
                  <Form.Control className='forme-input'
                    type="date"
                    {...register('birthDate', { required: 'Date de naissance est requise' })}
                    isInvalid={!!errors.birthDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.birthDate?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Genre</Form.Label>
                  <div className="select-container">
                    <Form.Control className='forme-input select-input'
                      as="select"
                      {...register('gender', { required: 'Genre est requis' })}
                      isInvalid={!!errors.gender}
                    >
                      <option value="">Choisissez...</option>
                      <option value="male">Homme</option>
                      <option value="female">Femme</option>
                    </Form.Control>
                    <TbSelector className="select-icon" />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {errors.gender?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Espace au milieu */}
              <Col md={1}>
                <div style={{ height: '100%' }}></div> {/* Espace vide au milieu */}
              </Col>

              {/* Partie droite */}
              <Col md={5}>
                <Form.Group controlId="formBirthPlace">
                  <Form.Label>Lieu de naissance</Form.Label>
                  <Form.Control className='forme-input'
                    type="text"
                    placeholder="Entrez le lieu de naissance"
                    {...register('birthPlace', { required: 'Lieu de naissance est requis' })}
                    isInvalid={!!errors.birthPlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.birthPlace?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGrade">
                  <Form.Label>Niveau de classe</Form.Label>
                  <div className="select-container">
                    <Form.Control className='forme-input select-input'
                      as="select"
                      {...register('grade', { required: 'Niveau de classe est requis' })}
                      isInvalid={!!errors.grade}
                    >
                      <option value="">Choisissez...</option>
                      <option value="3eme">3ème</option>
                      <option value="2nde">2nde</option>
                      <option value="1ere">1ère</option>
                      <option value="Terminale">Terminale</option>
                    </Form.Control>
                    <TbSelector className="select-icon" />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {errors.grade?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control className='forme-input'
                    type="file"
                    accept="image/*"
                    onChange={(e) => setValue('photo', e.target.files[0])}
                  />
                </Form.Group>

                {/* Conteneur pour le bouton Ajouter */}
                <div className="add-btn-container">
                  <Button variant="primary" type="submit">
                    Ajouter
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddStudentForm;
