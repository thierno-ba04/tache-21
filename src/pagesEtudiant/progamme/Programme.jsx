import { Col, Container, Row } from "react-bootstrap";
import imgjavas from "../../assets/img/kisspng-javascript2503058546-removebg-preview.png"
import imgreact from "../../assets/img/o2switch-deployer-react.js.png"
import imgboot from "../../assets/img/imagesbootstrap__1_-removebg-preview.png"
import imghtmlcss from "../../assets/img/CSS3_and_HTML5_logos_and_wordmarks.svg-removebg-preview.png"
import imghtache21 from "../../assets/img/ZxXAau2iuhYw-removebg-preview.png"
import imgnodejs from "../../assets/img/1200px-Node.js_logo.svg-removebg-preview.png"
import imgphp from "../../assets/img/images-removebg-preview.png"
import imgpython from "../../assets/img/logo-python-removebg-preview.png"




import "./programme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Programme = () => {
  return (
    <div className="bodyy" style={{ paddingTop: "90px" }}>
      <Container>
      <h1 className="h1Programme fw-bold">Programme</h1>
        <Row className="gy-5 mt-5">
        <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imghtmlcss} style={{ width: "80%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">BOOTSTRAP</h3>
                <h6 className="h6bootstrap text-center">
                    LES BASES DU HTML & CSS
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imgboot} style={{ width: "65%"}} className="ms-5 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">BOOTSTRAP</h3>
                <h6 className="h6bootstrap text-center">
                    MAITRISE BOOTSTRAP
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imgjavas} style={{ width: "85%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">JAVASCRIPT</h3>
                <h6 className="h6bootstrap text-center">
                    MAITRISE BOOTSTRAP
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={ imgreact} style={{ width: "80%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">REACTJS</h3>
                <h6 className="h6bootstrap text-center">
                    MAITRISE BOOTSTRAP
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 gy-5">
        <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={ imghtache21} style={{ width: "68%"}} className="ms-5 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">TACHE 21</h3>
                <h6 className="h6bootstrap text-center">
                    LE DARON DU FRONT-END
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={ imgnodejs} style={{ width: "89%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">NODEJS</h3>
                <h6 className="h6bootstrap text-center">
                    APPRENDRE NODEJS
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={ imgphp} style={{ width: "80%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">PHP</h3>
                <h6 className="h6bootstrap text-center">
                    APPRENDRE PHP
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={ imgpython} style={{ width: "89%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3  className="h6bootstrap text-center">PYTHON</h3>
                <h6 className="h6bootstrap text-center">
                    APPRENDRE PYTHON
                </h6>
                <Button variant="primary" className="text-center">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
};

export default Programme;