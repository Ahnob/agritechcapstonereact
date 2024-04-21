import "./Whatweoffer.css";
import first_image from "../../assets/pikaso_texttoimage_A-3d-model-of-a-triangular-vertical-farm (1) 2.svg";
import second_image from "../../assets/pikaso_texttoimage_A-3d-model-to-demonstrate-precision-planting 2.svg";

function Whatweoffer() {
  return (
    <>
      <hr className="whatweoffer-hr" />
      <div className="section-offer">
        <div className="offer">
          <p className="offer-head">What we offer</p>
          <p className="offer-para">
            At Agritechlink we provide the innovative Agritecture model, a
            pioneering solution featuring a pyramid-shaped structure and energy
            pallets. This innovative approach revolutionizes conventional
            farming by maximizing natural sunlight, minimizing energy
            consumption, and integrating agroforestry techniques.
          </p>
        </div>
        <div className="offer-parent">
          <div className="offer-container">
            <img src={first_image} className="offer-image" />
            <p className="info-head">Agriculture Farming Model</p>
            <p className="info-">
              An agricultural farming model refers to a strategic framework and
              approach used by farmers to cultivate crops and raise livestock
              efficiently. It encompases various aspects such as crop selection,
              land preparation, planting techniques,irrigation methodsand pest
              control strategies to maximize productivity and suatainability.
            </p>
          </div>
          <div className="offer-container">
            <img src={second_image} alt="pic" className="offer-image" />
            <p className="info-head">Precision Farming</p>
            <p className="info-">
              Precision farming involves using technology and data-driven
              methods to optimize agricultural practices at a highly detailed
              and accurate level. By utilizing tools like GPS, sensors, drones
              and automated machinery, precision farming enables farmers to make
              informed decisions in real-time regarding planting, fertilizing,
              irrigation and pest management to enhance yields, minimize waste
              and protect the environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatweoffer;
