import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => (
  <Container fluid className="footer">
    <text>
        <i style={{color: "#9A9DA0"}}>This website was built from scratch using ReactJS, React-Bootstrap, React-PDF, and React-Scroll.</i>
        <br/>
        <text style={{color: "#CCCECF"}}>© 2020 Ryan Niu</text>
    </text>
  </Container>
);

export default Footer