import { useState } from "react";
import logo from "../assets/logo.png";
import hamburger_icon from "../assets/hamburger.svg";
import SideNav from "./side-nav/Sidenav";
import "./Navbars.css";

function Navbars() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo image" />
      </div>
      <ul className="nav-menu" id="navMenu">
        <li>
          <a href="#welcome" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about-heading" className="link">
            About Us
          </a>
        </li>
        <li>
          <a href="#service" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="#Contact" className="link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#market" className="link">
            Market Place
          </a>
        </li>
      </ul>
      <div className="nav-button">
        <button className="login-btn">
          <a href="../html/login.html">Log in</a>
        </button>
        <button className="signup-btn">
          <a href="../html/sign.html">Sign Up</a>
        </button>
      </div>
      <button onClick={() => setIsOpen(true)} className="hamburger">
        <img src={hamburger_icon} alt="hamburger icon" />
      </button>
      {isOpen && <SideNav onClose={() => setIsOpen(false)} />}
    </nav>
  );
}

export default Navbars;
