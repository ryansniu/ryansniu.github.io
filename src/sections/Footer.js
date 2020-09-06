import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => (
  <Container fluid className="footer">
    <text>
        <i style={{color: "#9A9DA0"}}>This website was made by scratch using ReactJS, React-Bootstrap, and React-PDF.</i>
        <br/>
        <text style={{color: "#CCCECF"}}>© 2020 Ryan Niu</text>
    </text>
  </Container>
);

export default Footer