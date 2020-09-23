import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './Experience.css'
import sbHacks from '../assets/experience/sb-hacks.png'
import UCSBGDC from '../assets/experience/ucsb-gdc.png'
import MVHS from '../assets/experience/mvhs.png'
import streetCode from '../assets/experience/streetcode-academy.png'

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
                <p><i style={{color: "#9A9DA0"}}>Hackathon Organizer</i></p>
                <p style={{color: "#9A9DA0"}}>March 2020 - Present</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Participating in weekly meetings to discuss and plan out the 350+ person event.
                </li>
                <li>
                  Corresponding with many tech companies and startups to gain sponsorships and fund the hackathon.
                </li>
                <li>
                  Assisting with the logistics of moving the hackathon from an in-person event to a virtual one.
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
                <p style={{color: "#9A9DA0"}}>March 2020 - Present</p>
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
                  Preparing the ongoing club schedule for the Fall quarter and working out the logistics of virtual club meetings and events.
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
              <Image src={MVHS} className="project-img" alt="MVHS APCS"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5>Monta Vista HS</h5>
                <p><i style={{color: "#9A9DA0"}}>APCS Student Tutor</i></p>
                <p style={{color: "#9A9DA0"}}>Aug 2018 - Jun 2019</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Assisted AP Computer Science A teachers by grading papers and answering student questions relating to the material.
                </li>
                <li>
                  Tutored a class of 30+ high school students in a Linux-based computer environment lab in preparation for the AP test.
                </li>
                <li>
                  Debugged students’ complex Java programs while maintaining a “hands-off the keyboard” approach.
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
              <Image src={streetCode} className="project-img" alt="Street Code"/>
              <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                <h5>StreetCode Academy</h5>
                <p><i style={{color: "#9A9DA0"}}>Game Design Mentor</i></p>
                <p style={{color: "#9A9DA0"}}>Jul 2018 - Aug 2018</p>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
            <Card.Text>
              <ul>
                <li>
                  Mentored a class of 12 elementary school students in East Palo Alto game design concepts, such as the elements that make a game fun to play.
                </li>
                <li>
                  Helped students create their own game using Construct 3 and Roblox Studio.
                </li>
                <li>
                  Introduced basic programming concepts such as variable and loops, helping the students write scripts for their games.
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