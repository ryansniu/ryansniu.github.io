import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './Leadership.css'
import sbhacks from '../assets/leadership/sb-hacks.png'
import ucsbgdc from '../assets/leadership/ucsb-gdc.png'

const Leadership = () => (
  <Container fluid className="leadership" id="leadership">
    <h1 style={{fontSize: "50px", textShadow: '0.25rem 0.25rem black'}}><b>Leadership</b></h1>

    <Row className="about-row">
      <Col xl={6}>
        <Image src={ucsbgdc} alt="UCSB Game Dev Club" className="leadership-img"/>
        <div className="leadership-text" style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <b>UCSB Game Dev Club</b>
          <br/>
          <i>Outreach Officer</i>
        </div>
      </Col>
      <Col xl={6}>
        <Image src={sbhacks} alt="SB Hacks" className="leadership-img"/>
        <div className="leadership-text" style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <b>SB Hacks</b>
          <br/>
          <i>Co-Director, Sponsorships Lead</i>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Leadership