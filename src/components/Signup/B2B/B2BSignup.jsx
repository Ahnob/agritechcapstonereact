import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/Lock.png";
import phone_icon from "../../../assets/Phone-icon.svg";
import business_icon from "../../../assets/Business-icon.svg";
import location_icon from "../../../assets/Home Address.png";
import { Link, NavLink } from "react-router-dom";

function B2BSignup() {
  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
        <p className="first-paragraph">
          Enter your details to create your account
        </p>
        <div className="input-box">
          <div className="input">
            <img src={business_icon} alt="" />
            <input
              type="text"
              placeholder="Business/Company Name"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Address"
              maxLength="11"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={phone_icon} alt="" />
            <input
              type="number"
              placeholder="Phone number"
              maxLength="11"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={location_icon} alt="" />
            <input
              type="text"
              placeholder="Business/CompanyAddress"
              maxLength="11"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
        <div className="conditions-container">
          <input className="checkbox conditions" type="checkbox"></input> I
          agree to the terms and conditions
        </div>
        <button className="signup-button">Create Account</button>
        <div className="login-button-text">
          Already have an account?
          <Link className="signup_link login-a" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default B2BSignup;
