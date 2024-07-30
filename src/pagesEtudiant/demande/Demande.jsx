import React from "react";
import { Col, Container, Row, Table, Button, Pagination } from "react-bootstrap";
import "./demande.css";
import { FaDownload, FaEye, FaFacebookMessenger } from "react-icons/fa";

const Demande = () => {
    // Fonction pour générer les items de pagination
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
                        <div className="buttoncsv">
                            <Button>
                                <FaDownload className="me-2 mb-1" />
                                Export CSV
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="text-end">
                        <div className="buttondemande">
                            <Button>
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
        </div>
    );
}

export default Demande;
