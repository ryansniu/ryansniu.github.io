import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Navbar, Nav } from 'react-bootstrap'
import './StickyNav.css'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const StickyNav = () => {
  const [width, height] = useWindowSize();
  var off = width < 667 ? -200 : 0;
  return (
    <Navbar sticky="top" expand="md" variant="dark" style={{alignItems: "center", backgroundColor: "#222"}}>
      <Link to="welcome" smooth={true} offset={-100 + off} duration= {500}>
        <Navbar.Brand>
          <h2><button className="project-buttons" style={{color: "#97DEFF"}}>Ryan Niu</button></h2>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"/>
        <Nav>
          <Link className="sticky-nav-item" to="about" smooth={true} spy={true} offset={-73 + off} duration={500} style={{ textDecoration: 'none', textAlign: 'center'}}>
            <Nav.Link>
              <h4>About</h4>
            </Nav.Link>
          </Link>

          <Link className="sticky-nav-item" to="projects" smooth={true} spy={true} offset={-73 + off} duration={500} style={{ textDecoration: 'none', textAlign: 'center'}}>
            <Nav.Link>
              <h4>Projects</h4>
            </Nav.Link>
          </Link>
          
          <Link className="sticky-nav-item" to="experience" smooth={true} spy={true} offset={-73 + off} duration={500} style={{ textDecoration: 'none', textAlign: 'center'}}>
            <Nav.Link>
              <h4>Experience</h4>
            </Nav.Link>
          </Link>

          <Link className="sticky-nav-item" to="resume" smooth={true} spy={true} offset={-73 + off} duration={500} style={{ textDecoration: 'none', textAlign: 'center'}}>
            <Nav.Link>
              <h4>Resume</h4>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StickyNav;