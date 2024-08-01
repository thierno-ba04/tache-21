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

const Bulletin = () => {
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
        {/* <Col lg={1} md={1}>
            
          </Col> */}
          <Col lg={4} md={4}>
            <div className="bulletin">
              <p>dashboard / Bulletin</p>
            </div>
          </Col>
        </Row>
        <Row>
        <Col lg={1} md={1} className="mt-3">
        </Col>
          <Col lg={11} md={11} className="mt-3">
            <div className="btnbulletin">
              <h5 className="h5Liste des bulletins ms-5">
                Liste des bulletins
              </h5>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={6} className="mt-5">
            <Table striped bordered hover className="table-shadow">
              <thead>
                <tr>
                  <th>Motif</th>
                  <th>
                    Module
                   </th>
                   <th>
                    Théorie
                   </th>
                   <th>
                    Pratique
                   </th>
                   <th>
                    Moyenne
                   </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bulletin trimestre 1</td>
                   <td>React</td>
                   <td>11</td>
                   <td>15</td>
                   <td>13.5</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                <th>Actions</th>
                  <th>Assiduité</th>
                  <th>
                    Ponctualité
                   </th>
                   <th>
                    Disipline
                   </th>
                   <th>
                    Moyenne
                   </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                   <td>11</td>
                   <td>15</td>
                   <td>16</td>
                  <td>16</td>
                </tr>
              </tbody>
            </Table>
            <Table>
                <thead >
                    <tbody className="resultat">
                    <tr>
                        <th>
                        Moyenne conduite :
                        </th>
                        <th>
                        13
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Moyenne générale :
                        </th>
                        <th>
                        15
                        </th>
                    </tr>
                    </tbody>
                </thead>
                
            </Table>
          </Col>
        <Col lg={6} md={6} className="mt-5">
            <Table striped bordered hover className="table-shadow">
              <thead>
                <tr>
                  <th>Motif</th>
                  <th>
                    Module
                   </th>
                   <th>
                    Théorie
                   </th>
                   <th>
                    Pratique
                   </th>
                   <th>
                    Moyenne
                   </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bulletin trimestre 2</td>
                   <td>HTML / CSS</td>
                   <td>11</td>
                   <td>15</td>
                   <td>13.5</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                <th>Actions</th>
                  <th>Assiduité</th>
                  <th>
                    Ponctualité
                   </th>
                   <th>
                    Disipline
                   </th>
                   <th>
                    Moyenne
                   </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                   <td>11</td>
                   <td>15</td>
                   <td>16</td>
                  <td>16</td>
                </tr>
              </tbody>
            </Table>
            <Table>
                <thead >
                    <tbody className="resultat">
                    <tr>
                        <th>
                        Moyenne conduite :
                        </th>
                        <th>
                        13
                        </th>
                    </tr>
                    <tr>
                        <th>
                        Moyenne générale :
                        </th>
                        <th>
                        15
                        </th>
                    </tr>
                    </tbody>
                </thead>
                
            </Table>
          </Col>
        </Row>
        <Row>
        {/* <Col lg={1} md={1} className="mt-3">
        </Col> */}
          <Col lg={12} md={12} className="mt-4">
            <Pagination>{renderPaginationItems()}</Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bulletin;