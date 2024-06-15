import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Offer from ".././Whatweoffer/Whatweoffer";
import { Link } from "react-router-dom";
import aboutus_image from "../../assets/about.png";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/Aboutus",
  },
  {
    label: "Products",
    href: "/Products",
  },
  {
    label: "Contact us",
    href: "/Contactus",
  },
  {
    label: "Marketplace",
    href: "/Marketplace",
  },
];

function Home() {
  return (
    <>
      <Navbar links={links} />
      <div className="section1">
        <div className="text">
          <p>
            Welcome to <span className="agritechlink"> AgritechLink</span>
          </p>
          <p> Your Gateway to Sustainable Agriculture and Market Place!</p>
        </div>
      </div>
      <div className="firstp">
        <p className="mission">
          At AgritechLink, we are on a mission to revolutionize farming and
          reshape the future of agriculture. Whether you are a farmer, partner,
          visitor, or buyer, you are part of our vibrant community dedicated to
          driving positive change in the agricultural industry. Explore our
          platform to discover our innovative farm solution, access high-quality
          farm products, and connect with like-minded individuals and businesses
          committed to sustainability and growth. Together, let us cultivate a
          brighter future for agriculture and our planet.
        </p>
        <div className="get-started">
          <button className="getstarted_button bolder">
            <Link to="/Onboarding" className="getstarted_link">
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div>
        <div className="homepage_aboutus">
          <img src={aboutus_image} alt="" />
          <div className="aboutUsPgTxt1">
            <h2>About Agritechlink</h2>
            <span>
              Welcome to AgritechLink, your integrated agricultural management
              platform for sustainable farming and enhanced market access. Our
              mission is to revolutionize the agricultural sector in Nigeria by
              providing innovative solutions that empower farmers, promote
              sustainable practices, and foster economic growth.
            </span>
            <h2>Our Story</h2>
            <span>
              AgritechLink was born out of a collaboration between Group 102 of
              Tech4Dev 2024 fellows and Uphaqar, a pioneering agricultural
              technology company in Nigeria. Through Agile methodologies and
              stakeholder engagement, we recognized the pressing need to address
              the agricultural sector's challenges, including inefficient
              farming practices, limited market access, and environmental
              degradation.
            </span>
            <button className="Learnmore_btn">Learn more</button>
          </div>
        </div>
      </div>

      {/* <div className="aboutUsPgTxth3">
        <h2>Our Approach</h2>
        <span>
          At AgritechLink, we combine Scrum and Agile methodologies to ensure
          efficient project management and continuous improvement. Our dedicated
          team of developers, designers, and project managers work tirelessly to
          deliver a platform that meets the needs of our stakeholders and users.
        </span>
      </div> */}
      {/* <AboutUs /> */}
      <Offer />
      <Footer />
    </>
  );
}

export default Home;
