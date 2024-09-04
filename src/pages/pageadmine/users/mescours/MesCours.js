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
            <p>Ce programme HTML/CSS est conçu pour créer une interface utilisateur web élégante et fonctionnelle. 
              Utilisant les technologies HTML et CSS, 
              il fournit un cadre de base pour le développement d'une page web moderne.</p>
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
            <p>Ce programme Bootstrap est conçu pour simplifier le développement d'interfaces web réactives et modernes 
              en utilisant le puissant framework CSS Bootstrap. En tirant parti des composants 
              et des utilitaires fournis par Bootstrap, ce programme permet de créer des pages web élégantes, 
              fonctionnelles et adaptatives avec tout les types d'ecrantst.</p>
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
            <p>JavaScript est conçu pour ajouter des fonctionnalités dynamiques et interactives aux pages web, 
              transformant des interfaces statiques en applications web réactives et engageantes. En utilisant JavaScript, 
              ce programme permet de manipuler le contenu de la page, de gérer des événements utilisateur,</p>
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
            <p> React.js est une application moderne et réactive construite avec la bibliothèque JavaScript React, 
              développée par Facebook. React.js est utilisé pour créer des interfaces utilisateur dynamiques et efficaces, 
              facilitant la construction de composants réutilisables et la gestion de l'état de l'application.</p>
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
            <p>Node.js est une application côté serveur développée avec Node.js, 
              une plateforme basée sur JavaScript qui permet de construire des applications réseau évolutives 
              et performantes. Node.js utilise le moteur V8 de Google Chrome pour exécuter le code JavaScript côté serveur, 
              offrant une solution efficace et non-bloquante pour le traitement des requêtes et la gestion des entrées/sorties.</p>
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
            <p>PHP est une application web côté serveur développée avec PHP 
              (Hypertext Preprocessor), un langage de script open-source principalement utilisé pour le développement 
              de sites web dynamiques et interactifs. PHP est exécuté sur le serveur, 
              permettant de générer des contenus web dynamiques qui sont ensuite envoyés au client.</p>
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
