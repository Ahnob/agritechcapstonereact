import "./Whatweoffer.css";
import first_image from "../../assets/what1image.png";
// import second_image from "../assets/what2image.png";
// import image from "../assets/what3image.png";

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
        <div className="offer-image-container">
          {/* <div className="image-text">
            <img src={first_image} alt="pic" className="offer-image" />
            <div className="info-container">
              <p className="info-head">Boost Productivity and Quality</p>
              <p className="info">
                Our innovative farm business model and design optimize growing
                conditions, enabling farmers to achieve higher yields and
                superior quality produce.
              </p>
            </div>
          </div> */}
          <div className="info-container">
            <div className="image-text">
              <img src={first_image} className="offer-image" />
              <p className="info-head">Agriculture Farming Model</p>
              <p className="info">
                An agricultural farming model refers to a strategic framework
                and approach used by farmers to cultivate crops and raise
                livestock efficiently. It encompases various aspects such as
                crop selection, land preparation, planting techniques,irrigation
                methodsand pest control strategies to maximize productivity and
                suatainability.
              </p>
            </div>
          </div>
          {/* <div className="info-container">
            <div className="image-text">
              <img src={first_image} alt="pic" className="offer-image" />
              <p className="info-head">Precision Farming</p>
              <p className="info">
                Precision farming involves using technology and data-driven
                methods to optimize agricultural practices at a highly detailed
                and accurate level. By utilizing tools like GPS, sensors, drones
                and automated machinery, precision farming enables farmers to
                make informed decisions in real-time regarding planting,
                fertilizing, irrigation and pest management to enhance yields,
                minimize waste and protect the environment.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Whatweoffer;
