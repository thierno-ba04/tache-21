// src/components/Login.js
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import { IoMailOutline } from 'react-icons/io5';
import { FiKey } from 'react-icons/fi';
import TextField from '@mui/material/TextField';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isFormValid = email !== '' && password !== '';

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} className='container-form'>
            <h2 className='text-dark fw-bold'>Connexion</h2>
            <p className="title" style={{ color: "grey" }}>Connectez-vous à votre compte</p>
            <form className="form">
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />

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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;