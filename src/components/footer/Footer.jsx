import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="section-footer" id="market">
        <footer className="footer">
          <div className="footer-content">
            <div>
              <img src={logo} alt="logo" className="logo-image" />
              <p className="logo-image-text">
                We are on a mission to <br />
                revolutionize farming and <br />
                reshape the future of agriculture.
              </p>
            </div>

            <div className="list">
              <h5>Navigation</h5>
              <ul className="the-list">
                <li>FAQs</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
                <a href="#about-heading">
                  <li>About Us</li>
                </a>
                <li>Social Media handle</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="list">
              <h5>Navigation</h5>
              <ul className="the-list">
                <a href="#welcome">
                  <li>Home</li>
                </a>
                <a href="#about-heading">
                  <li>About Us</li>
                </a>
                <a href="#service">
                  <li>Services</li>
                </a>
                <a href="#contact">
                  <li>Contact Us</li>
                </a>
                <a href="market">
                  <li>Market Place</li>
                </a>
              </ul>
            </div>
            <div className="list">
              <h5>Contact Us</h5>
              <ul className="the-list">
                <li>Email</li>
                <li>Phone No:</li>
                <li>Address</li>
                <a href="#about-heading">
                  <li>About Us</li>
                </a>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
