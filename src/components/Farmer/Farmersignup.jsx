
function Farmersignup() {
  return (
    <div className="container" style={{ height: "430px" }}>
      <h2>Sign Up</h2>
      <p>Enter your details to create account</p>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Full Name"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/user.png" alt="" />
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
          placeholder="Address"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="../html/image/Home Address.png" alt="" />
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
        <i className="evalope">
          <img src="../html/image/Lock.png" alt="" />
        </i>
      </div>
      <button>Continue</button>
    </div>
  );
}

export default Farmersignup;
