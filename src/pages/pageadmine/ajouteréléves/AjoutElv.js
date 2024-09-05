import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { TbSelector } from 'react-icons/tb';
import { db, imageDb } from '../../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import './ajoutelv.css';

const AjoutElv = (props) => {
  const [img, setImg] = useState(null);
  const navigate = useNavigate(); 

  const [newTable, setNewTable] = useState({
    Nom: '',
    Prenom: '',
    Mail: '',
    Genre: '',
    Adress: '',
    Niveau_classe: '',
  });

  const handleChange = (e) => {
    setNewTable({ ...newTable, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Nom, Prenom, Mail, Genre, Adress, Niveau_classe } = newTable;

    // Vérification des champs vides
    if (!Nom || !Prenom || !Mail || !Genre || !Adress || !Niveau_classe) {
      toast.error('Veuillez remplir tous les champs', {
        position: 'top-center',
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
      await addDoc(collection(db, 'students'), {
        Nom,
        Prenom,
        Mail,
        Genre,
        Adress,
        Niveau_classe,
        imgUrl,
      });

      toast.success('Utilisateur ajouté avec succès', {
        position: 'top-center',
      });
      setTimeout(() => {
        navigate('/dashboardadmin');
      }, 1000);
    } catch (error) {
      console.error('Erreur lors de l\'ajout :', error);
      toast.error('Erreur lors de l\'ajout de l\'utilisateur', {
        position: 'top-center',
      });
    }
  };

  return (
    <Container>
      <Row className="laclassesss justify-content-center">
        <div className="laclasses">
          <h2 className="mt-2">Les élèves de la classe</h2>
        </div>
        <Col md={10} className="addetudiant">
          <h2>Ajouter un Élève</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control 
                    className="forme-input"
                    type="text"
                    name="Nom"
                    id="Nom"
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
                    id="Prenom"
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
                    id="Mail"
                    value={newTable.Mail}
                    onChange={handleChange}
                    placeholder="Entrer votre mail"
                  />
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Genre</Form.Label>
                  <div className="select-container">
                    <Form.Control 
                      className="forme-input select-input"
                      as="select"
                      name="Genre"
                      id="Genre"
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
                <div style={{ height: '100%' }}></div> {/* Espace vide au milieu */}
              </Col>

              <Col md={5}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control 
                    className="forme-input"
                    type="text"
                    name="Adress"
                    id="Adress"
                    value={newTable.Adress}
                    onChange={handleChange}
                    placeholder="Entrer l'adresse"
                  />
                </Form.Group>

                <Form.Group controlId="formGrade">
                  <Form.Label>Niveau de classe</Form.Label>
                  <div className="select-container">
                    <Form.Control 
                      className="forme-input select-input"
                      as="select"
                      name="Niveau_classe"
                      id="Niveau_classe"
                      value={newTable.Niveau_classe}
                      onChange={handleChange}
                    >
                      <option value="">Choisissez...</option>
                      <option value="Licence1">Licence1</option>
                      <option value="Licence2">Licence2</option>
                      <option value="Licence3">Licence3</option>
                      <option value="Master">Master</option>
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
                  <Link to="/dashboardAdmin">
                    <Button variant="secondary" className=" mt-4">Go Back</Button>
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
        style={{ width: 'auto', textAlign: 'center' }}
      />
    </Container>
  );
};

export default AjoutElv;
