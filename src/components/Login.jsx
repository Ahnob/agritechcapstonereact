import "./Login.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/Lock.png";
import facebook_logo from "../assets/facebook.png";
import google_logo from "../assets/Google.png";

function Login() {
  return (
    <>
      <div className="container">
        <h2>Log In</h2>
        <p className="first-paragraph">Please fill in your details to log in</p>
        <div className="input-box">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              placeholder="Email Address"
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
              maxLength="11"
              required
            ></input>
          </div>
        </div>
        <div className="forgot-password">
          <a className="forgot-password" href="#">
            Forgot password?
          </a>
        </div>
        <button className="login-button">Login</button>
        <div className="or">
          <hr id="hr1" />
          <span>or</span>
          <hr id="hr2" />
        </div>
        <div className="logo_images">
          <img className="logos" src={facebook_logo} alt="" />
          <img className="logos" src={google_logo} alt="" />
        </div>
        <div className="button-text">
          Do not have an account yet?{" "}
          <a className="signup_link" href="signuppg.html">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
