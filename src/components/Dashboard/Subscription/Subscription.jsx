import "./Subscription.css";
import { useState } from "react";
import firstimage from "../../../assets/pikaso_texttoimage_A-3d-model-of-a-triangular-vertical-farm (1) 2.svg";
import secondimage from "../../../assets/pikaso_texttoimage_A-3d-model-to-demonstrate-precision-planting 2.svg";

function Subscription() {
  // State variables for each group of radio buttons
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // Function to handle radio button change for the first group
  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle radio button change for the second group
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
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
                    checked={selectedOption1 === "option1"}
                    onChange={handleOptionChange1}
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
                    checked={selectedOption1 === "option2"}
                    onChange={handleOptionChange1}
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
                    checked={selectedOption1 === "option3"}
                    onChange={handleOptionChange1}
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
              <h3 className="cards-heading">Precision Farming </h3>
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
                    checked={selectedOption2 === "option1"}
                    onChange={handleOptionChange2}
                  />
                  <span className="checkmark"></span>
                  Utilizing cutting edge technology and data-driven methods to
                  optimize agricultural practices at a highly detailed and
                  accurate level.
                </label>
              </div>
              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption2 === "option2"}
                    onChange={handleOptionChange2}
                  />
                  <span className="checkmark"></span>
                  Access to Courses and resources on Precision farming
                </label>
              </div>

              <div className="radio-button">
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption2 === "option3"}
                    onChange={handleOptionChange2}
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
