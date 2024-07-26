import { Col, Container, Row } from "react-bootstrap";
import imgjavas from "../../assets/img/kisspng-javascript2503058546-removebg-preview.png";
import imgreact from "../../assets/img/o2switch-deployer-react.js.png";
import imgboot from "../../assets/img/imagesbootstrap__1_-removebg-preview.png";
import imghtmlcss from "../../assets/img/CSS3_and_HTML5_logos_and_wordmarks.svg-removebg-preview.png";
import imghtache21 from "../../assets/img/ZxXAau2iuhYw-removebg-preview.png";

import "./programme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Programme = () => {
  return (
    <div className="bodyy" style={{ marginTop: "80px", paddingTop: "120px" }}>
      <Container>
        <Row className="gy-5">
          <Col lg={3} md={6}>
            <Card style={{ width: "18rem", borderRadius: "85px" }}>
              <Card.Img
                variant="top"
                src={imghtmlcss}
                style={{ width: "90%" }}
                className="ms-4 mt-4"
              />
              <Card.Body>
                <h3 className="h3pr">HTML5/CSS3</h3>
                <h6 className="text-center">Les bases du HTML/CSS</h6>
                <div className="btnvoircours d-flex justify-content-center">
                  <Button variant="primary">Voir les cours</Button>
                </div>
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
                <h3 className="h3pr">BOOTSTRAP</h3>
                <h6 className="text-center">MAITRISE BOOTSTRAP</h6>
                <div className="btnvoircours d-flex justify-content-center">
                  <Button variant="primary">Voir les cours</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card style={{ width: "18rem", borderRadius: "85px" }}>
              <Card.Img variant="top" src={imgjavas} className="mt-4" />
              <Card.Body>
                <h3 className="h3pr"> JAVASCRIPT</h3>
                <h6 className="text-center">JAVASCRIPT DEBUTANT</h6>
                <div className="btnvoircours d-flex justify-content-center">
                  <Button variant="primary">Voir les cours</Button>
                </div>{" "}
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
                <h3 className="h3pr"> REACTJS</h3>
                <h6 className="text-center">REACTJS DEBUTANT</h6>
                <div className="btnvoircours d-flex justify-content-center">
                  <div className="btnvoircours d-flex justify-content-center">
                    <Button variant="primary">Voir les cours</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={3} md={6}>
            <Card
              style={{ width: "18rem", borderRadius: "85px" }}
              className="mt-"
            >
              <Card.Img variant="top" src={imghtache21} />
              <Card.Body>
                <h3 className="h3pr"> TACHE 21</h3>
                <h6 className="text-center">DARON DU FRONT-END</h6>
                <div className="btnvoircours d-flex justify-content-center">
                  <Button variant="primary">Voir les cours</Button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Programme;
