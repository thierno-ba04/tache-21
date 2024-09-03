import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../../../assets/img/images (1) 1.png";
import imgprfs from "../../../../assets/img/undraw_Documents_re_isxv 1.png";
import "./professeurs.css";
import Classe from "../classe/Classe";
// import Cours from "../cours/Cours";
import { Link } from "react-router-dom";
import CoursPrfs from "../coursprfs/CoursPrfs";

function Professeurs() {
  const [activeContent, setActiveContent] = useState(null);

  const handleShowContent = (content) => {
    setActiveContent(content);
  };

  return (
    <Container>
      <Row className="professeurs g-4">
        <Row>
      <Col lg={1} md={1}></Col>
          <Col lg={4} md={4} className="mt-5">
            <div className="bulletin mt-5">
              <p>dashboard / Utilisateurs</p>
            </div>
          </Col>
          </Row>
        <Col lg={1} md={1} className=""></Col>
        <Col lg={5} md={5} className="">
          <div className="prfsrdiv">
            <img src={images} alt="images" className="imgprfs" />
          </div>
          <div className="linkcours">
            <Link
              className="linkcours"
              onClick={() => handleShowContent('classe')}
              style={{ cursor: 'pointer' }}
            >
              Classe
            </Link>
          </div>
        </Col>
        <Col lg={1} md={1} className=""></Col>
        <Col lg={5} md={5} className="">
          <div className="prfsrdiv">
            <img src={imgprfs} alt="images" className="imgprfs" />
          </div>
          <div className="linkcours">
            <Link
              className="linkcours"
              onClick={() => handleShowContent('coursprfs')}
              style={{ cursor: 'pointer' }}
            >
              Domaines
            </Link>
          </div>
        </Col>
      </Row>
      {activeContent === 'classe' && <Classe />} {/* Affiche Classe uniquement si activeContent est 'classe' */}
      {activeContent === 'coursprfs' && <CoursPrfs />} {/* Affiche Cours uniquement si activeContent est 'cours' */}
    </Container>
  );
}

export default Professeurs;
