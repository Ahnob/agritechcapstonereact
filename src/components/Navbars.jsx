import logo from "../assets/logo.png";
import "./Navbars.css";

function Navbars() {
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="nav-logo">
            <img src={logo} alt="logo image" />
          </div>
          <div className="nav-menu" id="navMenu">
            <ul>
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
          </div>
          <div className="nav-button">
            <button className="login-btn">
              <a href="../html/login.html">Log in</a>
            </button>
            <button className="signup-btn">
              <a href="../html/sign.html">Sign Up</a>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbars;
