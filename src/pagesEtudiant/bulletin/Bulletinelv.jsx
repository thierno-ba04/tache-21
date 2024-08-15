import React from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Pagination,
} from "react-bootstrap";
import "./bulletin.css";
import { FaEye, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const Bulletinelv = () => {
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
              <p>dashboard / Bulletin</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="mt-3">
            <div className="buttoncsv">
              <h5 className="h5Liste des bulletins ms-5">
                Liste des bulletins
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <Table striped bordered hover className="table-shadow">
              <thead>
                <tr>
                  <th>Motif</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* Remplissez les lignes de votre tableau ici */}
                <tr>
                  <td>Bulletin trimestre 1</td>
                  <td>
                    <FaFileAlt size={20} className="me-2" />
                    <Link to="/voirbulletin">Vusialiser</Link>
                  </td>
                </tr>

                <tr>
                  <td>Bulletin trimestre 2</td>
                  <td>
                    <FaFileAlt size={20} className="me-2" />

                    <Link to="/voirbulletin">Vusialiser</Link>
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
};

export default  Bulletinelv;
