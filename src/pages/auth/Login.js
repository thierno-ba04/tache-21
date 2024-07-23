// src/components/Login.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import { IoMailOutline } from 'react-icons/io5';
import { FiKey } from 'react-icons/fi';

function Login() {
  return (
    <div>
      <Container fluid>
        <Row>
            <Col lg={6} md={6} className='container-form'>
                <h2>Connexion</h2>
                <p className="title" style={{ color: "grey" }}>Connectez-vous à votre compte</p>
                <form className="form">
                  <div className='icone1'>
                    <IoMailOutline />
                  </div>
                  <input
                    type="email"
                    className="input"
                    placeholder="   Adresse Mail  "
                  />
                  <div className='icone2'>
                    <FiKey />
                  </div>
                  <input
                    type="password"
                    className="input"
                    placeholder="    Mot de passe  "
                  />
                  <>
                    <Link to="/forgot" className="page-link-label">Forgot Password?</Link>
                  </>
                  <button className="form-btn" type="submit">
                    Connexion
                  </button>
                </form>
            </Col>
      
            <Col lg={6} md={6} className='texte'>
              <div className="text-center align-items-center pt-4">
                <h3>E-Learning Formation</h3>
                <p>
                  Bienvenue sur notre plateforme d'e-learning.
                  Connectez-vous pour accéder à vos cours, suivre votre progression et
                  interagir avec vos enseignants et camarades de classe.
                  Profitez d'une expérience d'apprentissage personnalisée et de ressources pédagogiques de qualité.
                  Si vous n'avez pas encore de compte, inscrivez-vous dès aujourd'hui
                  pour commencer votre parcours d'apprentissage !
                </p>
                <div>
                  <button type='submit' className='submit'>
                    <Link to="/inscrire" className='link'>S'inscrire maintenant</Link>
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
