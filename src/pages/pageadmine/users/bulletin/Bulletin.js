import React from "react";
import { Col, Container, Row, Table, Pagination } from "react-bootstrap";
import "./bulletin.css";
// eslint-disable-next-line no-unused-vars
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
          <Col lg={1} md={1} className="mt-3"></Col>
          <Col lg={4} md={4}>
            <div className="bulletin">
              <p>dashboard / Bulletin</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={1} className="mt-3"></Col>
          <Col lg={11} md={11} className="mt-3">
            <div className="h5">
              <h5 className="">Liste des bulletins</h5>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={1} md={1} className="mt-3"></Col>
          <Col lg={11} md={11} className="mt-5">
            <div className="div_bultin">
              <div>
                <h6>E-leaning formation</h6>
                <p>
                  Bargny, villa n°241 <br />
                  Tel : +221 77 777 67 88
                </p>
              </div>
              <div>
                <h6>République du SENEGAL</h6>
                <p>Ministère de la formation professionnelle</p>
              </div>
            </div>
            <form className="mt-3">
              <div className="div-form">
                <input
                  type="name"
                  placeholder="Prenom :"
                  className="forminput"
                />
                <label htmlFor="">Faty</label> <br />
                <input type="name" placeholder="Nom :" className="forminput" />
                <label htmlFor="">Niang</label>
                <br />
                <input
                  type="email"
                  placeholder="Adresse :"
                  className="forminput"
                />
                <label htmlFor="">Sébikotane</label> <br />
                <input
                  type="number"
                  placeholder="Numérotl :"
                  className="forminput"
                />
                <label htmlFor="">776557697</label>
              </div>
            </form>

            <Table striped bordered hover className="table-shadow">
              <thead>
                <tr>
                  <th>Motif</th>
                  <th>Module</th>
                  <th>Théorie</th>
                  <th>Pratique</th>
                  <th>Moyenne</th>
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
                  <th>Ponctualité</th>
                  <th>Disipline</th>
                  <th>Moyenne</th>
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
              <thead>
                <tbody className="resultat">
                  <tr>
                    <th>Moyenne conduite :</th>
                    <th>13</th>
                  </tr>
                  <tr>
                    <th>Moyenne générale :</th>
                    <th>15</th>
                  </tr>
                </tbody>
              </thead>
            </Table>
          </Col>
          <Col lg={1} md={1} className="mt-3"></Col>
          <Col lg={11} md={11} className="mt-5">
            <div className="div_bultin">
              <div>
                <h6>E-leaning formation</h6>
                <p>
                  Bargny, villa n°241 <br />
                  Tel : +221 77 777 67 88
                </p>
              </div>
              <div>
                <h6>République du SENEGAL</h6>
                <p>Ministère de la formation professionnelle</p>
              </div>
            </div>
            <form className="mt-3">
              <div className="div-form">
                <input
                  type="name"
                  placeholder="Prenom :"
                  className="forminput"
                />
                <label htmlFor="">Faty</label> <br />
                <input type="name" placeholder="Nom :" className="forminput" />
                <label htmlFor="">Niang</label>
                <br />
                <input
                  type="email"
                  placeholder="Adresse :"
                  className="forminput"
                />
                <label htmlFor="">Sébikotane</label> <br />
                <input
                  type="number"
                  placeholder="Numérotl :"
                  className="forminput"
                />
                <label htmlFor="">776557697</label>
              </div>
            </form>

            <Table striped bordered hover className="table-shadow">
              <thead>
                <tr>
                  <th>Motif</th>
                  <th>Module</th>
                  <th>Théorie</th>
                  <th>Pratique</th>
                  <th>Moyenne</th>
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
                  <th>Ponctualité</th>
                  <th>Disipline</th>
                  <th>Moyenne</th>
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
              <thead>
                <tbody className="resultat">
                  <tr>
                    <th>Moyenne conduite :</th>
                    <th>13</th>
                  </tr>
                  <tr>
                    <th>Moyenne générale :</th>
                    <th>15</th>
                  </tr>
                </tbody>
              </thead>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={1} className="mt-3"></Col>
          <Col lg={11} md={11} className="mt-4">
            <Pagination>{renderPaginationItems()}</Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bulletin;
