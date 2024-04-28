import "./Subscription.css";

function Subscription() {
  return (
    <div>
      <div className="top-container">
        <h3 className="setting-header">Settings</h3>
        <h3> Manage your account settings</h3>
      </div>
      <div className="subscribe-container">
        <div className="first-card">
          <img src={firstimage} />
          <h3>Agriculture Farming Model </h3>
        </div>
        <div>
          <h3>
            $20
            <span> per user/month</span>
          </h3>
        </div>
        <div className="subscribe-card">
          <label>
            <input type="radio" value="option1" />
            An agriculture farming model a strategic framework and approach used
            by farmers to cultivate crops and raise livestock efficiently.
          </label>
          <label>
            <input type="radio" value="option2" />
            Access to Courses and resources on Vertical farming
          </label>
          <label>
            <input type="radio" value="option3" />
            Access to Courses and resources on Vertical farming
          </label>
        </div>
        <div className="second-card"></div>
      </div>
    </div>
  );
}

export default Subscription;
