import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './Education.css'
import usc from '../assets/education/USC.png'
import ucsb from '../assets/education/UCSB.png'

const Education = () => (
  <Container fluid className="education" id="education">
    <h1 style={{fontSize: "50px", textShadow: '0.25rem 0.25rem black'}}><b>Education</b></h1>

    <Row className="about-row">
      <Col xl={6}>
        <Image src={ucsb} alt="University of California, Santa Barbara" className="education-img"/>
        <div className="education-text" style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <b>B.S. in Computer Engineering</b>
          <br/>
          Minor in Japanese
        </div>
      </Col>
      <Col xl={6}>
        <Image src={usc} alt="University of Southern California" className="education-img"/>
        <div className="education-text" style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <b>M.S. in Computer Science</b>
          <br/>
          <i>Expected 2025</i>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Education