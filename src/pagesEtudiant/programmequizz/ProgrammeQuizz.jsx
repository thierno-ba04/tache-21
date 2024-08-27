import { Col, Container, Row } from "react-bootstrap";
import imgjavas from "../../assets/img/kisspng-javascript2503058546-removebg-preview.png"
import imgreact from "../../assets/img/o2switch-deployer-react.js.png"
import imgboot from "../../assets/img/imagesbootstrap__1_-removebg-preview.png"
import imghtmlcss from "../../assets/img/CSS3_and_HTML5_logos_and_wordmarks.svg-removebg-preview.png"
import imghtache21 from "../../assets/img/ZxXAau2iuhYw-removebg-preview.png"
import imgnodejs from "../../assets/img/1200px-Node.js_logo.svg-removebg-preview.png"
import imgphp from "../../assets/img/images-removebg-preview.png"
import imgpython from "../../assets/img/logo-python-removebg-preview.png"
import "./programmequizz.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProgrammeQuizz = () => {
  return (
    <div className="bodyy" style={{ paddingTop: "90px" }}>
      <Container>
      <Row>
          <Col md={4}>
            <div className="dashboarddemaandeabsences">
              <p>Programme / QUIZZ</p>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 mt-5">
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imghtmlcss} style={{width: "90%"}}  className="ms-4 mt-4"/>
              <Card.Body>
                <h3 className="text-center">HTML5/CSS3</h3>
                <h6 className="text-center">
                    Les bases du HTML/CSS
                </h6>
                <Link to="/quizzhtmlcss">
                <Button variant="primary" className="ms-3">Commencer le Quizz</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imgboot} style={{ width: "80%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3 className="text-center">BOOTSTRAP</h3>
                <h6 className="text-center">
                    MAITRISE BOOTSTRAP
                </h6>
                <Link to="/quizzbootstrap">
                <Button variant="primary" className="ms-3">Commencer le Quizz</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px", height:"50vh"}}>
              <Card.Img variant="top" src={ imgjavas } className="mt-4" />
              <Card.Body>
                <h3 className="text-center"> JAVASCRIPT</h3>
                <h6 className="text-center">
                    JAVASCRIPT DEBUTANT
                </h6>
                <Link to="/quizzjavascript">
                <Button variant="primary">Commencer le Quizz</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}} className="mt-">
              <Card.Img variant="top" src={imgreact} />
              <Card.Body>
                <h3 className="text-center"> REACTJS</h3>
                <h6 className="text-center">
                    REACTJS DEBUTANT
                </h6>
                <Button variant="primary"  className="ms-3">Commencer le Quizz</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 gy-5">
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}} className="mt-">
              <Card.Img variant="top" src={imghtache21} />
              <Card.Body>
                <h3 className="text-center"> TACHE 21</h3>
                <h6 className="text-center">
                    DARON DU FRONT-END
                </h6>
                <Button variant="primary"  className="ms-3">Commencer le Quizz</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px", height:"24rem"}} className="mt-">
              <Card.Img variant="top" src={ imgnodejs} className="mt-5" />
              <Card.Body>
                <h3 className="text-center"> NODEJS</h3>
                <h6 className="text-center">
                    Apprendre NodeJS
                </h6>
                <Button variant="primary"  className="ms-3">Commencer le Quizz</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px", height:"24rem"}} className="mt-">
              <Card.Img variant="top" src={ imgphp} className="mt-3" />
              <Card.Body>
                <h3 className="text-center mt-4"> PHP</h3>
                <h6 className="text-center">
                    Apprendre PHP
                </h6>
                <Button variant="primary" className="ms-3">Commencer le Quizz</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px", height:"24rem"}} className="mt-">
              <Card.Img variant="top" src={ imgpython} className="mt-5" />
              <Card.Body>
                <h3 className="text-center mt-4"> PYTHON</h3>
                <h6 className="text-center">
                    Apprendre PYTHON
                </h6>
                <Button variant="primary"  className="ms-3">Commencer le Quizz</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
};

export default ProgrammeQuizz;
