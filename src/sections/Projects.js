import React from 'react'
import { Image, Container, Row, Col, Card, ListGroup, ListGroupItem, Carousel, Modal } from 'react-bootstrap'
import './Project.css'
import github from '../assets/icons/github-64.png'
import link from '../assets/icons/link-64.png'
import gallery from '../assets/icons/gallery-64.png'
import youtube from '../assets/icons/youtube-64.png'
import spotifyTierListMaker from '../assets/projects/spotify-tier-list-maker.png'
import spotifyTierListMakerScreenshot from '../assets/projects/spotify-tier-list-maker-screenshot.png'
import smallE from '../assets/projects/smalle/smalle.png'
import smallEPicture from '../assets/projects/smalle/smalle_pic.png'
import smallEPoster from '../assets/projects/smalle/smalle_po.png'
import touhouDX from '../assets/projects/touhou-dx.png'
import hurlingHeightsScreenshot from '../assets/projects/hurling-heights-screenshot.png'
import portfolio from '../assets/icons/brand.png'

class Projects extends React.Component {
  state = { showSE: false, showSE_V:false, showHH_V:false };

  toggleSE = () => { this.setState(state => ({ showSE: !state.showSE })); };
  toggleSE_V = () => { this.setState(state => ({ showSE_V: !state.showSE_V })); };
  toggleHH_V = () => { this.setState(state => ({ showHH_V: !state.showHH_V })); };

