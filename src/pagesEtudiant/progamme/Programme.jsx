import { Col, Container, Row } from "react-bootstrap";
import imgjavas from "../../assets/img/kisspng-javascript2503058546-removebg-preview.png"
import imgreact from "../../assets/img/o2switch-deployer-react.js.png"
import imgboot from "../../assets/img/imagesbootstrap__1_-removebg-preview.png"
import imghtmlcss from "../../assets/img/CSS3_and_HTML5_logos_and_wordmarks.svg-removebg-preview.png"
import imghtache21 from "../../assets/img/ZxXAau2iuhYw-removebg-preview.png"

import "./programme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Programme = () => {
  return (
    <div className="bodyy" style={{ marginTop: "80px", paddingTop: "120px" }}>
      <Container>
        <Row className="gy-5">
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imghtmlcss} style={{width: "90%"}}  className="ms-4 mt-4"/>
              <Card.Body>
                <h3>HTML5/CSS3</h3>
                <h6>
                    Les bases du HTML/CSS
                </h6>
                <Button variant="primary">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}}>
              <Card.Img variant="top" src={imgboot} style={{ width: "80%"}} className="ms-4 mt-3"/>
              <Card.Body>
                <h3>BOOTSTRAP</h3>
                <h6>
                    MAITRISE BOOTSTRAP
                </h6>
                <Button variant="primary">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px", height:"46vh"}}>
              <Card.Img variant="top" src={ imgjavas } className="mt-4" />
              <Card.Body>
                <h3> JAVASCRIPT</h3>
                <h6>
                    JAVASCRIPT DEBUTANT
                </h6>
                <Button variant="primary">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}} className="mt-">
              <Card.Img variant="top" src={imgreact} />
              <Card.Body>
                <h3> REACTJS</h3>
                <h6>
                    REACTJS DEBUTANT
                </h6>
                <Button variant="primary">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={3} md={6}>
          <Card style={{ width: "18rem", borderRadius:"85px"}} className="mt-">
              <Card.Img variant="top" src={imghtache21} />
              <Card.Body>
                <h3> TACHE 21</h3>
                <h6>
                    DARON DU FRONT-END
                </h6>
                <Button variant="primary">Voir les cours</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Programme;