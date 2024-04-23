// import home-icon from "../../../assets/home_icon.svg";
import farmicon from "../../../assets/farm-icon.svg";
// import subscriptionicon from "../../../assets/subscribe-icon.svg";
import marketicon from "../../../assets/market-icon.svg";
import settingsicon from "../../../assets/setings-icon.svg";
// import infoicon from "../../../assets/Info-icon.svg";
// import mystoreicon from "../../../assets/Mystore-icon.svg";
// import securityicon from "../../../assets/Sercurity-icon.svg";
import logo from "../../../assets/logo capstone.jpg";
import subscribeicon from "../../../assets/Subscription-icon.svg";
import contacticon from "../../../assets/Phone-icon.svg";
import trainingicon from "../../../assets/Real grad-icon.svg";
import homeicon from "../../../../assets/home_icon.svg";
function Settings() {
  return (
    <>
      <img src={logo} />
      <ul>
        <li className="sidenav-list">
          <img src={homeicon} />
          <a href="#welcome" className="sidenav-anchor">
            Home
          </a>
        </li>
        <li className="sidenav-list">
          <img src={trainingicon} />
          <a href="#welcome" className="sidenav-anchor">
            Training
          </a>
        </li>
        <li className="sidenav-list">
          <img src={farmicon} />
          <a href="#welcome" className="sidenav-anchor">
            Farm Monitoring
          </a>
        </li>
        <li className="sidenav-list">
          <img src={marketicon} />
          <a href="#welcome" className="sidenav-anchor">
            Market Place
          </a>
        </li>
        <li className="sidenav-list">
          <img src={subscribeicon} />
          <a href="#welcome" className="sidenav-anchor">
            Subscription
          </a>
        </li>
        <li className="sidenav-list">
          <img src={settingsicon} />
          <a href="#welcome" className="sidenav-anchor">
            Settings
          </a>
        </li>
        <li className="sidenav-list">
          <img src={contacticon} />
          <a href="#welcome" className="sidenav-anchor">
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
}

export default Settings;
