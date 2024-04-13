import "./Home.css";
import Navbars from ".././Navbar/Navbars";
// import AboutUs from "../Aboutus/AboutUs";
// import Footer from "../footer/Footer";
// import Offer from "../footer/Footer";
// import welcome_photo from "../assets/welcomebackgrounimage.png";

function Home() {
  return (
    <>
      <Navbars />
      {/* <div className="section1">
        <img className="image" src={welcome_photo} alt="" />

        <div className="firstp">
          <p className="welcome text" id="welcome">
            Welcome to
            <span className="agritechlink"> AgritechLink</span> Your Gateway to
            Sustainable Agriculture and Market Place!
          </p>
          <p className="mission">
            At AgritechLink, we are on a mission to revolutionize farming and
            reshape the future of agriculture. Whether you are a farmer,
            partner, visitor, or buyer, you are part of our vibrant community
            dedicated to driving positive change in the agricultural industry.
            Explore our platform to discover our innovative farm solution,
            access high-quality farm products, and connect with like-minded
            individuals and businesses committed to sustainability and growth.
            Together, let us cultivate a brighter future for agriculture and our
            planet.
          </p>
          <div className="get-started">
            <button className="getstarted_button bolder">Get started</button>
          </div>
        </div>
      </div>
      <div>
        <AboutUs />
        <Offer />
        <Footer />
      </div> */}
    </>
  );
}

export default Home;
