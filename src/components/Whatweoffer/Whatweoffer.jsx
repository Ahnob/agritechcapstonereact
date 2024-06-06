import "./Whatweoffer.css";
import first_image from "../../assets/whatweoffer-newimage.svg";
import second_image from "../../assets/pikaso_texttoimage_A-3d-model-to-demonstrate-precision-planting 2.svg";
import Navbars from "../Navbar/Navbars";
function Whatweoffer() {
  return (
    <>
      <hr className="whatweoffer-hr" />
      <Navbars />

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
              We are designing a suspended agritecture in the shape of a
              pyramid, featuring energy pallets with curved forms made of glassy
              black steel for heat retention. These pallets serve as sun
              trackers and mirrors, directing natural sunlight into the
              building's six layered structure. Each layer measures 379.7 feet,
              with proportions calculated according to the prototype. In the
              middle of the building, there's a spiraled transport track system,
              resembling a train rack, along with an elevator system, to
              facilitate movement due to the building's length. The steel
              structure is painted glassy black to retain heat, accommodating
              soil technology for growing industrial crops. Hydro turbines are
              incorporated to generate energy for the building's consumption.
            </p>
          </div>
          <div className="offer-container">
            <img src={second_image} alt="pic" className="offer-image" />
            <p className="info-head">Precision Farming</p>
            <p className="info-">
              Our Precision Farming solution is a game-changer in modern
              agriculture, leveraging advanced technology and data-driven
              insights to optimize crop production, reduce resource wastage, and
              increase profitability. By integrating sensors, drones, satellite
              imagery, and AI-powered analytics, Precision Farming enables
              farmers to make informed decisions tailored to the specific needs
              of their crops and land. From precise irrigation and fertilization
              to targeted pest management and yield forecasting, this innovative
              solution empowers farmers to maximize output while minimizing
              environmental impact. Join us in shaping the future of agriculture
              through Precision Farming on AgritechLink.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatweoffer;
