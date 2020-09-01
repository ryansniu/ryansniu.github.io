import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './Welcome.css'

const Welcome = () => {
    return (
            <main>
                <Container fluid className='welcome'>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <Image className='pfp' src={process.env.PUBLIC_URL + '/pfp.jpg'} roundedCircle fluid alt='Ryan Niu'/>
                        </Col>
                        <Col className='intro-text'>
                            <h1 style={{fontSize: 60}}>Hi, I'm Ryan!</h1>
                            <text>Computer Engineer from UC Santa Barbara
                                trying to learn webdev but it clearly is a struggle.
                                This website is also under construction.
                                Try not to break anything!
                            </text>
                        </Col>
                    </Row>
                </Container>
            </main>
    )
}

export default Welcome