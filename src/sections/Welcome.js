import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './Welcome.css'

const Welcome = () => {
    return (
            <main>
                <Container fluid>
                    <Row className='welcome'>
                        <Col lg={7}>
                            <Image className='pfp' src={'/pfp.jpg'} roundedCircle fluid alt='Ryan Niu'/>
                        </Col>
                        <Col lg={5} className='intro-text'>
                            <h1 style={{fontSize: 50}}>Hi, I'm Ryan!</h1>
                            <text>Computer Engineer from UC Santa Barbara
                                trying to learn webdev but it clearly is a struggle.
                                This website is also under construction.
                                Try not to break anything!
                            </text>
                            <div>
                                <a href="https://github.com/ryansniu" target="_blank" rel="noopener noreferrer">
                                    <Image className='home-icons' src={'/github-64.png'} fluid alt='Github'/>
                                </a>
                                <a href="https://www.linkedin.com/in/ryansniu/" target="_blank" rel="noopener noreferrer">
                                    <Image className='home-icons' src={'/linkedin-64.png'} fluid alt='LinkedIn'/>
                                </a>
                                <a href="https://devpost.com/ryansniu" target="_blank" rel="noopener noreferrer">
                                    <Image className='home-icons' src={'/devpost-64.png'} fluid alt='Devpost'/>
                                </a>
                                <a href="mailto:ryanniu314@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Image className='home-icons' src={'/email-64.png'} fluid alt='Email'/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
    )
}

export default Welcome