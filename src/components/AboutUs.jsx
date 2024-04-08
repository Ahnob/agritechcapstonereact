import about_image from "../assets/about.png";

function AboutUs() {
  return (
    <>
      <div className="about-content">
        <div className="about-image">
          <p>About Us</p>
          <img src={about_image} alt="pic" />
        </div>
        <div className="about-para">
          <h3>Unlocking Sustainable Agriculture with Agritecture</h3>
          <p className="about-para-one">
            At Agritecture, we are pioneering the future of farming with
            innovative solutions that empower farmers and protect our planet.
            Our platform, products, and services are designed to address the
            challenges of today while laying the groundwork for a sustainable
            tomorrow.
          </p>

          <p className="about-para-two">
            However, at AgritechLink, we are committed to overcoming these
            obstacles through continuous innovation and collaboration. By
            investing in research and development, we are streamlining our
            processes and making our solutions more accessible and adaptable to
            farmers of all scales.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
