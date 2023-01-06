import React, { useEffect, useState }from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { TextLoop } from "react-text-loop-next";
import './Welcome.css'
import pfp from '../assets/pfp3.jpg'
import github from '../assets/icons/github-64.png'
import linkedin from '../assets/icons/linkedin-64.png'

const Welcome = () => {
    const Titles = [
        'the World\'s No. 1 Kirby Fan',
        'an E-waste Bin Scavenger',
        'a Boba Connoisseur',
        'a Soon-to-be Full Marathon Finisher',
        'a Mahjong Enthusiast',
        'a Passionate Game Developer',
        'a 日本語の学生',
        'a Piano Transciber & Performer',
        'a two-time SiIvaGunner Rip Submitter',
    ]
    const [delay, setDelay] = useState(40)

    useEffect(() => {
        const interval = setInterval(() => {
            setDelay((delay) => delay === 40 ? 2000 : 40)
        }, delay === 2000 ? delay : Math.random() * 240 + 440);
        return () => clearInterval(interval);
    }, [delay]);

    // TO-DO: ADD PARALLAX TO THE HI IM RYAN SHADOW
    return (
        <Container fluid>
            <Row className='welcome'>
                <Col lg={6} xl={6}>
                    <Image className='pfp' src={pfp} roundedCircle fluid alt='Ryan Niu'/>
                </Col>
                <Col lg={6} xl={6} className='intro-text'>
                    <h1 style={{fontSize: '5rem', color:' #FFF', textShadow: '0.5rem 0.5rem black'}}><b>Hi, I'm Ryan!</b></h1>
                    <div style={{fontSize: '1.5rem'}}>
                        Not just a <b>software developer,</b> but also
                    </div>
                    <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                        <TextLoop mask interval={delay} adjustingSpeed={delay === 2000 ? 40 : 440} children={Titles} />.
                    </div>
                    <div>
                        <a href="https://github.com/ryansniu" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={github} fluid alt='GitHub'/>
                        </a>
                        <a href="https://www.linkedin.com/in/ryansniu/" target="_blank" rel="noopener noreferrer">
                            <Image className='home-icons' src={linkedin} fluid alt='LinkedIn'/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome