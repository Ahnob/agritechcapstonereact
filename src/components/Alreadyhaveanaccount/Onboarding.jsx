import handshake_icon from "../../assets/Handshake_icon.svg";
import farmer_icon from "../../assets/Farmer_icon.svg";
import { Link } from "react-router-dom";
import close_icon from "../../assets/close-con.svg";

function Onboarding() {
  return (
    <>
      <div>

        <h2>What best describes your role here?</h2>
        <div>
          <div>
            <img src={handshake_icon} />
            <p>I am a Business owner looking to partner with Agritech</p>
          </div>
          <div>
            <img src={farmer_icon} />
            <p>I am a farmer looking to explore my options with Agritech</p>
          </div>
        </div>
        <footer>
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
    </>
  );
}

export default Onboarding;
