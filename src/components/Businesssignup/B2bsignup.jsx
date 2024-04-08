function B2bsignup() {
  return (
    <div className="container" style={{ height: "480px" }}>
      <h2>Sign Up</h2>
      <p>Enter your details to create your account</p>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Business/Company name"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/Business.png" alt="" />
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
          <img src="../html/image/Phone.png" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Business/Company Address"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/Home Address.png" alt="" />
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
          <img src="../html/image/Lock.png" alt="" />
        </i>
      </div>
      <div className="agreement">
        <input type="checkbox" />
        <label>&nbsp; &nbsp; I agree to terms and conditions</label>
      </div>
      <button style={{ marginBottom: "20px" }}>Create Account</button>
      <p>
        Already have an account? &nbsp;<a href="loginpg.html">Login</a>
      </p>
    </div>
  );
}

export default B2bsignup;
