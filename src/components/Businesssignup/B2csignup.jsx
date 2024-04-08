function B2csignup() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <p>Enter your details to create your account</p>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Full Name"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/email.png" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Email Address"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/email.png" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Phone Number"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/email.png" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Address"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/email.png" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          className="inputbox input-field"
          placeholder="Create Password"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/email.png" alt="" />
        </i>
      </div>
      <div className="agreement">
        <input type="checkbox" />
        <label> Remember me</label>
      </div>
      <button style={{ marginBottom: "20px" }}>Create Account</button>
      <div className="or">
        <hr id="hr1" />
        <span>or</span>
        <hr id="hr2" />
      </div>
      <div className="image">
        <img className="size1" src="../html/image/facebook.png" alt="" />
        <img className="size2" src="../html/image/Google.png" alt="" />
      </div>
      <p>
        Already have an account? <a href="loginpg.html">&nbsp;Login</a>
      </p>
    </div>
  );
}

export default B2csignup;
