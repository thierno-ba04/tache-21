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
import Card from "react-bootstrap/Card";
import './coursprfs.css'


function CoursPrfs() {
  
  const { CoursPrfs} = useMyContext();
  return (
    <Container>
      <Row>
      <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <div className="classe">
            <h6>Liste des Domaines</h6>
            {/* <div className="rowsbutt mt-3">
              <Link to="/ajoutcours">
                <Button className="btnajoute">
                  Ajouter <IoIosAddCircleOutline className="iconajoute ms-2 mb-1" />
                </Button>
              </Link>
            </div> */}
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


        {/* <Row className="gy-5 mt-5">
          <Col lg={3} md={6}>
            <Card style={{ width: "18rem", borderRadius: "85px" }}>
              <Card.Img
                variant="top"
                src={imghtmlcss}
                style={{ width: "90%" }}
                className="ms-4 mt-4"
              />
              <Card.Body>
                <h3 className="text-center">HTML5/CSS3</h3>
                <h6 className="text-center">Les bases du HTML/CSS</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card style={{ width: "18rem", borderRadius: "85px" }}>
              <Card.Img
                variant="top"
                src={imgboot}
                style={{ width: "80%" }}
                className="ms-4 mt-3"
              />
              <Card.Body>
                <h3 className="text-center">BOOTSTRAP</h3>
                <h6 className="text-center">MAITRISE BOOTSTRAP</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card style={{ width: "18rem", borderRadius: "85px" }}>
              <Card.Img
                variant="top"
                src={imgjavas}
                style={{ width: "110%" }}
                className=" mt-3"
              />
              <Card.Body>
                <h3 className="text-center">JAVASCRIPT</h3>
                <h6 className="text-center">JAVASCRIPT DEBUTANT</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imgreact} />
              <Card.Body>
                <h3 className="text-center"> REACTJS</h3>
                <h6 className="text-center">REACTJS DEBUTANT</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 gy-5">
          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imghtache21} />
              <Card.Body>
                <h3 className="text-center"> TACHE 21</h3>
                <h6 className="text-center">DARON DU FRONT-END</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px", height: "24rem" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imgnodejs} className="mt-5" />
              <Card.Body>
                <h3 className="text-center"> NODEJS</h3>
                <h6 className="text-center">Apprendre NodeJS</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px", height: "24rem" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imgphp} className="mt-3" />
              <Card.Body>
                <h3 className="text-center mt-4"> PHP</h3>
                <h6 className="text-center">Apprendre PHP</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px", height: "24rem" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imgpython} className="mt-5" />
              <Card.Body>
                <h3 className="text-center mt-4"> PYTHON</h3>
                <h6 className="text-center">Apprendre PYTHON</h6>
                <Button variant="primary" className="ms-5">
                  Voir les cours
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}


      </Row>
    </Container>
  );
}

export default CoursPrfs;
