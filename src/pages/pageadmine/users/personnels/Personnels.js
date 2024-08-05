import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Personnels() {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col lg={6} md={6} className=''>
       <h2>
       All Professeurs
       </h2>
      </Col>
      <Col lg={6} md={6} className=''>
        <h2>
          All Etudiant
        </h2>
      </Col>
    </Row>
  </Container>
  )
}

export default Personnels
