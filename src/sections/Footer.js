import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import resume from '../assets/Ryan Niu - Resume.pdf'

const Footer = () => (
  <Container fluid className="footer">
    <text>
        <i style={{color: "#9A9DA0"}}>Feel free to download my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</i>
        <br/>
        <text style={{color: "#CCCECF"}}>© 2020-2022 Ryan Niu</text>
    </text>
  </Container>
);

export default Footer