import handshake_icon from "../../assets/Handshake_icon.svg";
import farmer_icon from "../../assets/Farmer_icon.svg";
import { Link } from "react-router-dom";
import closeicon from "../../assets/Vector-icon.svg";
import adminIcon from "../../assets/Admin-icon.jpeg";
import bussinessIcon from "../../assets/Businessowner-icon.svg";
import "./Onboarding.css";

function Onboarding(onClose) {
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <img
          onClick={onClose}
          src={closeicon}
          className="closeicon"
          alt="close-icon"
        />
        <h3 className="onboarding-header">
          What best describes your role here?
        </h3>
        <div className="onboarding-child">
          <div className="onboarding-child1">
            <img
              src={handshake_icon}
              className="handshake_image"
              alt="handshake icon"
            />
            <p className="onboarding-paragraph">
              I am a Business owner looking to partner with Agritech
            </p>
          </div>
          <div className="onboarding-child2">
            <img
              src={bussinessIcon}
              className="farmer_image"
              alt="business icon"
            />
            <p className="onboarding-paragraph">
              I am a farmer looking to explore my options with Agritech
            </p>
          </div>
          <div className="onboarding-child2">
            <img src={adminIcon} className="farmer_image" alt="admin icon" />
            <p className="onboarding-paragraph">
              I am a farmer looking to explore my options with Agritech
            </p>
          </div>
          <div className="onboarding-child2">
            <img src={farmer_icon} className="farmer_image" alt="farmer icon" />
            <p className="onboarding-paragraph">
              I am a farmer looking to explore my options with Agritech
            </p>
          </div>
        </div>
        <footer className="onboarding-footer">
          <div>
            Already have an account?
            <Link className="signup_link login-a" to="/login">
              Login
            </Link>
          </div>
          <p>
            By continuing, you agree to Agritech
            <span className="footer-yellowcolor"> Terms of Use </span> and
            confirm that you have read Agritech
            <span className="footer-yellowcolor"> Privacy Policy</span>
          </p>
        </footer>
      </div>
    </div>
  );
}


export default Onboarding;
