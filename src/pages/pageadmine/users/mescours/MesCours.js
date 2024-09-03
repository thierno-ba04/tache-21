import React from 'react'
import {
    Col,
    Container,
    Row,
  } from "react-bootstrap";
import "./mescours.css"


function MesCours() {
  return (
    <Container>

    <Row>
      <div className="courstitre mt-5">
        <h3>Lites des Programmes</h3>
      </div>
          <Col lg={6} md={6} className="courshtml">
          <div className="divmescours">
            <h4> Déscription Html/css</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://projet.eu.org/pedago/sin/ICN/2nde/1-html_css.pdf">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
          </Col>

          <Col lg={6} md={6} className="coursbootstrap">
          <div className="divmescours">
            <h4> Déscription bootstrap</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://fr.scribd.com/document/540424021/coursBootstrap5-1">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
            </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="divmescours">
            <h4> Déscription Javascript</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://profdoc.iddocs.fr/IMG/pdf/billiejoe_javascript_fiches.pdf">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
          </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="divmescours">
            <h4> Déscription React-js</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://react-pdf.org">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
          </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="divmescours">
            <h4> Déscription Node.js</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://www.reveillere.fr/M2WEB/cours/nodeJs.pdf">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
          </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="divmescours">
            <h4> Déscription PHP</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum quasi qui, neque quod cumque ullam labore 
                odit explicabo voluptate dolorum error laborum debitis?</p>
          </div>
          <a href="https://www.univ-orleans.fr/iut-orleans/informatique/intra/tuto/php/FastPHP.pdf">
            <button className="btn btn-primary">
                
                Fichier Pdf

            </button>
            </a>
          </Col>
        </Row>
      </Container>
  )
}

export default MesCours

//   react/
//  js
//  bootstrap
//  html
