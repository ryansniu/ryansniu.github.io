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
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={'/voice-order.png'} className="project-img" alt="Voice Order"/>
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  Voice Order
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>SB Hacks VI</i>
                  <br/><br/><br/>
                  <b><i style={{color: "gold", fontSize: "1rem"}}>Best Amazon Alexa Skill</i></b>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text style={{minHeight: "80%"}}>
              VoiceOrder is a general-purpose voice AI that helps automate ordering at drive-thru services and small businesses.
              Companies can waste thousands of dollars building custom speech recognition bots, and this application replaces the time and money spent to create one with a simple Amazon Echo.
              To create VoiceOrder, we combined many technologies, starting with the Alexa Skills Kit to process user words.
              We then processed the words using AWS Lambda’s serverless framework, and extracted user intent using the Google Cloud AutoML NLP API.
              Finally, we displayed the user’s order on a React.js application and displayed the price for each item and the total cost.
            </Card.Text>
            <div style={{float: "right", maxHeight: "20%"}}>
                <a href="https://devpost.com/software/voiceorder" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={'/devpost-64.png'} fluid alt='Devpost'/>
                </a>
                <a href="https://github.com/connorlien/VoiceOrder" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={'/github-64.png'} fluid alt='GitHub'/>
                </a>
            </div>
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

      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={'/blue-spot.png'} className="project-img" alt="Blue Spot"/>
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  Blue Spot
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>TreeHacks 2020</i>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text style={{minHeight: "80%"}}>
              BlueSpot is a nifty mobile AR message visualization application designed for posting location-specific messages. 
              Users walk around the physical world, typing messages and dropping them in "blue spots" for others to discover and read them. 
              The application was created entirely using Unity Engine, utilizing the ARFoundation package to overlay virtual objects on the camera view and the Firebase Realtime Database API.
            </Card.Text>
            <div style={{float: "right"}}>
                <a href="https://devpost.com/software/bluespot" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={'/devpost-64.png'} fluid alt='Devpost'/>
                </a>
                <a href="https://github.com/connorlien/BlueSpot" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={'/github-64.png'} fluid alt='GitHub'/>
                </a>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Programming Languages: </b>
              C#
            </ListGroupItem>
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Technologies: </b>
              Unity Engine, Firebase, ARFoundation
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>

    <Row fluid className="project-stack">
    <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='secondary' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={'/primes-and-dragons.png'} className="project-img" alt="Primes and Dragons"/>
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  Primes and Dragons
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>Ongoing Solo Project</i>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text>
              Primes and Dragons is a matching RPG created in Spring 2016 as my second semester freshman year Java game project.
              The goal of the game is to beat the final boss on the 50th floor.
              Each enemy has a number associated with it.
              In order to attack the enemy, the player must connect a string of numbers on the board to create a multiple of the associated number.
              The damage dealt is calculated using the length of the created number and the sum of its digits.
              Because the digit “0” will not add to the sum of the digits, connecting a “0” will heal the player instead, with more “0”’s healing more points.
              If the connected number is not divisible by any number on the screen, however, then the player will not attack nor heal, losing a turn.
              This game is turn-based, meaning that the enemy and the player attacks in order.
              I am currently working on porting and finishing the game in Unity.
            </Card.Text>
            <div style={{float: "right"}}>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Programming Languages: </b>
              Java, C#
            </ListGroupItem>
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Technologies: </b>
              Unity Engine
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>

      <Col fluid lg={5} className="project-deck">
        <Card className="project-card" bg='dark' border='warning' text='light'>
          <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
            <Card.Title>
              <Image src={'/touhou-dx.png'} className="project-img" alt="Touhou DX"/>
              <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                <text style={{fontSize: "1.5rem"}}>
                  Touhou DX
                  <br/><br/><br/><br/>
                  <i style={{color: "#9A9DA0", fontSize: "1rem"}}>CodeDay Bay Area 2018</i>
                  <br/><br/><br/>
                  <b><i style={{color: "gold", fontSize: "1rem"}}>Best Game</i></b>
                </text>
              </div>
            </Card.Title>
          </Card.Body>
          <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
            <Card.Text>
              Touhou DX is a calculus-based bullet hell game created in February 2018 at the CodeDay Bay Area Hackathon at Horizons, SF, written entirely in Java.
              The player controls a character who can move across the screen and can rapidly shoot infinite bullets.
              However, the player must dodge the enemy’s bullets, as well as a mathematical graph that draws itself.
              The player has 3 lives and 3 bombs, which can clear out enemy projectiles and function points.
              I learned a lot from writing this program, such as utilizing the ScheduledExecutor class in Java in order to write an update function without a framework, and using Java lambdas and abstract classes to make the boss’s bullet patterns and the projectiles’ move paths as a function of time, allowing me to create fancy looking bullet patterns.
              Right now, I am working on a remaster using Unity. In the remastered version, I wrote a script that can draw a mathematical function, which can correctly handle discontinuities as well as have its scale altered at runtime.
            </Card.Text>
            <div style={{float: "right"}}>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Programming Languages: </b>
              Java, C#
            </ListGroupItem>
            <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
              <b style={{color: "#CCCECF"}}>Technologies: </b>
              Unity Engine
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Projects