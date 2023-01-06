import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './Experience.css'
import sbHacks from '../assets/experience/sb-hacks.png'
import amazon from '../assets/experience/amazon.svg'

const Experience = () => (
  <Container fluid className="experience" id="experience">
    <h1 style={{fontSize: "50px"}}><b>Experience</b></h1>

    <Row fluid className="project-stack">
      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={amazon} className="project-img" alt="Amazon"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5 style={{fontWeight: 'bold'}}>Amazon</h5>
                <p><i style={{color: "#9A9DA0"}}>Machine Learning SDE Intern</i></p>
                <p style={{color: "#9A9DA0"}}>June 2022 - September 2022</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Built a model registry service to enable Amazon's data scientists to easily store, update, and deliver machine learning models.
                </li>
                <li>
                  Streamlined the model experimentation process, accelerating the launching of new models on Amazon's main shopping page.
                </li>
                <li>
                  Wrote a library and an API for the model registry to allow for offline model retrieval and inferencing from Amazon engineers.
                </li>
                <li>
                  Picked up 12+ AWS technologies, including ECS/Fargate and CloudFormation, successfully integrating these into the project.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row fluid className="project-stack">
      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={sbHacks} className="project-img" alt="SB Hacks VII"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5 style={{fontWeight: 'bold'}}>SB Hacks VII</h5>
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
    </Row>
  </Container>
);

export default Experience