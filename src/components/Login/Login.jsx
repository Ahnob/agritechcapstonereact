import "./Login.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/Lock.png";
import facebook_logo from "../../assets/facebook.png";
import google_logo from "../../assets/Google.png";
import axios from "axios";
import { useState } from "react";
import close_icon from "../../assets/close_hamburger.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    // Make the function asynchronous
    event.preventDefault();
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        "https://agritechlink-backend.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );
      // Handle successful response
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle error
      console.error("Login failed:", error);
      setError("Login failed. Please try again."); // Set error state
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-container">
        <img className="close_icon" src={close_icon} />
        <h2 className="login-h2">Log In</h2>
        <p className="first-paragraph">Please fill in your details to log in</p>
        <div className="input-box">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}{" "}
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="or">
          <hr id="hr1" />
          <span>or</span>
          <hr id="hr2" />
        </div>
        <div className="rememberme-container">
          <div className="rememberme-child">
            <input
              type="checkbox"
              id="remember"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.value)}
            />
            <label>Remember Me</label>
          </div>
          <div className="forgot-password">
            <a className="forgot-password login-a" href="#">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="logo_images">
          <img className="logos" src={facebook_logo} alt="" />
          <img className="logos" src={google_logo} alt="" />
        </div>
        <div className="login-button-text">
          Do not have an account yet?
          <Link className="signup_link login-a" to="/admin-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
