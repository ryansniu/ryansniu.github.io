import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './NotFound.css'
import lost from '../assets/lost.png'

const NotFound = () => (
  <Container fluid className="notfound">
    <Image className='lost' src={lost} roundedCircle fluid alt='Page Not Found'/>
    <i style={{color: "#AFABD9", fontSize: "2rem"}}>
      Wait... you're not supposed to be here!
    </i>
  </Container>
);

export default NotFound