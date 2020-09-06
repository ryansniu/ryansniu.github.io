import React from 'react'
import { Image, Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import './Project.css'

const Projects = () => (
  <Container fluid className="projects" id="projects">
    <h1>Projects</h1>
    <h5>A comprehensive portfolio of my personal projects.</h5>
    <Row fluid className="project-stack">
      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='warning' text='light'>
          <Card.Body>
            <Card.Title>
              <Image src={'/github-64.png'} className="project-img"/>
              <a href="https://github.com/connorlien/VoiceOrder" target="_blank" rel="noopener noreferrer">
                  <Image className='project-icons' src={'/github-64.png'} fluid alt='GitHub'/>
              </a>
              <a href="https://devpost.com/software/voiceorder" target="_blank" rel="noopener noreferrer">
                  <Image className='project-icons' src={'/devpost-64.png'} fluid alt='Devpost'/>
              </a>
              <div style={{ float: "left", paddingTop: "0.5rem", textAlign: "left"}}>
                <text style={{lineHeight: "1.5rem", fontSize: "1.5rem"}}>
                  Voice Order
                  <br/>
                </text>
                <text style={{lineHeight: "0.5rem"}}>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>SB Hacks VI</i>
                  <br/>
                  <i style={{color: "gold", fontSize: "1rem"}}>Best Amazon Alexa Skill</i>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF", textAlign: "justify"}}>
            <Card.Text>
              VoiceOrder is a general-purpose voice AI that helps automate ordering at drive-thru services and small businesses.
              Companies can waste thousands of dollars building custom speech recognition bots, and this application replaces the time and money spent to create one with a simple Amazon Echo.
              To create VoiceOrder, we combined many technologies, starting with the Alexa Skills Kit to process user words.
              We then processed the words using AWS Lambda’s serverless framework, and extracted user intent using the Google Cloud AutoML NLP API.
              Finally, we displayed the user’s order on a React.js application and displayed the price for each item and the total cost.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Programming Languages: </b>
              Python, C++
            </ListGroupItem>
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Technologies: </b>
              Alexa Skills Kit, AWS Lambda, Google Cloud Natural Language API, Firebase, React.js
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Projects