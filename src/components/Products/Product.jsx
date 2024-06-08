import first_image from "../../assets/whatweoffer-newimage.svg";
import second_image from "../../assets/pikaso_texttoimage_A-3d-model-to-demonstrate-precision-planting 2.svg";
import Navbar from "../Navbar/Navbars";
import Footer from "../footer/Footer";

import "./Products.css";
const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="top-product-container">
        <h2 className="product-h3">
          Innovative Agricultural Solutions for a Sustainable Future
        </h2>
      </div>
      <div>
        <h2 className="proOurPro">Our Products</h2>
        <div className="proagr1">
          At Agritechlink we provide the innovative Agritecture model, a
          pioneering solution featuring a pyramid-shaped structure and energy
          pallets. This innovative approach revolutionizes conventional farming
          by maximizing natural sunlight, minimizing energy consumption, and
          integrating agroforestry techniques.
        </div>

        <div className="product-second-container">
          <div className>
            <h4 className="proh4">Agritecture Farming Model</h4>

            <img
              src={first_image}
              className="product-image"
              alt="Agritecture Farming Model"
            />
          </div>

          <div className="protxt1">
            <div className="protxtSpan1">
              We are designing a suspended agritecture in the shape of a
              pyramid, featuring energy pallets with curved forms made of glassy
              black steel for heat retention. These pallets serve as sun
              trackers and mirrors, directing natural sunlight into the
              building's six-layered structure. Each layer measures 379.7 feet,
              with proportions calculated according to the prototype.
              <br />
              In the middle of the building, there's a spiraled transport track
              system, resembling a train rack, along with an elevator system, to
              facilitate movement due to the building's length. The steel
              structure is painted glassy black to retain heat, accommodating
              soil technology for growing industrial crops.
            </div>
            <button className="proLearn">Learn more</button>
          </div>
        </div>
      </div>
      <div className="product-second-container">
        <div>
          <h4 className="proh4">Precision Farming</h4>
          <img
            src={second_image}
            className="product-image"
            alt="Precision Farming"
          />
        </div>
        <div className="protxt1">
          <div className="protxtSpan1">
            Precision Farming, the second innovative product offered by
            AgritechLink, represents a groundbreaking approach to agricultural
            management and production. Developed and managed by Uphaqar, our
            parent company, Precision Farming leverages cutting-edge technology
            and data-driven insights to optimize every aspect of farming
            operations.
            <br />
            Overview: Precision Farming redefines traditional farming methods by
            integrating advanced technologies such as satellite imagery, drones,
            sensors, and data analytics. By harnessing real-time data and
            analytics, farmers gain unprecedented visibility into their crops,
            soil health, weather patterns, and machinery performance.
          </div>
          <button className="proLearn">Learn more</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
