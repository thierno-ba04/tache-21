import { Col, Container, Row } from "react-bootstrap";
import "./tache.css";

const Tache = () => {
  return (
    <div
      className="mere-tache"
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
                Tache N:1
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
                    Liens utiles : <br />{" "}
                  </p>
                  <a href="https://drive.google.com/drive/my-drive">
                    https://drive.google.com/drive/my-drive
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
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
                Tache N:2
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p> <br /> <br />
                <br />
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache1">
                  Tâche 01 : Les bases du HTML5 et CSS3
                </h5>
                <p>
                  Faire des recherches sur les éditeurs de textes Suivre ce
                  tutoriel et reproduire soigneusement tous les exercices sur
                  votre éditeur <p className="deplace">de texte.</p>{" "}
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />{" "}
                  </p>
                  <a
                    className="a-tache1"
                    href="https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3
"
                  >
                    https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
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
                Tache N:2
                <p>durée: 2h</p>
                <h6>Syllabus</h6>
                <p>HTML/CSS_2024</p> <br /> <br />
                <br />
              </div>
              <div className="ms-3 mt-3">
                <h5 className="h5tache1">
                  Tâche 01 : Les bases du HTML5 et CSS3
                </h5>
                <p>
                  Faire des recherches sur les éditeurs de textes Suivre ce
                  tutoriel et reproduire soigneusement tous les exercices sur
                  votre éditeur <p className="deplace">de texte.</p>{" "}
                </p>
                <br />
                <br />
                <div className="lienutiles">
                  <p className="p-lien">
                    Liens utiles : <br />{" "}
                  </p>
                  <a
                    className="a-tache1"
                    href="https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3
"
                  >
                    https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3
                  </a>
                </div>
                <div className="demarétermi d-flex gap-5 me-5 mt-3">
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
