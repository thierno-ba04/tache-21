import { Col, Container, Row } from "react-bootstrap";
import "./tache.css";

const Tache = () => {
  return (
    <div
      className="mere-tache d-flex "
      style={{ marginTop: "80px , paddingTop: 120px" }}
    >
      {/* <div className="d-flex ">
        <div className="">
            <p>DASHBOARD / TACHE</p>
        </div>
     <div className="inputsearch ">
              <input type="search" placeholder="Recherche tache" />
            </div>
            </div> */}
      <Container>
        <Row>
          <Col lg={10} md={12}>
            <div className="bg-tache d-md-flex ">
              <div className="borderReight ms-4 mt-3">
                Tache N:00
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p> <br /> <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache">Tache:00</h5>
                <p>
                  1. Vous créez un dossier sur Google Drive nommé Prénom Nom .
                  Vous créez à l’intérieur un dossier pour chaque projet. Vous y
                  mettrez vos captures d’écran et vos réalisations par la suite.
                  Vous partagez le dossier avec le mail
                  contact.elearnign@gmail.com.
                </p>{" "}
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />
                  </p>
                  <a
                    className="a-tache"
                    href="https://drive.google.com/drive/my-drive"
                  >
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mb-5">
                  <div>
                    <button className="btn btn-primary">Démarrée</button>
                  </div>
                  <div>
                    <button className="btn btn-success">Terminer</button>
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
                Tache N:00
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p> <br /> <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache">Tache:00</h5>
                <p>
                  1. Vous créez un dossier sur Google Drive nommé Prénom Nom .
                  Vous créez à l’intérieur un dossier pour chaque projet. Vous y
                  mettrez vos captures d’écran et vos réalisations par la suite.
                  Vous partagez le dossier avec le mail
                  contact.elearnign@gmail.com.
                </p>{" "}
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />
                  </p>
                  <a
                    className="a-tache"
                    href="https://drive.google.com/drive/my-drive"
                  >
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mb-5">
                  <div>
                    <button className="btn btn-primary">Démarrée</button>
                  </div>
                  <div>
                    <button className="btn btn-success">Terminer</button>
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
                Tache N:3
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p> <br /> <br />
                <br />
                <p>démarée il y a un an</p>
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache2">
                  Tâche 02 : Apprendre a créer un site web HTML5/CSS3
                </h5>
                <p>
                  Suivre ce cours et reproduire ce site <br />
                  https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3
                  <br />
                  NB: Pour bien suivre ce tuto, il faut au préalable créer un
                  compte sur openclassroom.
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien2">
                    Liens utiles : <br />
                  </p>
                  <a
                    className="a-tache2"
                    href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3
"
                  >
                    https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3
                  </a>
                </div>
                <div className="demarétermifloat d-flex gap-5  mt-3 mb-4">
                  <div>
                    <button className="btn btn-primary">Démarrée</button>
                  </div>
                  <div>
                    <button className="btn btn-success">Terminer</button>
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

export default Tache;
