import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendrier.css'
import { Container, Row, Col } from "react-bootstrap";


function Calendrier() {
  const [date, setDate] = useState(new Date());

  return (

    <Container>
    <Row>
   <Col lg={1} md={1} className="mt-5"></Col>
       
   <Col lg={11} md={11} className="shadow bg-body rounded calendar">
   <div className="bulletin">
           <p>Dashboard / Calendrier</p>
         </div>
         <div>
      <Calendar className="m-auto w-100 mt-5 p-5"
        onChange={setDate}
        value={date}
      />
    </div>
   </Col>
   </Row>

  </Container>

    
  );
}

export default Calendrier;
