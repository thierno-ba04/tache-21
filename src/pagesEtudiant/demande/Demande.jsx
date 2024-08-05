import React, { useState } from "react";
import { Col, Container, Row, Table, Button, Pagination, Modal, Form } from "react-bootstrap";
import "./demande.css";
import { FaDownload, FaEye, FaFacebookMessenger } from "react-icons/fa";

const Demande = () => {
    const [show, setShow] = useState(false);
    const [motif, setMotif] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérer l'envoi des données ici
        console.log({ motif, startDate, endDate });
        handleClose();
    };

    const renderPaginationItems = () => {
        let items = [];
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item key={number} active={number === 1}>
                    {number}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (
        <div className="" style={{ paddingTop: "120px" }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="dashboarddemaandeabsences">
                            <p>dashboard/ demaandes absences</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6}>
                        <div className="buttoncsv2">
                            <Button>
                                <FaDownload className="me-2 mb-1" />
                                Export CSV
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="text-end">
                        <div className="buttondemande">
                            <Button onClick={handleShow}>
                                <FaFacebookMessenger className="me-2 mb-1" />
                                Faire une Demande
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5">
                        <Table striped bordered hover className="table-shadow">
                            <thead>
                                <tr>
                                    <th>Motif</th>
                                    <th>Date de début</th>
                                    <th>Date de fin</th>
                                    <th>Statut</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Remplissez les lignes de votre tableau ici */}
                                <tr>
                                    <td>Pause Formation</td>
                                    <td>01/10/2024</td>
                                    <td>05/12/2024</td>
                                    <td>Approuvé</td>
                                    <td>
                                        <FaEye />
                                    </td>
                                </tr>
                                {/* Ajoutez plus de lignes selon vos besoins */}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination>{renderPaginationItems()}</Pagination>
                    </Col>
                </Row>
            </Container>

            {/* Modal pour faire une demande */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Faire une Demande</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="motifSelect">
                            <Form.Label>Motif</Form.Label>
                            <Form.Control as="select" value={motif} onChange={(e) => setMotif(e.target.value)} required>
                                <option value="">Sélectionner un motif</option>
                                <option value="Absence">Absence</option>
                                <option value="Changement Horaire">Changement Horaire</option>
                                <option value="Abandon">Abandon</option>
                                <option value="Pause Formation">Pause Formation</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label>Date de début</Form.Label>
                            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="endDate">
                            <Form.Label>Date de fin</Form.Label>
                            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button>
                        <Button variant="secondary" onClick={handleClose} className="ms-2">
                            Annuler
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Demande;
