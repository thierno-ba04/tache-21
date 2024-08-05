import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import imgbulletin from "../../../../assets/img/Bulletin.png";
import imgbcours from "../../../../assets/img/courstrvl.jpeg";
import { Link } from "react-router-dom";
import "./eleves.css";

function Eleves() {
  return (
    <Container>
      <Row className="partiselevs">
        <Col lg={1} md={1} className=""></Col>

        <Col lg={6} md={6} className="">
          <h2>Bullettins</h2>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={imgbulletin} className="imgeleves" />
            <Link to="/bulletin">
              <Card.Body>
                <Button variant="primary">Voir le bulletin</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col lg={5} md={5} className="">
          <h2>Cours</h2>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={imgbcours} className="imgeleves" />
            <Link to="/cours">
            <Card.Body>
              <Button variant="primary">Voir mes cours</Button>
            </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Eleves;
