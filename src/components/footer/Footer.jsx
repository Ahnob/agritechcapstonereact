import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
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
              <li className="none">Terms of Service</li>
              <li className="none">Privacy Policy</li>
              <li>About us</li>
              <li className="none">Social Media handles</li>
              <li className="none">Blog</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="list none">
            <h5 className="navigation">Navigation</h5>
            <ul className="the-list">
              <li className="none">Home</li>
              <li className="none">About Us</li>
              <li className="none">Products</li>
              <li className="none">Contact Us</li>
              <li className="none">Market Place</li>
            </ul>
          </div>
          <div className="list">
            <h5>Contact Us</h5>
            <ul className="the-list">
              <li>Email</li>
              <li>Phone No</li>
              <li>Address</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
