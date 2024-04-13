import "./Admin.css";

function Admin() {
  return (
    <div className="container" style={{ height: "400px" }}>
      <h2>Sign Up</h2>
      <p>Enter your details to create your account</p>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Job Title"
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
          placeholder="Create Password"
          maxLength="15"
          required
        />
        <i className="envelope">
          <img src="../html/image/Lock.png" alt="" />
        </i>
      </div>
      <div className="agreement">
        <input type="checkbox" />
        <label>&nbsp; &nbsp; I agree to the terms and conditions</label>
      </div>
      <button>Create Account</button>
    </div>
  );
}

export default Admin;
