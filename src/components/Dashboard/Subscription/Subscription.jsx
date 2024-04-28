import "./Subscription.css";
import { useState } from "react";
import firstimage from "../../../assets/pikaso_texttoimage_A-3d-model-of-a-triangular-vertical-farm (1) 2.svg";
import secondimage from "../../../assets/pikaso_texttoimage_A-3d-model-to-demonstrate-precision-planting 2.svg";

function Subscription() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="second-container">
        <div className="top-container">
          <h3 className="setting-header">Settings</h3>
          <h3> Manage your account settings</h3>
        </div>
        <div className="flex-card">
          <div className="subscribe-container">
            <div className="first-card">
              <img src={firstimage} alt="First" />
              <h3 className="cards-heading">Agriculture Farming Model </h3>
            </div>
            <div>
              <h3>
                $20
                <span className="grey-span"> per user/month</span>
              </h3>
            </div>
            <div className="subscribe-card">
              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  An agriculture farming model a strategic framework and
                  approach used by farmers to cultivate crops and raise
                  livestock efficiently.
                </label>
              </div>
              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  Access to Courses and resources on Vertical farming
                </label>
              </div>

              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  Access to Courses and resources on Vertical farming
                </label>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="subscribe-container">
            <div className="first-card">
              <img src={secondimage} alt="First" />
              <h3 className="cards-heading">Agriculture Farming Model </h3>
            </div>
            <div>
              <h3>
                $20
                <span className="grey-span"> per user/month</span>
              </h3>
            </div>
            <div className="subscribe-card">
              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  An agriculture farming model a strategic framework and
                  approach used by farmers to cultivate crops and raise
                  livestock efficiently.
                </label>
              </div>
              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  Access to Courses and resources on Vertical farming
                </label>
              </div>

              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  <span className="checkmark"></span>
                  Access to Courses and resources on Vertical farming
                </label>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscription;