  render(){
    return(
      <Container fluid className="projects" id="projects">
        <Modal centered size="xl" show={this.state.showSE} onHide={this.toggleSE} className="project-modal">
          <Modal.Body>
            <Carousel slide={false} wrap={false} interval={null}>
              <Carousel.Item>
                <Image className="project-modal-img" fluid src={smallEPoster} alt="Poster"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showSE_V} onHide={this.toggleSE_V} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="small · e Demo" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube.com/embed/u28N7vLs1Hg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Modal.Body>
        </Modal>

        <Modal centered size="xl" show={this.state.showHH_V} onHide={this.toggleHH_V} className="project-video">
          <Modal.Body style={{position: "relative", paddingTop: "56.25%"}}>
            <iframe title="Hurling Heights Demo" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://drive.google.com/file/d/1bIbpbuJfXuKeldknZOHpG_TEeke04egZ/preview" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Modal.Body>
        </Modal>

        <h1 style={{fontSize: "50px", textShadow: '0.25rem 0.25rem black'}}><b>Projects</b></h1>
        
        <Row className="project-stack">
          <Col lg={5} className="project-deck">
            <Card className="project-card" bg='dark' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={spotifyTierListMaker} className="project-img" alt="Spotify Tier List Maker"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.25rem", paddingTop: "0"}}>
                    <h5 className="project-hyperlink" style={{fontWeight: 'bold'}}>
                      <a href="https://ryanniu.dev/spotify-tier-list-maker" target="_blank" rel="noopener noreferrer">
                        Spotify Tier List Maker
                        <Image className='project-link' src={link} fluid alt='Link'/>
                      </a>
                    </h5>
                    <p><i style={{color: "#9A9DA0"}}>Web Dev Project</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{color: "#DEDEDE", padding: "0 2rem 1rem"}}>
                <Image src={spotifyTierListMakerScreenshot} className="project-screenshot" alt="Spotify Tier List Maker screenshot"/>
                <Card.Text>
                  A robust web app that allows users to create their own tier list of songs, albums, and artists through the Spotify API, without the need for an account.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#0000", display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <a href="https://github.com/ryansniu/spotify-tier-list-maker" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={github} fluid alt='GitHub'/>
                  </a>
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Languages: </b>
                  TypeScript, JavaScript, HTML/CSS
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  React.js, Spotify API, AWS (Lambda, API Gateway, Systems Manager)
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col lg={5} className="project-deck">
            <Card className="project-card" bg='dark' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={smallE} className="project-img" alt="small · e"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.25rem", paddingTop: "0"}}>
                    <h5 className="project-hyperlink" style={{fontWeight: 'bold'}}>
                      <a href="https://sites.google.com/view/small-e/home" target="_blank" rel="noopener noreferrer">
                        small · e
                        <Image className='project-link' src={link} fluid alt='Link'/>
                      </a>
                    </h5>
                    <p><i style={{color: "#9A9DA0"}}>ECE Capstone Project 2023</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{color: "#DEDEDE", padding: "0 2rem 1rem"}}>
                <Image src={smallEPicture} className="project-screenshot" alt="small · e picture"/>
                <Card.Text>
                  A fully submersible stereo camera and eDNA collection system constructed to aid UCSB Oakley Evolution Lab's investigation of the bioluminescence courtship signaling in ostracods.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#0000", display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <button className="project-buttons" onClick={this.toggleSE_V} rel="noopener noreferrer">
                    <Image className='project-icons' src={youtube} fluid alt='Video'/>
                  </button>
                  <button className="project-buttons" onClick={this.toggleSE} rel="noopener noreferrer">
                    <Image className='project-icons' src={gallery} fluid alt='Gallery'/>
                  </button>
                  <a href="https://github.com/roberto-garcia-0/WALLE-2.0" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={github} fluid alt='GitHub'/>
                  </a>
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Languages: </b>
                  Python
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  Jetson Nano, Linux, GStreamer, OpenCV
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row className="project-stack">
          <Col lg={5} className="project-deck">
            <Card className="project-card" bg='dark' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={touhouDX} className="project-img" alt="Hurling Heights"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.25rem", paddingTop: "0"}}>
                    <h5 style={{fontWeight: 'bold'}}>Hurling Heights</h5>
                    <p><i style={{color: "#9A9DA0"}}>VR Project</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{color: "#DEDEDE", padding: "0 2rem 1rem"}}>
                <Image src={hurlingHeightsScreenshot} className="project-screenshot" alt="Hurling Heights screenshot"/>
                <Card.Text>
                  A 3D puzzle platformer designed to introduce beginners to the world of VR gaming, with a unique locomotion system that allows players to traverse the environment by throwing themselves around.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#0000", display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <button className="project-buttons" onClick={this.toggleHH_V} rel="noopener noreferrer">
                    <Image className='project-icons' src={youtube} fluid alt='Video'/>
                  </button>
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Languages: </b>
                  C#
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  Unity Engine, Visual Studio
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          {/*
          <Col lg={5} className="project-deck">
            <Card className="project-card" bg='dark' text='light'>
              <Card.Body style={{paddingBottom: "0", maxHeight: "6rem"}}>
                <Card.Title>
                  <Image src={portfolio} className="project-img" alt="Portfolio Website"/>
                  <div style={{margin: "0", fontSize: "1rem", lineHeight: "0.25rem", paddingTop: "0"}}>
                    <h5 className="project-hyperlink" style={{fontWeight: 'bold'}}>
                      <a href="https://ryansniu.github.io/" target="_blank" rel="noopener noreferrer">
                        Portfolio
                        <Image className='project-link' src={link} fluid alt='Link'/>
                      </a>
                    </h5>
                    <p><i style={{color: "#9A9DA0"}}>Web Dev Project</i></p>
                  </div>
                </Card.Title>
              </Card.Body>
              <Card.Body style={{color: "#DEDEDE", padding: "0 2rem 1rem"}}>
                <Image src={spotifyTierListMakerScreenshot} className="project-screenshot" alt="Portfolio Website screenshot"/>
                <Card.Text>
                  My portfolio website, which you are currently looking at!
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem variant='light' style={{backgroundColor: "#0000", display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <a href="https://github.com/ryansniu/ryansniu.github.io" target="_blank" rel="noopener noreferrer">
                    <Image className='project-icons' src={github} fluid alt='GitHub'/>
                  </a>
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Languages: </b>
                  JavaScript, HTML/CSS
                </ListGroupItem>
                <ListGroupItem variant='light' style={{backgroundColor: "#222222"}}>
                  <b style={{color: "#CCCECF"}}>Technologies: </b>
                  React.js
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          */}
        </Row>
      </Container>
    );    
  }
}
export default Projects