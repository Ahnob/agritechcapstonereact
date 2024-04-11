import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";
import "./Navbars.css";

function Navbars() {
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
      <Hamburger />
    </nav>
  );
}

export default Navbars;
