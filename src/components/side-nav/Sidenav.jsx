import closeicon from "../../assets/close-con.svg";
import "./Sidenav.css";
import homeicon from "../../assets/home_icon.svg";
import infoicon from "../../assets/Info-icon.svg";
import phoneicon from "../../assets/Phone-icon.svg";
import marketicon from "../../assets/market-icon.svg";
import loginicon from "../../assets/signin-icon.svg";
import signupicon from "../../assets/signup-icon.svg";
import { Link } from "react-router-dom";

function Sidenav(props) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="sidenav-container">
      <img
        onClick={props.onClose}
        src={closeicon}
        className="close-icon"
        alt="close-icon"
      />
      <ul className="side-nav">
        <li className="sidenav-list">
          <img src={homeicon} />
          <Link to="/" onClick="" className="sidenav-anchor">
            Home
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={infoicon} />
          <Link to="/Aboutus" onClick="" className="sidenav-anchor">
            About Us
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={infoicon} />
          <Link to="/Products" onClick="" className="sidenav-anchor">
            Products
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={phoneicon} />
          <Link to="/Contactus" onClick="" className="sidenav-anchor">
            Contact Us
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={marketicon} />
          <Link to="/Marketplace" onClick="" className="sidenav-anchor">
            Market Place
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={signupicon} />
          <Link to="/Onboarding" onClick="" className="sidenav-anchor">
            Sign up
          </Link>
        </li>
        <li className="sidenav-list">
          <img src={loginicon} />
          <Link to="/Login" onClick="" className="sidenav-anchor">
            Log in
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
