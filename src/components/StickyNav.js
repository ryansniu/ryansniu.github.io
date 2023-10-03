import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StickyNav.css'
import brand from '../assets/icons/brand.png'

const StickyNav = () => {
  return (
    <Navbar expand="md" variant="dark" style={{backgroundColor: "#5715c83a"}}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <Image className='brand-icon d-inline-block align-top' src={brand} fluid alt='LinkedIn'/>
          <b style={{fontSize: '2rem'}}>Ryan Niu</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-item" as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link className="nav-item" as={Link} to='/experience'>
              Experience
            </Nav.Link>
            <Nav.Link className="nav-item" as={Link} to='/projects'>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNav;