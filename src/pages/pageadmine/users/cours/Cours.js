import React from 'react';
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./cours.css";
import imgcour from "../../../../assets/img/imgcour.jpg";
import imgboots from "../../../../assets/img/imgboots.jpeg";
import imgbjs from "../../../../assets/img/imgjs.jpg";
import imgreact from "../../../../assets/img/imgreact.jpg";
import {Link} from "react-router-dom";

function Cours() {
  return (
    <Container>

    <Row>
      <div className="courstitre">
        <h3>Mes cours</h3>
      </div>
          <Col lg={6} md={6} className="courshtml">
          <div className="div_h4">
            <h4>Html/css</h4>
          </div>
          <Link to="/mescours">

            <img src={imgcour} alt="html/css" className="coursimg" />
            </Link>
          </Col>

          <Col lg={6} md={6} className="coursbootstrap">
          <div className="div_h4">
            <h4>Bootstrap</h4>
          </div>
          <Link to="/mescours">

            <img src={imgboots} alt="bootstrap" className="coursimg" />
            </Link>
          </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="div_h4">
            <h4>Javascript</h4>
          </div>
          <Link to="/mescours">

            <img src={imgbjs} alt="javascript" className="coursimg" />
            </Link>
          </Col>
          <Col lg={6} md={6} className="mt-5">
          <div className="div_h4">
            <h4>React-Js</h4>
          </div>
          <Link to="/mescours">
            <img src={imgreact} alt="react-js" className="coursimg" />
          </Link>
          </Col>
        </Row>
      </Container>
  )
}

export default Cours
