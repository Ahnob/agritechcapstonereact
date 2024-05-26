
function Additionalinfo() {
  return (
    <div className="container" style={{ height: "380px" }}>
      <h2>Additional Information</h2>
      <p>Tell us a little about your farm</p>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Full Name"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Farm Size"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Type of crops grown"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="" alt="" />
        </i>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="inputbox input-field"
          placeholder="Current farming practices"
          maxLength="15"
          required
        />
        <i className="evalope">
          <img src="" alt="" />
        </i>
      </div>
      <button>Create Account</button>
    </div>
  );
}

export default Additionalinfo;
