import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/Lock.png";
import phone_icon from "../../../assets/Phone-icon.svg";
import business_icon from "../../../assets/Business-icon.svg";
import location_icon from "../../../assets/Home Address.png";
import customer_icon from "../../../assets/Customer-icon.svg";

function B2CSignup() {
  <div className="container">
    <h2>Sign Up</h2>
    <p className="first-paragraph">Please fill in your details to log in</p>

    <div className="input-box">
      <div className="input">
        <img src={customer_icon} alt="" />
        <input
          type="text"
          placeholder="Business/Company name"
          maxLength="15"
          required
        ></input>
      </div>
    </div>
    <div className="input-box">
      <div className="input">
        <img src={business_icon} alt="" />
        <input
          type="text"
          placeholder="Business/Company name"
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
        <img src={password_icon} alt="" />
        <input
          type="password"
          placeholder="Password"
          maxLength="15"
          required
        ></input>
      </div>
    </div>
    <div className="input-box">
      <div className="input">
        <i className="contact-icon">
          <span className="icon-wrapper">
            <img src={phone_icon} alt="" />
          </span>
        </i>
        <input
          type="number"
          placeholder="Phone number"
          maxLength="11"
          required
        ></input>
        <div className="input-box">
          <div className="input">
            <img src={location_icon} alt="" />
            <input
              type="text"
              placeholder="Address"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
      </div>
    </div>
    <div>
      <input className="checkbox" type="checkbox"></input> I aggree to the terms
      and conditions
    </div>
    <button className="signup-button">Create Account</button>
  </div>;
}

export default B2CSignup;
