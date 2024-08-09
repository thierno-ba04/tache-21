import { Col, Container, Row, Table } from "react-bootstrap";
import "./voirbulletin.css";

const VoirBulletin = () => {
    return (
        <div className="mer-voir-bulletin" style={{ paddingTop: "140px" }}>
            <Container>
            <Row>
                    <Col md={4}>
                        <div className="dashboarddemaandeabsences">
                            <p>dashboard / details-bulletin</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-5">
                    <Col md={3}>
                        <h6>Prenom</h6>
                        <h6>Nom</h6>
                        <h6>Adresse</h6>
                        <h6>Telephone</h6>
                    </Col>

                    <Col md={3}>
                        <h6>Thierno Mamadou</h6>
                        <h6>Ba</h6>
                        <h6>Parcelles</h6>
                        <h6>77-079-97-48</h6>
                    </Col>

                    <Col md={3}>
                        <h6>Formation suivie:</h6>
                        <h6>Durée</h6>
                        <h6>Niveau</h6>
                        <h6>Coach</h6>
                    </Col>

                    <Col md={3}>
                        <h6>Programmation</h6>
                        <h6>Un an</h6>
                        <h6>Débutant</h6>
                        <h6>Assane</h6>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Module</th>
                                    <th>Théorie</th>
                                    <th>Pratique</th>
                                    <th>Moyenne</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bootstrap</td>
                                    <td>15</td>
                                    <td>20</td>
                                    <td>17.5</td>
                                </tr>
                                {/* Ajouter d'autres lignes si nécessaire */}
                            </tbody>
                        </Table>

                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Assiduité</th>
                                    <th>Ponctualité</th>
                                    <th>Discipline</th>
                                    <th>Moyenne</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>16</td>
                                    <td>16</td>
                                    <td>16</td>
                                    <td>16</td>
                                </tr>
                                {/* Ajouter d'autres lignes si nécessaire */}
                            </tbody>
                        </Table>

                        <div className="mt-4 text-center moyenne-container">
                            <div className="d-flex justify-content-between moyenne-item">
                                <div>
                                    <h6>Moyenne Conduite</h6>
                                </div>
                                <div>
                                    <h6>16</h6>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between moyenne-item">
                                <div>
                                    <h6>Moyenne Generale</h6>
                                </div>
                                <div>
                                    <h6>17.5</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VoirBulletin;
