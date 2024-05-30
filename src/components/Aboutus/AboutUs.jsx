import about_image from "../../assets/about.png";
import Navbars from "../Navbar/Navbars";
import "./Aboutus.css";
function AboutUs() {
  return (
    <>
      <Navbars className="hidden-navbar" />
      <div className="about-container">
        <div className="top-about-container">
          <p className="about-heading">About Us</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img className="secondpic-aboutus" src={about_image} alt="pic" />
          </div>
          <div className="about-para">
            {/* <h3 className="about-header">
              Unlocking Sustainable Agriculture with Agritecture
            </h3> */}
            <p className="about-para-one">
              Welcome to AgritechLink, your integrated agricultural management
              platform for sustainable farming and enhanced market access. Our
              mission is to revolutionize the agricultural sector in Nigeria by
              providing innovative solutions that empower farmers, promote
              sustainable practices, and foster economic growth.{" "}
            </p>
            <p className="about-para-two">
              AgritechLink was born out of a collaboration between Group 102 of
              Tech4Dev 2024 fellows and Uphaqar, a pioneering agricultural
              technology company in Nigeria. Through Agile methodologies and
              stakeholder engagement, we recognized the pressing need to address
              the agricultural `sector's` challenges, including inefficient
              farming practices, limited market access, and environmental
              degradation.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
