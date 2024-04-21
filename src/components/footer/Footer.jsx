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
                <li>About us</li>
                <li>Products</li>
              </ul>
            </div>
            <div className="list">
              <h5>Contact Us</h5>
              <ul className="the-list">
                <li>Email</li>
                <li>Phone No:</li>
                <li>Address</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
