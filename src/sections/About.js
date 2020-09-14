import React from 'react'
import { Image, Container, Row, Col, Badge } from 'react-bootstrap'
import './About.css'
import treehacks from '../assets/about/treehacks.JPG'

const About = () => (
  <Container fluid className="about" id="about">
      <h1>About</h1>

      <Row fluid className="about-row">
        <Col xl={5}>
          <Image src={treehacks} alt="TreeHacks 2020" className="about-img"/>
          <div style={{color: "#CCCECF", fontSize: "1.25rem", marginBottom: "2rem"}}>
            <text> Here's me and </text>
            <a href="https://connorlien.github.io/" target="_blank" rel="noopener noreferrer">my friend</a>
            <text> at TreeHacks 2020!</text>
          </div>
        </Col>
        <Col xl={7} className="about-text">
          <div className="about-section">
            <h2 style={{color: "white"}}>Bio</h2>
            <p style={{textAlign: "left"}}>
              Nice to meet you! 
              I'm Ryan Niu and I like to build a wide variety of software such as video games, SaaS, and even this website!
              Competitive programming is another passion of mine.
              Whether it's competing solo in the USA Computing Olympiad or collaborating in a team at a hackathon, 
              I enjoy challenging myself and improving my programming skills.
              My goal is to turn my creative ideas into innovative software that people can find useful or enjoyable.
            </p>
            <p style={{textAlign: "left"}}>
              Besides being a total computer geek, I am an avid cross-country runner who's training for my next half-marathon.
              I also like to immerse myself in music, from playing the piano to transcribing video game music and even creating my own chiptunes.
              Finally, I like to spend my free time studying Japanese and learning about Japanese culture.
            </p>
            
            <h2 style={{color: "white", marginTop: "2rem"}}>Education</h2>
            <h4>University of California, Santa Barbara</h4>
            <h4>B.S. Computer Engineering</h4>
            <h5>
              <Badge variant="warning">Dean's Honors</Badge>
              <text> </text>
              <Badge variant="warning">College of Engineering Honors</Badge>
            </h5>
          </div>
        </Col>
      </Row>
  </Container>
);

export default About