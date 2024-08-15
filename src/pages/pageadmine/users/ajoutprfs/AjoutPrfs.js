import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { TbSelector } from "react-icons/tb";
import { useMyContext } from "../../../../context/MyContext";
import { useNavigate } from "react-router-dom";

function AjoutPrfs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { addStudent } = useMyContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (addStudent) {
      // Handle file uploads separately if needed
      const student = {
        id: Date.now(),
        Nom: data.lastName,
        Prenom: data.firstName,
        Mail: data.email,
        Numero: data.birthnum,
        Adresse: data.address,
        Statut: data.grade,
        // Add more fields if needed
        // Handle photo if required
      };
      addStudent(student);
      navigate("/personnels");
    } else {
      console.error("addStudent function is not available");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="laclasses">
          <h2 className="mt-2">Professeurs</h2>
        </div>
        <Col md={10} className="addetudiant">
          <h2>Ajouter un professeur</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    placeholder="Entrez le nom"
                    {...register("lastName", { required: "Nom est requis" })}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formFirstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    placeholder="Entrez le prénom"
                    {...register("firstName", { required: "Prénom est requis" })}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Mail</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="email"
                    placeholder="Entrez votre adresse mail"
                    {...register("email", { required: "E-mail est requis" })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    placeholder="Entrez le numéro"
                    {...register("birthnum", { required: "Numéro de téléphone est requis" })}
                    isInvalid={!!errors.birthnum}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.birthnum?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={1}>
                <div style={{ height: "100%" }}></div>
              </Col>

              <Col md={5}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    placeholder="Entrez votre adresse"
                    {...register("address", { required: "Adresse est requise" })}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Genre</Form.Label>
                  <div className="select-container">
                    <Form.Control
                      className="forme-input select-input"
                      as="select"
                      {...register("gender", { required: "Genre est requis" })}
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

                <Form.Group controlId="formGrade">
                  <Form.Label>Domaine</Form.Label>
                  <div className="select-container">
                    <Form.Control
                      className="forme-input select-input"
                      as="select"
                      {...register("grade", { required: "Domaine est requis" })}
                      isInvalid={!!errors.grade}
                    >
                      <option value="">Choisissez...</option>
                      <option value="programmation">Programmation</option>
                      <option value="marketing">Marketing digital</option>
                      <option value="design">Design</option>
                      <option value="bureautique">Bureautique</option>
                    </Form.Control>
                    <TbSelector className="select-icon" />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {errors.grade?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setValue("photo", e.target.files[0])}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="add-btn-container"
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

export default AjoutPrfs;
