import logo from "../../assets/logo capstone.jpg";
import homeIcon from "../../image/homeblk.png";
import trainingIcon from "../../image/trainingimg.png";
import monitoringIcon from "../../image/monitoring.png";
import marketIcon from "../../image/marketf.png";
import subscriptionIcon from "../../image/subscriptions.png";
import settingsIcon from "../../image/setings.png";
import contactIcon from "../../image/phonehandleblack.png";
import signOutIcon from "../../image/signout.png";

function Sidebar() {
  return (
    <aside>
      <div id="asidediv">
        <div id="aside-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="aside-content">
          <li>
            <a href="../index.html" className="link">
              <img src={homeIcon} alt="Home" />
              Home
            </a>
          </li>
          <li>
            <a href="../html/training.html" className="link">
              <img src={trainingIcon} alt="Training" />
              Training
            </a>
          </li>
          <li>
            <a href="../html/farmerhomepg.html" className="link">
              <img src={monitoringIcon} alt="Farm Monitoring" />
              Farm Monitoring
            </a>
          </li>
          <li>
            <a href="../html/marketplace.html" className="link">
              <img src={marketIcon} alt="Marketplace" />
              Market Place
            </a>
          </li>
          <li>
            <a href="#welcome" className="link">
              <img src={subscriptionIcon} alt="Subscription" />
              Subscription
            </a>
          </li>
          <li>
            <a href="#welcome" className="link">
              <img src={settingsIcon} alt="Settings" />
              Settings
            </a>
          </li>
          <li>
            <a href="../contactuspg.html" className="link">
              <img src={contactIcon} alt="Contact Us" />
              Contact Us
            </a>
          </li>
          <li>
            <a href="#welcome" className="link">
              <img src={signOutIcon} alt="Sign Out" />
              Sign Out
            </a>
          </li>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
