import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
              <li>
                <Link className="footer-link" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/social-media-handles">
                  Social Media handles
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="list none">
            <h5 className="navigation">Navigation</h5>
            <ul className="the-list">
              <li className="none">
                <Link className="footer-link" to="/" onClick="">
                  Home
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/Aboutus" onClick="">
                  About Us
                </Link>
              </li>
              <li className="none">
                <Link className="footer-link" to="/products" onClick="">
                  Products
                </Link>
              </li>

              <li className="none">
                <Link className="footer-link" to="/market-place" onClick="">
                  Market Place
                </Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h5 className="Navigation">Contact Us</h5>
            <ul className="the-list">
              <li>Email: uphaqar@gmail.com</li>
              <li>Phone No:+23480987654</li>
              <li>Address: Abuja</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
