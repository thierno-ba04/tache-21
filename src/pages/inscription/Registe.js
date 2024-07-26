import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiKey } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import "./registe.css"
import { MdOutlinePermIdentity } from 'react-icons/md';
import imglearning  from "../../assets/img/logo (2).png";

function Registe() {
  return (
    <div >
            <Container fluid>
        <Row>
            <Col lg={6} md={6} className='container-form2'>
                <h2 className='text-dark fw-bold'>S'inscrire</h2>
                <p className="title" style={{ color: "grey" }}>Créer un compte</p>
                <form className="form">
                  <div className='icone3 ms-3'>
                  <MdOutlinePermIdentity />
                  </div>
                  <input
                    type="name"
                    className="input"
                    placeholder="   Nom complet  "
                  />
                  <div className='icone4 ms-3'>
                    <IoMailOutline />
                  </div>
                  <input
                    type="e-mail"
                    className="input"
                    placeholder="   Adresse Mail  "
                  />
                   <div className='icone5 ms-3'>
                    <FiKey />
                  </div>
                  <input
                    type="password"
                    className="input"
                    placeholder="   Mot de passe  "
                  />
                  <div className='icone6 ms-3'>
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
      
            <Col lg={6} md={6} className='body2'>
            <div className="text-center align-items-center pt-4">
                <h3>Oneline E-Learning</h3>
                <img src={imglearning} alt="e-learning" className='learningimg'/>

              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Registe
