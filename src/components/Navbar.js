import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
return (
  <nav className="navbar">
    <Link
    className="navbar--logo-holder"
    activeClass="active"
    to="welcome"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
      <img src={Logo} alt="logo" className="navbar--logo" />
      <h1>Ryan Niu</h1>
    </Link>

    <div className="navbar--link">
      <Link
      className="navbar--link-item"
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
      >About</Link>

      <Link
      activeClass="active"
      className="navbar--link-item"
      to="experience"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
      >Experience</Link>

      <Link
      activeClass="active"
      className="navbar--link-item"
      to="projects"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
      >Projects</Link>

      <Link
      activeClass="active"
      className="navbar--link-item"
      to="resume"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
      >Resume</Link>
      
    </div>
  </nav>
)};
export default Navbar;