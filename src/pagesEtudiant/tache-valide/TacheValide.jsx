import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import certificatImage from '../../assets/img/certificat_360.jpeg'; // Mettez à jour le chemin si nécessaire

const TacheValide = () => {
  const handleDownload = () => {
    // Créez un élément de lien temporaire
    const link = document.createElement('a');
    link.href = certificatImage; // Définissez l'URL sur le chemin de l'image importée
    link.download = 'certificat.png'; // Définissez le nom de fichier par défaut
    link.click(); // Déclenchez le téléchargement
  };

  return (
    <div
      className="mere-tache"
      style={{ marginTop: '80px', paddingTop: '10px' }}
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
            <div className="bg-tache d-md-flex">
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
            <div className="bg-tache d-md-flex">
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
            <div className="bg-tache d-md-flex">
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

        {/* Répétez ce bloc pour d'autres tâches */}
        <Row>
          <Col lg={10} md={12}>
            <div className="bg-tache d-md-flex">
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

        {/* Ajoutez plus de tâches au besoin */}

        <Row>
          <Col lg={10} md={12} className="text-center mt-4">
            <Button
              variant="primary"
              onClick={handleDownload}
            >
              Télécharger le Certificat
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TacheValide;
