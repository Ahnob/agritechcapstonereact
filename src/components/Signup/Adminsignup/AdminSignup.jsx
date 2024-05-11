import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/Lock.png";
import phone_icon from "../../../assets/Phone-icon.svg";
import business_icon from "../../../assets/Business-icon.svg";
import name_icon from "../../../assets/Customer-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signupAdmin } from "../../../api";

function AdminSignup() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function clearInput() {
    setName("");
    setJobTitle("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  }

  function updateJobTitle(event) {
    setJobTitle(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value);
  }
  function updatePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }
  function updateConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function updateName(event) {
    setName(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    await signupAdmin(name, jobTitle, phoneNumber, email, password);
    clearInput();
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
            <img src={name_icon} alt="" />
            <input
              onChange={updateName}
              type="text"
              placeholder="Full name"
              value={name}
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={business_icon} alt="" />
            <input
              onChange={updateJobTitle}
              value={jobTitle}
              type="text"
              placeholder="Job Title"
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

export default AdminSignup;
