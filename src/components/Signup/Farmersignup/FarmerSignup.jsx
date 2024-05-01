import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/Lock.png";
import customer_icon from "../../../assets/Customer-icon.svg";
import contact_icon from "../../../assets/Phone-icon.svg";
import location_icon from "../../../assets/Home Address.png";
import "./FarmerSignup.css";

function FarmerSignup() {
  return (
    <>
      <div className="farmer-container">
        <h2>Sign Up</h2>
        <p className="first-paragraph">
          Enter your details to create your account
        </p>
        <div className="input-box">
          <div className="input">
            <img src={customer_icon} alt="" />
            <input
              type="text"
              placeholder="Full Name"
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
            <img src={contact_icon} alt="" />
            <input
              type="password"
              placeholder="Phone number"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
        <div className="input-box">
          <div className="input">
            <img src={location_icon} alt="" />
            <input
              type="password"
              placeholder="Address"
              maxLength="15"
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

        <div className="remember-me-container">
          <input className="checkbox remember-me" type="checkbox"></input>
          Remember Me
        </div>
        <button className="signup-button">Create Account</button>
        <div className="login-button-text">
          Do not have an account yet?
          <a className="signup_link login-a" href="signuppg.html">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default FarmerSignup;
