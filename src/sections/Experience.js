import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './Experience.css'
import sbHacks from '../assets/experience/sb-hacks.png'
import UCSBGDC from '../assets/experience/ucsb-gdc.png'

const Experience = () => (
  <Container fluid className="experience" id="experience">
    <h1 style={{fontSize: "50px"}}>Experience</h1>

    <Row fluid className="project-stack">
      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={sbHacks} className="project-img" alt="SB Hacks VII"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5>SB Hacks VII</h5>
                <p><i style={{color: "#9A9DA0"}}>Sponsorships Lead</i></p>
                <p style={{color: "#9A9DA0"}}>March 2020 - Present</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Organized the 7th iteration of UCSB's annual hackathon, a 350+ person digital event that bring students from various universities and disciplines together to collaborate on projects. Helped plan the judging, logistics, and hacker experience for SB Hacks VII.
                </li>
                <li>
                  Actively corresponded with companies and organizations to build and maintain relationships with sponsors, raising over $22k in monetary value. Coordinated with company representatives to host and judge their sponsor API challenges.
                </li>
                <li>
                  Prepared and taught the “Intro to Game Development” workshop designed introduce programming to beginner hackers.
                </li>
                <li>
                  Currently leading the Sponsorships Team for SB Hacks VIII, which is set to be an in-person hackathon.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={UCSBGDC} className="project-img" alt="UCSB GDC"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5>UCSB Game Dev Club</h5>
                <p><i style={{color: "#9A9DA0"}}>Outreach Officer</i></p>
                <p style={{color: "#9A9DA0"}}>March 2020 - June 2021</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Connected the club with the games industry by reaching out and hosting online Q&A sessions with experienced developers. 
                </li>
                <li>
                  Organized and participated in the club’s annual 20+ person game jam, which helped introduce new members to the club.
                </li>
                <li>
                  Hosted workshops to teach club members about the game development process such as game programming and production.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Experience