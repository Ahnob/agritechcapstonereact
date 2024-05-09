import { useState } from "react";
import logo from "../../assets/logo.png";
import hamburger_icon from "../../assets/hamburger.svg";
import SideNav from ".././side-nav/Sidenav";
import "./Navbars.css";
import { Link } from "react-router-dom";

function Navbars() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo image" />
      </div>
      <ul className="nav-menu" id="navMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about-heading" className="link">
            <Link to="/Aboutus">About Us</Link>
            About Us
          </a>
        </li>
        <li>
          <a href="#service" className="link">
            Products
          </a>
        </li>
        <li>
          <Link to="/Contactus">Contact Us</Link>
        </li>
        <li>
          <a href="#market" className="link">
            Market Place
          </a>
        </li>
      </ul>
      <div className="nav-button">
        <button className="login-btn">
          <Link to="/login">Log in</Link>
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
