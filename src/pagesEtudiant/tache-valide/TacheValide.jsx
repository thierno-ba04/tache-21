import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TacheValide = () => {
  return (
    <div
      className="mere-tache"
      style={{ marginTop: "80px", paddingTop: "10px" }}
    >
      
      <Container>
        <Row>
          <Col md={4}>
            <div className="dashboarddemaandeabsences">
              <p>dashboard / Tache Validés</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} md={12}>
            <div className="bg-tache d-md-flex ">
              <div className="borderReight ms-4 mt-3">
                Tache N:1
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p>
                <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache">Tache:00</h5>
                <p>
                  1. Vous créez un dossier sur Google Drive nommé Prénom Nom.
                  Vous créez à l’intérieur un dossier pour chaque projet. Vous y
                  mettrez vos captures d’écran et vos réalisations par la suite.
                  Vous partagez le dossier avec le mail
                  contact.elearnign@gmail.com.
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />
                  </p>
                  <a href="https://drive.google.com/drive/my-drive">
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
                  <div>
                    <button className="btn btn-success">Tache Valide</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} md={12}>
            <div className="bg-tache d-md-flex ">
              <div className="borderReight ms-4 mt-3">
                Tache N:1
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p>
                <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache">Tache:00</h5>
                <p>
                  1. Vous créez un dossier sur Google Drive nommé Prénom Nom.
                  Vous créez à l’intérieur un dossier pour chaque projet. Vous y
                  mettrez vos captures d’écran et vos réalisations par la suite.
                  Vous partagez le dossier avec le mail
                  contact.elearnign@gmail.com.
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />
                  </p>
                  <a href="https://drive.google.com/drive/my-drive">
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
                  <div>
                    <button className="btn btn-success">Tache Valide</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} md={12}>
            <div className="bg-tache d-md-flex ">
              <div className="borderReight ms-4 mt-3">
                Tache N:1
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p>
                <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache">Tache:00</h5>
                <p>
                  1. Vous créez un dossier sur Google Drive nommé Prénom Nom.
                  Vous créez à l’intérieur un dossier pour chaque projet. Vous y
                  mettrez vos captures d’écran et vos réalisations par la suite.
                  Vous partagez le dossier avec le mail
                  contact.elearnign@gmail.com.
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />
                  </p>
                  <a href="https://drive.google.com/drive/my-drive">
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
                  <div>
                    <button className="btn btn-success">Tache Valide</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TacheValide;
