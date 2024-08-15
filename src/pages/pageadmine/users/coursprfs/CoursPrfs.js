import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { LiaFileExportSolid } from 'react-icons/lia';
import { IoIosAddCircleOutline } from 'react-icons/io';
import imgcour from "../../../../assets/img/CSS3_and_HTML5_logos_and_wordmarks.svg-removebg-preview.png";
import imgboots from "../../../../assets/img/imagesbootstrap__1_-removebg-preview.png";
import imgbjs from "../../../../assets/img/kisspng-javascript2503058546-removebg-preview.png";
import imgreact from "../../../../assets/img/o2switch-deployer-react.js.png";
import { Link } from "react-router-dom";
import { useMyContext } from '../../../../context/MyContext';
import './coursprfs.css'


function CoursPrfs() {
  
  const { CoursPrfs} = useMyContext();
  return (
    <Container>
      <Row>
      <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <div className="classe">
            <h6>Liste des Cours</h6>
            <div className="rowsbutt mt-3">
              <Link to="/ajoutcours">
                <Button className="btnajoute">
                  Ajouter <IoIosAddCircleOutline className="iconajoute ms-2 mb-1" />
                </Button>
              </Link>
            </div>
            <div className="ms-2 mt-3">
              <Button>
                <LiaFileExportSolid className="buttexport me-2 mb-1" /> Imprimer to CSV
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={1} md={1}></Col>
        <Col lg={5} md={5} className="courshtml">
          <div className="div_h4">
            <h4>Html/css</h4>
          </div>
          <Link to="/mescours">
            <div className="card">
              <img src={imgcour} alt="html/css" className="coursimg" />
            </div>
          </Link>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={5} md={5} className="coursbootstrap">
          <div className="div_h4">
            <h4>Bootstrap</h4>
          </div>
          <Link to="/mescours">
            <div className="card">
              <img src={imgboots} alt="bootstrap" className="coursimg" />
            </div>
          </Link>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={5} md={5} className="mt-5">
          <div className="div_h4 mt-5">
            <h4>Javascript</h4>
          </div>
          <Link to="/mescours">
            <div className="card">
              <img src={imgbjs} alt="javascript" className="coursimg" />
            </div>
          </Link>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={5} md={5} className="mt-5">
          <div className="div_h4 mt-5">
            <h4>React-Js</h4>
          </div>
          <Link to="/mescours">
            <div className="card">
              <img src={imgreact} alt="react-js" className="coursimg" />
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CoursPrfs;
