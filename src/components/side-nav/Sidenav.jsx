import closeicon from "./close_hamburger.png";
import "./Sidenav.css";
// import homeicon from "./home_icon.svg";
import homeicon from "../../assets/home_icon.svg";
import infoicon from "../../assets/Info-icon.svg";
import phoneicon from "../../assets/Phone-icon.svg";
import marketicon from "../../assets/market-icon.svg";
import loginicon from "../../assets/signin-icon.svg";
import signupicon from "../../assets/signup-icon.svg";

function Sidenav(props) {
  return (
    <div className="sidenav-container">
      <img onClick={props.onClose} src={closeicon} className="close-icon" alt="close-icon" />
      <ul className="side-nav">
        <li className="sidenav-list">
          <img src={homeicon} />
          <a href="#welcome" className="sidenav-anchor">
            Home
          </a>
        </li>
        <li className="sidenav-list">
          <img src={infoicon} />
          <a href="#about-heading" className="sidenav-anchor">
            About Us
          </a>
        </li>
        <li className="sidenav-list">
          <img src={infoicon} />
          <a href="#service" className="sidenav-anchor">
            Products
          </a>
        </li>
        <li className="sidenav-list">
          <img src={phoneicon} />
          <a href="#Contact" className="sidenav-anchor">
            Contact Us
          </a>
        </li>
        <li className="sidenav-list">
          <img src={marketicon} />
          <a href="#market" className="sidenav-anchor">
            Market Place
          </a>
        </li>
        <li className="sidenav-list">
          <img src={signupicon} />
          <a href="#signup" className="sidenav-anchor">
            Login
          </a>
        </li>
        <li className="sidenav-list">
          <img src={loginicon} />
          <a href="login" className="sidenav-anchor">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
