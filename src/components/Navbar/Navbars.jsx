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
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Aboutus" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Whatweoffer" className="link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/Contactus" className="link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/Contactus" className="link">
            Market Place
          </Link>
        </li>
      </ul>
      <div className="nav-button">
        <button className="login-btn">
          <Link to="/login">Log in</Link>
        </button>
        <button className="signup-btn">
          <Link to="/Onboarding">Sign Up</Link>
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
