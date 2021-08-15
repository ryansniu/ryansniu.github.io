import React from 'react'
import { Image, Container, Row, Col, Card, ListGroup, ListGroupItem, Carousel, Modal } from 'react-bootstrap'
import './Project.css'
import github from '../assets/icons/github-64.png'
import devpost from '../assets/icons/devpost-64.png'
import link from '../assets/icons/link-64.png'
import gallery from '../assets/icons/gallery-64.png'
import youtube from '../assets/icons/youtube-64.png'
import spotifyTierListmaker from '../assets/projects/spotify-tier-list-maker.png'
import blueSpot from '../assets/projects/blue-spot.png'
import voiceOrder from '../assets/projects/voice-order.png'
import vo1 from '../assets/projects/voiceorder/presentation.jpg'
import vo2 from '../assets/projects/voiceorder/award.jpg'
import trainingArc from '../assets/projects/training-arc.png'
import touhouDX from '../assets/projects/touhou-dx.png'
import tdx1 from '../assets/projects/touhoudx/presenting.jpg'
import tdx2 from '../assets/projects/touhoudx/presentation.jpg'
import tdx3 from '../assets/projects/touhoudx/award.jpg'
import primesAndDragons from '../assets/projects/primes-and-dragons.png'

class Projects extends React.Component {
  state = { showVO: false, showPAD: false, showTDX: false, showTDX_V:false };

  toggleVO = () => { this.setState(state => ({ showVO: !state.showVO })); };
  togglePAD = () => { this.setState(state => ({ showPAD: !state.showPAD })); };
  toggleTDX = () => { this.setState(state => ({ showTDX: !state.showTDX })); };
  toggleTDX_V = () => { this.setState(state => ({ showTDX_V: !state.showTDX_V })); };

  render(){
    return(
      <Container fluid className="projects" id="projects">
        <h1 style={{fontSize: "50px"}}>Projects</h1>

        <Modal centered size="xl" show={this.state.showVO} onHide={this.toggleVO} className="project-modal">
          <Modal.Body>
            <Carousel slide={false} wrap={false} interval={null}>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={vo1} alt="Presentation"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={vo2} alt="Award"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showPAD} onHide={this.togglePAD} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="Primes and Dragons Gameplay" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/X6jUf1HKb88" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showTDX} onHide={this.toggleTDX} className="project-modal">
          <Modal.Body>
            <Carousel slide={false} wrap={false} interval={null}>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={tdx1} alt="Presenting"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={tdx2} alt="Presentation"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={tdx3} alt="Award"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showTDX_V} onHide={this.toggleTDX_V} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="TouhouDX Gameplay" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/LSEb7DvI_mQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Modal.Body>
        </Modal>

