import React from 'react'
import { Link } from 'react-scroll'
import { Navbar, Nav } from 'react-bootstrap'
import './StickyNav.css'

class StickyNav extends React.Component {
  render(){
    var off = this.props.width > 684 ? 150 : 0;
    return (
      <Navbar sticky="top" expand="md" bg="dark" variant="dark" className="sticky-nav">
        <Link to="welcome" smooth={true} offset={-100} duration= {500}>
          <Navbar.Brand>
            <h1><b>Ryan Niu</b></h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="about" smooth={true} spy={true} offset={-80 + off} duration= {500}>
              <Nav.Link>
                <h4>About</h4>
              </Nav.Link>
            </Link>
    
            <Link to="experience" smooth={true} spy={true} offset={-80 + off} duration= {500}>
              <Nav.Link>
                <h4>Experience</h4>
              </Nav.Link>
            </Link>
    
            <Link to="projects" smooth={true} spy={true} offset={-80 + off} duration= {500}>
              <Nav.Link>
                <h4>Projects</h4>
              </Nav.Link>
            </Link>
            
            <Link to="resume" smooth={true} spy={true} offset={-80 + off} duration= {500}>
              <Nav.Link>
                <h4>Resume</h4>
              </Nav.Link>
            </Link>
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default StickyNav;