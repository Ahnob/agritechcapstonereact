import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/Lock.png";
import phone_icon from "../../../assets/Phone-icon.svg";
import business_icon from "../../../assets/Business-icon.svg";
import location_icon from "../../../assets/Home Address.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function B2BSignup() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function updateBusinessName(event) {
    setBusinessName(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value);
  }
  function updatePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }
  function updateLocation(event) {
    setLocation(event.target.value);
  }
  function updatePassword(event) {
    setPassword(event.target.value);
  }
  function updateConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const formValues = {
      businessName,
      email,
      phoneNumber,
      location,
      password,
    };
    console.log(formValues);
  }

  return (
    <>
      <form onSubmit={onSubmit} action="#" className="container">
        <h2>Sign Up</h2>
        <p className="first-paragraph">
          Enter your details to create your account
        </p>
        <div className="input-box">
          <div className="input">
            <img src={business_icon} alt="" />
            <input
              onChange={updateBusinessName}
              value={businessName}
              type="text"
              placeholder="Business/Company Name"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              onChange={updateEmail}
              type="email"
              placeholder="Email Address"
              value={email}
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={phone_icon} alt="" />
            <input
              onChange={updatePhoneNumber}
              placeholder="Phone number"
              value={phoneNumber}
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={location_icon} alt="" />
            <input
              onChange={updateLocation}
              type="text"
              placeholder="Business/CompanyAddress"
              required
              value={location}
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              onChange={updatePassword}
              type="password"
              placeholder="Password"
              maxLength="15"
              value={password}
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              onChange={updateConfirmPassword}
              type="password"
              placeholder="Confirm Password"
              maxLength="15"
              value={confirmPassword}
              required
            ></input>
          </div>
        </div>

        <div className="conditions-container">
          <input className="checkbox conditions" type="checkbox"></input> I
          agree to the terms and conditions
        </div>
        <button className="signup-button" type="submit">
          Create Account
        </button>
        <div className="login-button-text">
          Already have an account?
          <Link className="signup_link login-a" to="/login">
            Login
          </Link>
        </div>
      </form>
    </>
  );
}

export default B2BSignup;
