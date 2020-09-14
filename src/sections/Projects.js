import React from 'react'
import { Image, Container, Row, Col, Card, ListGroup, ListGroupItem, Carousel, Modal } from 'react-bootstrap'
import './Project.css'
import github from '../assets/icons/github-64.png'
import devpost from '../assets/icons/devpost-64.png'
import gallery from '../assets/icons/gallery-64.png'
import youtube from '../assets/icons/youtube-64.png'
import blueSpot from '../assets/projects/blue-spot.png'
import voiceOrder from '../assets/projects/voice-order.png'
import vo1 from '../assets/projects/voiceorder/presentation.jpg'
import vo2 from '../assets/projects/voiceorder/award.jpg'
import primesAndDragons from '../assets/projects/primes-and-dragons.png'
import touhouDX from '../assets/projects/touhou-dx.png'
import tdx1 from '../assets/projects/touhoudx/presenting.jpg'
import tdx2 from '../assets/projects/touhoudx/presentation.jpg'
import tdx3 from '../assets/projects/touhoudx/award.jpg'

class Projects extends React.Component {
  state = { showVO: false, showPAD: false, showTDX: false, showTDX_V:false };

  toggleVO = () => { this.setState(state => ({ showVO: !state.showVO })); };
  togglePAD = () => { this.setState(state => ({ showPAD: !state.showPAD })); };
  toggleTDX = () => { this.setState(state => ({ showTDX: !state.showTDX })); };
  toggleTDX_V = () => { this.setState(state => ({ showTDX_V: !state.showTDX_V })); };

  render(){
    return(
      <Container fluid className="projects" id="projects">
        <h1>Projects</h1>

        <Modal centered size="xl" show={this.state.showVO} onHide={this.toggleVO} className="project-modal">
          <Modal.Body>
            <Carousel slide={false} wrap={false} interval={null}>
              <Carousel.Item>
                <Image fluid src={vo1} alt="Presentation"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid src={vo2} alt="Award"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showPAD} onHide={this.togglePAD} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="TouhouDX Gameplay" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/ySQc-nQ6CYI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showTDX} onHide={this.toggleTDX} className="project-modal">
          <Modal.Body>
            <Carousel slide={false} wrap={false} interval={null}>
              <Carousel.Item>
                <Image style={{maxHeight: "90vh"}} fluid src={tdx1} alt="Presenting"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid src={tdx2} alt="Presentation"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image fluid src={tdx3} alt="Award"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showTDX_V} onHide={this.toggleTDX_V} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="TouhouDX Gameplay" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/ySQc-nQ6CYI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal.Body>
        </Modal>

        <Row fluid className="project-stack">
          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='warning' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={voiceOrder} className="project-img" alt="Voice Order"/>
                  <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                    <text style={{fontSize: "1.5rem"}}>
                      Voice Order
                      <br/><br/><br/><br/>
                      <i style={{color: "#9A9DA0", fontSize: "1rem"}}>SB Hacks VI</i>
                      <br/><br/><br/>
                      <b style={{color: "gold", fontSize: "1rem"}}>Best Amazon Alexa Skill</b>
                    </text>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.5rem)", paddingBottom: "0"}}>
                  VoiceOrder is a general-purpose voice AI that helps automate ordering at drive-thru services and small businesses.
                  Companies can waste thousands of dollars building custom speech recognition bots, and this application replaces the time and money spent to create one with a simple Amazon Echo.
                  To create VoiceOrder, we combined many technologies, starting with the Alexa Skills Kit to process user words.
                  We then processed the words using AWS Lambda’s serverless framework, and extracted user intent using the Google Cloud AutoML NLP API.
                  Finally, we displayed the user’s order on a React.js application and displayed the price for each item and the total cost.
                </Card.Text>
                <div style={{float: "right"}}>
                    <button className="project-buttons" onClick={this.toggleVO} rel="noopener noreferrer">
                      <Image className='project-icons' src={gallery} fluid alt='Gallery'/>
                    </button>
                    <a href="https://devpost.com/software/voiceorder" target="_blank" rel="noopener noreferrer">
                        <Image className='project-icons' src={devpost} fluid alt='Devpost'/>
                    </a>
                    <a href="https://github.com/connorlien/VoiceOrder" target="_blank" rel="noopener noreferrer">
                        <Image className='project-icons' src={github} fluid alt='GitHub'/>
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
                  <Image src={blueSpot} className="project-img" alt="Blue Spot"/>
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
                <Card.Text style={{minHeight: "calc(100% - 3.5rem)", paddingBottom: "0"}}>
                  BlueSpot is a nifty mobile AR message visualization application designed for posting location-specific messages. 
                  Users walk around the physical world, typing messages and dropping them in "blue spots" for others to discover and read them. 
                  The application was created entirely using Unity Engine, utilizing the ARFoundation package to overlay virtual objects on the camera view and the Firebase Realtime Database API.
                </Card.Text>
                <div style={{float: "right"}}>
                    <a href="https://devpost.com/software/bluespot" target="_blank" rel="noopener noreferrer">
                        <Image className='project-icons' src={devpost} fluid alt='Devpost'/>
                    </a>
                    <a href="https://github.com/connorlien/BlueSpot" target="_blank" rel="noopener noreferrer">
                        <Image className='project-icons' src={github} fluid alt='GitHub'/>
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
                  <Image src={primesAndDragons} className="project-img" alt="Primes and Dragons"/>
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
                <Card.Text style={{minHeight: "calc(100% - 3.1rem)", paddingBottom: "0"}}>
                  Primes and Dragons is a mathematical puzzle RPG that I originally created in Spring 2016 as a Java game project.
                  
                  The player must fight their way out of a dungeon, but there's a twist!
                  Every enemy has a number associated with it, and to attack the enemy, the player must connect a string of numbers on the board to create a number divisible by the associated number.
                  
                  I have since ported the game onto Unity and I am currently polishing the game's graphics and music so I can release it on PC and Android.
                </Card.Text>
                <div style={{float: "right"}}>
                  <button className="project-buttons" onClick={this.togglePAD} rel="noopener noreferrer">
                    <Image className='project-icons' src={youtube} fluid alt='Video'/>
                  </button>
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
                  <Image src={touhouDX} className="project-img" alt="Touhou DX"/>
                  <div style={{lineHeight: "0.23rem", paddingTop: "0.6rem"}}>
                    <text style={{fontSize: "1.5rem"}}>
                      Touhou DX
                      <br/><br/><br/><br/>
                      <i style={{color: "#9A9DA0", fontSize: "1rem"}}>CodeDay Bay Area 2018</i>
                      <br/><br/><br/>
                      <b style={{color: "gold", fontSize: "1rem"}}>Best Game</b>
                    </text>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#CCCECF"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.1rem)", paddingBottom: "0"}}>
                  Touhou DX is a calculus-based bullet-hell game originally created in February 2018 at the CodeDay Bay Area Hackathon at Horizons, SF.

                  The player finds themselves on a 2D-coordinate plane and must defeat wacky math-based enemies while dodging their projectiles and functions!

                  Currently, I am working on a remastered version in Unity.
                </Card.Text>
                <div style={{float: "right"}}>
                  <button className="project-buttons" onClick={this.toggleTDX_V} rel="noopener noreferrer">
                    <Image className='project-icons' src={youtube} fluid alt='Video'/>
                  </button>
                  <button className="project-buttons" onClick={this.toggleTDX} rel="noopener noreferrer">
                    <Image className='project-icons' src={gallery} fluid alt='Gallery'/>
                  </button>
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
  }
}
export default Projects