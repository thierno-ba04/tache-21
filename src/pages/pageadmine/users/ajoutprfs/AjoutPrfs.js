import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { TbSelector } from "react-icons/tb";
import { useMyContext } from "../../../../context/MyContext";
import { Link, useNavigate } from "react-router-dom";

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
      addStudent({ ...data, id: Date.now() });
      navigate("/dashboardadmin");
    } else {
      console.error("addStudent function is not available");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="laclasse">
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
                    {...register("firstName", {
                      required: "Prénom est requis",
                    })}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBirthDate">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="number"
                    {...register("birthnum", {
                      required: "Numero de telephone est requis",
                    })}
                    isInvalid={!!errors.birthnum}
                  />
                </Form.Group>
              </Col>

              <Col md={1}>
                <div style={{ height: "100%" }}></div>
              </Col>

              <Col md={5}>
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
                <Form.Group controlId="formBirthPlace">
                  <Form.Label>Domaine</Form.Label>
                </Form.Group>

                <Form.Group controlId="formGrade">
                  <div className="select-container">
                    <Form.Control
                      className="forme-input select-input"
                      as="select"
                      {...register("grade", {
                        required: "Niveau de classe est requis",
                      })}
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
