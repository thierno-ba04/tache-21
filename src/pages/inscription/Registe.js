import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiKey } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import "./registe.css"

function Registe() {
  return (
    <div className='body2'>
            <Container fluid>
        <Row>
            <Col lg={6} md={6} className='container-form2'>
                <h2>S'inscrire</h2>
                <p className="title" style={{ color: "grey" }}>Créer un compte</p>
                <form className="form">
                  <div className='icone1'>
                    <IoMailOutline />
                  </div>
                  <input
                    type="name"
                    className="input"
                    placeholder="   Nom complet  "
                  />
                  <input
                    type="e-mail"
                    className="input"
                    placeholder="   Adresse Mail  "
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="   Mot de passe  "
                  />
                  <div className='icone2'>
                    <FiKey />
                  </div>
                  <input
                    type="password"
                    className="input"
                    placeholder="   Confirmer mot de passe  "
                  />
                  
                  <button className="form-btn" type="submit">
                    S'inscrire
                  </button>
                </form>
            </Col>
      
            <Col lg={6} md={6} className='texte2'>
              <div className="">
                {/* <h3>E-Learning Formation</h3>
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
                    <Link to="/inscription" className='link'>S'inscrire maintenant</Link>
                  </button>
                </div> */}
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Registe
