import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import "./fairedemande.css";

const FaireDemande = () => {
    return (
        <div className="" style={{ paddingTop: "120px" }}>

        <Container>
             <Row>
                    <Col lg={4} md={6}>
                        <div className="dashboarddemaandeabsences">
                            <p>dashboard/ demaandes absences</p>
                        </div>
                    </Col>
                </Row>
            <Row className="d-flex justify-content-center align-items-center" style={{marginTop: "50px"}}>
                <Col md={8}>
                    <Table bordered className="table-shadow">
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Group controlId="demandeType">
                                        <Form.Label className='fs-5 fw-bold'>Type de demande</Form.Label>
                                        <Form.Control as="select">
                                            <option>Absence</option>
                                            <option>Changement d'horaire</option>
                                            <option>Abandon</option>
                                            <option>Pause</option>
                                            <option>Formation</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Group controlId="demandeMotif">
                                        <Form.Label className='fs-5 fw-bold'>Motif de votre demande</Form.Label>
                                        <Form.Control type="text" placeholder="Entrez le motif de votre demande" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="dateDebut">
                                                <Form.Label>Date de début</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="dateFin">
                                                <Form.Label>Date de fin</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex gap-5 ">
                                        <Button variant="primary" type="button" className="w-75">Annuler</Button>
                                        <Button variant="success" type="submit" className="w-75">Envoyer</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>

    );
}

export default FaireDemande;
