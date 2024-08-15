// src/components/Login.js
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import './login.css';
import { IoMailOutline } from 'react-icons/io5';
import { FiKey } from 'react-icons/fi';
import imglearning from '../../assets/img/education-technology-logo-design-vector.jpg';
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/firebase";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate



  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isFormValid = email !== '' && password !== '';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Récupérer le rôle de l'utilisateur depuis Firestore
      const userDoc = await db.collection("users").doc(user.uid).get();
      const userData = userDoc.data();

      if (userData && userData.role === "admin") {
        navigate("/dashboardadmin");
        toast.success("Login successful! Welcome to admin.");
      } else if (userData && userData.role === "student") {
        navigate("/etuduantdashboard");
        toast.success("Login successful! Welcome Student.");
      } else {
        alert("Rôle utilisateur non défini");
      }
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error(error.message);
      }
      console.error(error);
    }
  };



  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} className='container-form'>
            <h2 className='text-dark fw-bold'>Connexion</h2>
            <p className="title" style={{ color: "grey" }}>Connectez-vous à votre compte</p>
            <form className="form">
              <div className='icone1'>
                <IoMailOutline />
              </div>
              <input
                type="email"
                className="input"
                placeholder="   Adresse Mail  "
                value={email}
                onChange={handleEmailChange}
              />
              <div className='icone2'>
                <FiKey />
              </div>
              <input
                type="password"
                className="input"
                placeholder="    Mot de passe  "
                value={password}
                onChange={handlePasswordChange}
              />
              <>
                <Link to="/forgot" className="page-link-label">Forgot Password?</Link>
              </>
              <button className="form-btn" type="submit" disabled={!isFormValid}>
                Connexion
              </button>
            </form>
          </Col>

          <Col lg={6} md={6} className='texte'>
            <div className="text-center align-items-center pt-4">
              <img src={imglearning} alt="e-learning" className='learningimg' />

              <h3 className='fw-bold'>Oneline E-Learning</h3>
              <p className='fw-bold'>
                Bienvenue sur notre plateforme d'e-learning.
                Connectez-vous pour accéder à vos cours, suivre votre progression et
                interagir avec vos enseignants et camarades de classe.
                Profitez d'une expérience d'apprentissage personnalisée et de ressources pédagogiques de qualité.
                Si vous n'avez pas encore de compte, inscrivez-vous dès aujourd'hui
                pour commencer votre parcours d'apprentissage !
              </p>
              <div>
                <button type='button' className='submit'>
                  <Link className='link'>S'inscrire maintenant</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
