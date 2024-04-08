import "./Whatweoffer.css";
import first_image from "../assets/what1image.png";
import second_image from "../assets/what2image.png";
import image from "../assets/what3image.png";

function Whatweoffer() {
  return (
    <>
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
          <div className="image-text">
            <img src={first_image} alt="pic" className="offer-image" />
            <div className="info-container">
              <p className="info-head">Boost Productivity and Quality</p>
              <p className="info">
                Our innovative farm business model and design optimize growing
                conditions, enabling farmers to achieve higher yields and
                superior quality produce.
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="image-text">
              <img src={second_image} className="offer-image" />
              <p className="info-head">Protect Our Forests</p>
              <p className="info">
                Through sustainable land management practices and agroforestry
                techniques, we <a href=""></a>are safeguarding biodiversity and
                combating deforestation.
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="image-text">
              <img src={image} alt="pic" className="offer-image" />
              <p className="info-head">Save Energy and Resources</p>
              <p className="info">
                Agritectures efficient design minimizes energy consumption and
                resource waste, reducing operating costs and environmental
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatweoffer;
