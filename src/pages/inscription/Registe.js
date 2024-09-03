import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FiKey } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import "./registe.css";
import { MdOutlinePermIdentity } from "react-icons/md";
import imglearning from "../../assets/img/education-technology-logo-design-vector.jpg";
import { auth, db, createUserWithEmailAndPassword } from "../../firebase/firebase";
import { setDoc, doc } from 'firebase/firestore';

function Registe() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('etudiant'); // Valeur par défaut
  const navigate = useNavigate();

  const isFormValid = nom !== '' && prenom !== '' && email !== '' && number !== '' && password !== '' && password === confirmPassword;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      // Crée un nouvel utilisateur avec email et mot de passe
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Stocke des informations supplémentaires dans Firestore
      await setDoc(doc(db, "users-rôles", user.uid), {
        nom,
        prenom,
        email,
        number,
        role
      });

      // Redirige vers la page de connexion après l'inscription
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} className="container-form2">
            <h2 className="text-dark fw-bold">S'inscrire</h2>
            <p className="title" style={{ color: "grey" }}>
              Créer un compte
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="md-3">
                <Col className="form-control border-0">
                  <div className="icone3 ps-2">
                    <MdOutlinePermIdentity className="" />
                  </div>
                  <input
                    type="text"
                    className="input rounded-pill"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </Col>
                <Col className="form-control border-0">
                  <div className="icone3 ps-2">
                    <MdOutlinePermIdentity className="" />
                  </div>
                  <input
                    type="text"
                    className="input rounded-pill"
                    placeholder="Prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </Col>
              </div>
              <div className="md-3">
                <Col className="form-control border-0">
                  <div className="icone4 ps-3">
                    <IoMailOutline />
                  </div>
                  <input
                    type="email"
                    className="input rounded-pill"
                    placeholder="Adresse Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col className="form-control border-0">
                  <div className="icone4 ps-3">
                    <CiPhone />
                  </div>
                  <input
                    type="tel"
                    className="input rounded-pill"
                    placeholder="Numéro de téléphone"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Col>
              </div>
              <Col className="form-control border-0">
                <div className="icone5 ps-3">
                  <FiKey />
                </div>
                <input
                  type="password"
                  className="input rounded-pill"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>

<div className="md-3">
  <Col className="form-control border-0">
    <div className="icone3 ps-2">
      <MdOutlinePermIdentity className="" />
    </div>
    <select
      className="input rounded-pill"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="etudiant">Étudiant</option>
      <option value="coach">Coach</option>
      <option value="admin">Administrateur</option>
    </select>
  </Col>
</div>


              <Col className="form-control border-0">
                <div className="icone6 ps-3">
                  <FiKey />
                </div>
                <input
                  type="password"
                  className="input rounded-pill"
                  placeholder="Confirmer mot de passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Col>
              {error && <p className="text-danger">{error}</p>}
              <div className="mx-auto">
                <button className="form-btn rounded-pill" type="submit" disabled={!isFormValid}>
                  S'inscrire
                </button>
              </div>
            </form>
          </Col>

          <Col lg={6} md={6} className="body2">
            <div className="text-center align-items-center pt-4">
              <img src={imglearning} alt="e-learning" className="learningimg" />
              <h3>Oneline E-Learning</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registe;
