import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './Experience.css'
import sbHacks from '../assets/experience/sb-hacks.png'
import UCSBGDC from '../assets/experience/ucsb-gdc.png'
import MVHS from '../assets/experience/mvhs.png'
import streetCode from '../assets/experience/streetcode-academy.png'

const Experience = () => (
  <Container fluid className="experience" id="experience">
    <h1>Experience</h1>
    <h5>A summary of my skills in the industry.</h5>

    <Row fluid className="project-stack">
      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={sbHacks} className="project-img" alt="SB Hacks VII"/>
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  SB Hacks VII
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>Hackathon Organizer</i>
                  <br/><br/><br/>
                  <text style={{color: "#9A9DA0", fontSize: "1rem"}}>March 2020 - Present</text>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text>
              <ul>
                <li>
                  Participated in weekly meetings to plan out the 350+ person event.
                </li>
                <li>
                  Corresponded with many tech companies and startups to gain sponsorships and fund the hackathon.
                </li>
                <li>
                  Assisted with the logistics of moving the hackathon to virtual.
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
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  UCSB Game Dev Club
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>Outreach Officer</i>
                  <br/><br/><br/>
                  <text style={{color: "#9A9DA0", fontSize: "1rem"}}>March 2020 - Present</text>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text>
              <ul>
                <li>
                  Connected the club with the games industry by reaching out and hosting online Q&A sessions with experienced developers. 
                </li>
                <li>
                  Organized and participated in the club’s yearly 20+ person game jam.
                </li>
                <li>
                  Currently preparing the ongoing club schedule for the Fall quarter.
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
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  Monta Vista HS
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>APCS Student Tutor</i>
                  <br/><br/><br/>
                  <text style={{color: "#9A9DA0", fontSize: "1rem"}}>Aug 2018 - Jun 2019</text>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text>
              <ul>
                <li>
                  Assisted the AP Computer Science A teacher by grading papers and answering student questions about their code.
                </li>
                <li>
                  Tutored a class of 30+ high school students in a Java/Linux-based computer environment lab in preparation for the AP test. 
                </li>
                <li>
                  Helped students debug their code while maintaining a “hands-off the keyboard” approach.
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
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  StreetCode Academy
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>Game Design Mentor</i>
                  <br/><br/><br/>
                  <text style={{color: "#9A9DA0", fontSize: "1rem"}}>Jul 2018 - Aug 2018</text>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
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