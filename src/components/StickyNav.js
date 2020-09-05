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
  var off = width < 667 ? -210 : 0;
  return (
    <Navbar sticky="top" expand="md" bg="dark" variant="dark">
      <Link to="welcome" smooth={true} offset={-100 + off} duration= {500}>
        <Navbar.Brand>
          <h1>Ryan Niu</h1>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Link to="about" smooth={true} spy={true} offset={-80 + off} duration= {500} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <Nav.Link>
              <h4>About</h4>
            </Nav.Link>
          </Link>

          <Link to="experience" smooth={true} spy={true} offset={-80 + off} duration= {500} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <Nav.Link>
              <h4>Experience</h4>
            </Nav.Link>
          </Link>

          <Link to="projects" smooth={true} spy={true} offset={-80 + off} duration= {500} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <Nav.Link>
              <h4>Projects</h4>
            </Nav.Link>
          </Link>
          
          <Link to="resume" smooth={true} spy={true} offset={-80 + off} duration= {500} style={{ textDecoration: 'none', textAlign: 'center' }}>
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