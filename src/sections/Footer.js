import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Footer.css'
import github from '../assets/icons/github-64.png'
import linkedin from '../assets/icons/linkedin-64.png'

const Footer = () => (
  <Container fluid className="footer">
      <div>
        <a href="https://github.com/ryansniu" target="_blank" rel="noopener noreferrer">
          <Image className='footer-icons' src={github} fluid alt='GitHub'/>
        </a>
        <a href="https://www.linkedin.com/in/ryansniu/" target="_blank" rel="noopener noreferrer">
          <Image className='footer-icons' src={linkedin} fluid alt='LinkedIn'/>
        </a>
      </div>
    <div style={{color: "#CCCECF"}}>© 2023 Ryan Niu</div>
  </Container>
);

export default Footer