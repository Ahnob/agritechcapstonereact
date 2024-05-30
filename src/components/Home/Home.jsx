import "./Home.css";
import Navbars from "../Navbar/Navbars";
import AboutUs from "../Aboutus/AboutUs";
import Footer from "../footer/Footer";
import Offer from ".././Whatweoffer/Whatweoffer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbars />
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
      <AboutUs />
      <Offer />
      <Footer />
    </>
  );
}

export default Home;
