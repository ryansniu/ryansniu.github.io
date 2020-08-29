import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1>Ryan Niu</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Experience</li>
      <li className="navbar--link-item">Projects</li>
      <li className="navbar--link-item">Resume</li>
    </ul>
  </nav>
)};
export default Navbar;