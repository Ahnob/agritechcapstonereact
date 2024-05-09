import email_icon from "../../assets/email.png";
import phone_icon from "../../assets/Phone-icon.svg";
import human_icon from "../../assets/Customer-icon.svg";
import "./Contactus.css";
import Navbars from "../Navbar/Navbars";
import Footer from "../footer/Footer";

function Contactus() {
  return (
    <>
      <Navbars />
      <div className="contact-container">
        <div>
          <h3>Contact Us</h3>
          <p className="contact-paragraph">
            Welcome to Agritech! We are delighted that you are interested in
            connecting with us. Whether you are a farmer looking to explore
            vertical farming opportunities, a potential partner interested in
            collaboration, or a curious enthusiast eager to learn more about our
            innovative solutions, we are here to assist you every step of the
            way.
          </p>
          <p>
            Got questions, feedback or ideas to share? Our dedicated team is
            ready to listen and assist you. Feel free to reach out to us via the
            contact form below,and we will get back to you promptly.
          </p>
        </div>
        <div>
          <div className="input-box">
            <img src={human_icon} alt="human_icon" />
            <input type="text" placeholder="Full Name"></input>
          </div>
          <div className="input-box">
            <img src={email_icon} />
            <input type="text" placeholder="Email address"></input>
          </div>
          <div className="input-box">
            <img src={phone_icon} />
            <input type="text" placeholder="Phone Number"></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Your message"></input>
          </div>
          <button className="contact-button">Send Message</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
