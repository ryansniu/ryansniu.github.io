import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => (
  <Container fluid className="footer">
    <text>
        <i style={{color: "#9A9DA0"}}>This website was built from scratch using React.js, react-bootstrap, react-pdf, and react-scroll.</i>
        <br/>
        <text style={{color: "#CCCECF"}}>© 2020-2021 Ryan Niu</text>
    </text>
  </Container>
);

export default Footer