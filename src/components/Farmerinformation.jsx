function Farmerinformation() {
  return (
    <div>
      <div className="container">
        <h2>Additional Information</h2>
        <p>Tell us a little bit about your farm</p>
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              placeholder="Farm Name"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              placeholder="Farm size"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              placeholder="Types of crops grown"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              placeholder="Current farming practices"
              maxLength="15"
              required
            ></input>
          </div>
        </div>
      </div>
      <button className="signup-button">Create Account</button>
    </div>
  );
}

export default Farmerinformation;
