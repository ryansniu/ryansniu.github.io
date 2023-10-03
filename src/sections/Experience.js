import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './Experience.css'
import amazon from '../assets/experience/amazon.jpg'

const Experience = () => (
  <Container fluid className="experience" id="experience">
    <h1 style={{fontSize: "50px", textShadow: '0.25rem 0.25rem black'}}><b>Experience</b></h1>

    <Row className="about-row">
      <Col xl={5}>
        <Image src={amazon} alt="Amazon 2022" className="experience-img"/>
        <div style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <> Here's me and </>
          <a className="experience-hyperlink" href="https://thebee360.github.io/" target="_blank" rel="noopener noreferrer">my friend</a>
          <> at the Amazon Spheres!</>
        </div>
      </Col>
      <Col xl={7} className="experience-text">
        <Card className="experience-card" bg='dark' text='light'>
          <Card.Body style={{color: "#dccbff", textAlign: "left", fontSize: "1.18rem"}}>
            <Card.Text>
              Last summer, I had the amazing opportunity to work at Amazon as an SDE intern in Seattle, Washington.
              There, I brought implemented learning infrastructure for a team of data scientists and software engineers, streamlining their workflow to deliver personalized recommendations to Amazon Shopping customers.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Experience