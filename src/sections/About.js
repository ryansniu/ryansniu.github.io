import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import './About.css'
import treehacks from '../assets/about/treehacks.jpg'

const About = () => (
  <Container fluid className="about" id="about">
    <h1 style={{fontSize: "50px", textShadow: '0.25rem 0.25rem black'}}><b>About</b></h1>
  
    <Row className="about-row">
      <Col xl={5}>
        <Image src={treehacks} alt="TreeHacks 2020" className="about-img"/>
        <div style={{color: "#AFABD9", marginBottom: "2rem"}}>
          <> Here's me and </>
          <a className="about-hyperlink" href="https://connorlien.github.io/" target="_blank" rel="noopener noreferrer">my friend</a>
          <> at TreeHacks 2020!</>
        </div>
      </Col>
      <Col xl={7} className="about-text">
        <Card className="about-card" bg='dark' text='light'>
          <Card.Body style={{color: "#dccbff", textAlign: "left", fontSize: "1.18rem"}}>
            <Card.Text>
              Nice to meet you!
              I'm Ryan Niu, currently pursuing a part-time Master's in Computer Science at the University of Southern California.
              I got into computer programming through competitions like USACO and hackathons when I was younger.
              Nowadays, I'm driven by my love for creating and pushing my limits to develop everything from websites, games, and even underwater robots!
            </Card.Text>
          </Card.Body>
        </Card>
        <div style={{height: "1.5rem"}} />
        <Card className="about-card" bg='dark' text='light'>
          <Card.Body style={{color: "#dccbff", textAlign: "left", fontSize: "1.18rem"}}>
            <Card.Text>
              Outside of tech, I'm an avid cross-country runner who's training for my next marathon.
              I also love to immerse myself in the world of music, whether that's performing the keys for a live band or crafting chiptune covers of my favorite songs.
              Finally, I'm an aspiring home cook and I enjoy sharing my dishes with friends and family.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About