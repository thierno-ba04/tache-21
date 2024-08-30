import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { TbSelector } from "react-icons/tb";
import { addDoc, collection } from "firebase/firestore";
import { db, imageDb } from "../../../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function AjoutPrfs() {
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const [newTable, setNewTable] = useState({
    Nom: "",
    Prenom: "",
    Mail: "",
    Number: "",
    Genre: "",
    Adress: "",
    Domaine: "",
  });

  const handleChange = (e) => {
    setNewTable({ ...newTable, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Nom, Prenom, Mail, Number, Genre, Adress, Domaine } = newTable;

    // Vérification des champs vides
    if (!Nom || !Prenom || !Mail || !Number || !Genre || !Adress || !Domaine) {
      toast.error("Veuillez remplir tous les champs", {
        position: "top-center",
      });
      return;
    }

    try {
      let imgUrl = null;

      // Upload image s'il existe et puis obtenir l'URL
      if (img) {
        const imgRef = ref(imageDb, `files/${v4()}`);
        const uploadResult = await uploadBytes(imgRef, img);
        imgUrl = await getDownloadURL(uploadResult.ref);
      }

      // Ajouter le document dans Firebase
      await addDoc(collection(db, "personnels"), {
        Nom,
        Prenom,
        Mail,
        Number,
        Genre,
        Adress,
        Domaine,
        imgUrl,
      });

      toast.success("Utilisateur ajouté avec succès", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/personnels");
      }, 1000);
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      toast.error("Erreur lors de l'ajout de l'utilisateur", {
        position: "top-center",
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="laclasses">
          <h2 className="mt-0">Le Personnels</h2>
        </div>
        <Col lg={10} md={10} className="addetudiant">
          <h2>Ajouter un Professeur</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    name="Nom"
                    value={newTable.Nom}
                    onChange={handleChange}
                    placeholder="Nom"
                  />
                </Form.Group>

                <Form.Group controlId="formFirstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    name="Prenom"
                    value={newTable.Prenom}
                    onChange={handleChange}
                    placeholder="Prénom"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Mail</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="email"
                    name="Mail"
                    value={newTable.Mail}
                    onChange={handleChange}
                    placeholder="Entrer votre mail"
                  />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text" // Changed to text to handle phone numbers more flexibly
                    name="Number"
                    value={newTable.Number}
                    onChange={handleChange}
                    placeholder="Entrer votre numéro de téléphone"
                  />
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Genre</Form.Label>
                  <div className="select-container">
                    <Form.Control
                      className="forme-input select-input"
                      as="select"
                      name="Genre"
                      value={newTable.Genre}
                      onChange={handleChange}
                    >
                      <option value="">Choisissez...</option>
                      <option value="male">Homme</option>
                      <option value="female">Femme</option>
                    </Form.Control>
                    <TbSelector className="select-icon" />
                  </div>
                </Form.Group>
              </Col>

              <Col md={1}>
                {/* Espace vide au milieu */}
              </Col>

              <Col md={5}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="text"
                    name="Adress"
                    value={newTable.Adress}
                    onChange={handleChange}
                    placeholder="Entrer l'adresse"
                  />
                </Form.Group>

                <Form.Group controlId="formDomaine">
                  <Form.Label>Domaine</Form.Label>
                  <div className="select-container">
                    <Form.Control
                      className="forme-input select-input"
                      as="select"
                      name="Domaine"
                      value={newTable.Domaine}
                      onChange={handleChange}
                    >
                      <option value="">Choisissez...</option>
                      <option value="Coach Programmation">Coach Programmation</option>
                      <option value="Coach Marketing">Coach Marketing</option>
                      <option value="Coach Design">Coach Design</option>
                      <option value="Coach Infographie">Coach Infographie</option>
                    </Form.Control>
                    <TbSelector className="select-icon" />
                  </div>
                </Form.Group>

                <Form.Group controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    className="forme-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </Form.Group>

                <div className="d-flex add_ajouts">
                  <Button variant="primary" type="submit" className="mt-4">
                    Ajouter
                  </Button>
                  <Link to="/personnels">
                    <Button variant="secondary" className="mt-4">
                      Go Back
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "auto", textAlign: "center" }}
      />
    </Container>
  );
}

export default AjoutPrfs;