        <Row fluid className="project-stack">
          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='secondary' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={spotifyTierListmaker} className="project-img" alt="Spotify Tier List Maker"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                    <h5>Spotify Tier List Maker</h5>
                    <p><i style={{color: "#9A9DA0"}}>Solo Web Project</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.4rem)", paddingBottom: "0"}}>
                  Spotify Tier List Maker is a robust interactive website that allows users to create their own tier list of songs, albums, and artists.
                  I was inspired to create this website after wanting to rank some songs together with friends, but found out that there was no easy way to make a tier list of songs anywhere online!
                  Thus, I decided to make the Spotify Tier List Maker my summer project in 2021. 
                  Since then, I've learned so much more about using React.js and using AWS, and I am ultimately proud of creating a website that others can play around and make their own tier lists.
                </Card.Text>
                <div style={{float: "right"}}>
                    <a href="https://ryansniu.github.io/spotify-tier-list-maker" target="_blank" rel="noopener noreferrer">
                      <Image className='project-icons' src={link} fluid alt='Link'/>
                    </a>
                    <a href="https://github.com/ryansniu/spotify-tier-list-maker" target="_blank" rel="noopener noreferrer">
                        <Image className='project-icons' src={github} fluid alt='GitHub'/>
                    </a>
                </div>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Programming Languages: </b>
                  React.js, HTML/CSS/JavaScript
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  AWS Lambda, AWS API Gateway, AWS Systems Manager, Spotify API, React Bootstrap
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='warning' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={voiceOrder} className="project-img" alt="Voice Order"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                    <h5>Voice Order</h5>
                    <p><i style={{color: "#9A9DA0"}}>SB Hacks VI</i></p>
                    <p><b style={{color: "gold"}}>Best Amazon Alexa Skill</b></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.4rem)", paddingBottom: "0"}}>
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
        </Row>
    
        <Row fluid className="project-stack">
          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='warning' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={trainingArc} className="project-img" alt="TrainingArc"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.2rem", paddingTop: "0"}}>
                    <h5>TrainingArc</h5>
                    <p><i style={{color: "#9A9DA0"}}>SD Hacks 2021</i></p>
                    <p><b style={{color: "gold"}}>Wolfram Alpha Prize</b></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.4rem)", paddingBottom: "0"}}>
                  In the era of online learning, many students struggle to translate math word problems to algebraic equations that many are more familiar with solving, especially with the lack of personalized feedback.
                  As such, we created TrainingArc, a webapp designed to help students learn to solve complicated word problems with step-by-step examples and practice assessments.
                  Our project takes a word problem submitted by the user as input and runs it through the Wolfram Alpha API to generate and display the solution along with the step-by-step solutions, if available.
                </Card.Text>
                <div style={{float: "right"}}>
                  <a href="https://training-arc.herokuapp.com/input-form" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={link} fluid alt='Link'/>
                  </a>
                  <a href="https://devpost.com/software/word-problem-solver" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={devpost} fluid alt='Devpost'/>
                  </a>
                  <a href="https://github.com/ryansniu/Training-Arc" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={github} fluid alt='GitHub'/>
                  </a>
                </div>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Programming Languages: </b>
                  JavaScript, Python
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  Wolfram Alpha Full Result API, Flask, HerokuApp, React.js
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='secondary' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={blueSpot} className="project-img" alt="Blue Spot"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.2rem", paddingTop: "0"}}>
                    <h5>Blue Spot</h5>
                    <p><i style={{color: "#9A9DA0"}}>TreeHacks 2020</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.7rem)", paddingBottom: "0"}}>
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
                  Unity Engine, Visual Studio, Firebase, ARFoundation, MapBox API
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row fluid className="project-stack">
          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='warning' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={touhouDX} className="project-img" alt="Touhou DX"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.1rem", paddingTop: "0"}}>
                    <h5>Touhou DX</h5>
                    <p><i style={{color: "#9A9DA0"}}>CodeDay Bay Area 2018</i></p>
                    <p><b style={{color: "gold"}}>Best Game</b></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3.7rem)", paddingBottom: "0"}}>
                  Ever wanted to play an action-packed shooting game while learning about calculus? Well, me neither.
                  That's why I challenged myself to make calculus fun to learn by developing Touhou DX, a math-based bullet-hell game originally created in February 2018 at the CodeDay Bay Area Hackathon at Horizons, SF.
                  The player finds themselves on a 2D-coordinate plane and must defeat enemies who's attacks are all based on math, from parametric projectiles to function obstacles!
                  Currently, I am working on a remastered version in Unity using C#.
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
                  Unity Engine, Visual Studio, Aseprite, Vectrosity
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col fluid lg={5} className="project-deck">
            <Card className="project-card" bg='dark' border='secondary' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={primesAndDragons} className="project-img" alt="Primes and Dragons"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.2rem", paddingTop: "0"}}>
                    <h5>Primes and Dragons</h5>
                    <p><i style={{color: "#9A9DA0"}}>Solo Game Project</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{padding: "0 1rem 1rem 1rem", color: "#DEDEDE"}}>
                <Card.Text style={{minHeight: "calc(100% - 3rem)", paddingBottom: "0"}}>
                  Originally created back in 2016 for my high school educational game project, Primes and Dragons is a mathematical puzzle RPG that I started in Java.
                  The objective of the game is to fight your way out of a dungeon, but there's a twist!
                  Every enemy has a number associated with it, and to attack the enemy, the player must connect a string of numbers on the board to create a number divisible by the associated number.
                  I have since ported the game onto Unity and I am currently polishing the game's graphics and music so I can release it on PC and Android.
                  <br/>
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
                  Unity Engine, Visual Studio, Aseprite
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