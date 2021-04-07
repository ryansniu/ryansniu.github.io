import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './Welcome.css'
import pfp from '../assets/pfp.jpg'
import github from '../assets/icons/github-64.png'
import linkedin from '../assets/icons/linkedin-64.png'
import devpost from '../assets/icons/devpost-64.png'
import email from '../assets/icons/email-64.png'

const Welcome = () => {
    return (
        <Container fluid>
            <Row className='welcome'>
                <Col lg={7}>
                    <Image className='pfp' src={pfp} roundedCircle fluid alt='Ryan Niu'/>
                </Col>
                <Col lg={5} className='intro-text'>
                    <h1 style={{fontSize: 50, color:'#96C9FD'}}>Hi, I'm Ryan!</h1>
                    <text>
                        Computer Engineering student at UC Santa Barbara
                        that's passionate about working with technology and 
                        developing software solutions for real-world problems.
                    </text>
                    <div>
                        <a href="https://github.com/ryansniu" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={github} fluid alt='GitHub'/>
                        </a>
                        <a href="https://www.linkedin.com/in/ryansniu/" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={linkedin} fluid alt='LinkedIn'/>
                        </a>
                        <a href="https://devpost.com/ryansniu" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={devpost} fluid alt='Devpost'/>
                        </a>
                        <a href="mailto:ryanniu314@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={email} fluid alt='Email'/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome