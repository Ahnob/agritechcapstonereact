import farmicon from "../../../assets/farm-icon.svg";
import marketicon from "../../../assets/market-icon.svg";
import settingsicon from "../../../assets/setings-icon.svg";
import logo from "../../../assets/logo capstone.jpg";
import subscribeicon from "../../../assets/subscribe-icon.svg";
import contacticon from "../../../assets/Phone-icon.svg";
import trainingicon from "../../../assets/Realgrad-icon.svg";
import homeicon from "../../../assets/home_icon.svg";
import "./Settings.css";
import notification from "../../../assets/Notifications-ico.svg";
import signouticon from "../../../assets/signout-icon.png";
import searchicon from "../../../assets/search-icon.svg";
import profileimage from "../../../assets/profile-image.svg";
import dropdown from "../../../assets/dropdown-icon.svg";
import infoicon from "../../../assets/Info-icon.svg";
import subscriptionicon from "../../../assets/Subscription-icon.svg";
import mystore from "../../../assets/Mystore-icon.svg";
import securityicon from "../../../assets/Sercurity-icon.svg";

function Settings() {
  return (
    <>
      <div className="settings-container">
        <div className="top-section">
          <div className="search-container">
            <img src={searchicon} alt="search" className="search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="second-section">
            <img src={notification} />
            <img className="second-section" src={profileimage} />
          </div>
          <div className="second-section">
            <p>Admin</p>
            <h3>Moses</h3>
          </div>
          <img className="second-section" src={dropdown} />
        </div>
        <div className="third-section">
          <img src={logo} />
          <ul className="sidebar">
            <li className="sidebar-list">
              <img className="setting-icon" src={homeicon} />
              <a href="#welcome" className="sidebar-anchor">
                Home
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={homeicon} />
              <a href="#welcome" className="sidebar-anchor">
                Training
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={farmicon} />
              <a href="#welcome" className="sidebar-anchor">
                Farm monitoring
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={marketicon} />
              <a href="#welcome" className="sidebar-anchor">
                Market Place
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={subscribeicon} />
              <a href="#welcome" className="sidebar-anchor">
                Subscription
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={settingsicon} />
              <a href="#welcome" className="sidebar-anchor">
                Settings
              </a>
            </li>
            <li className="sidebar-list">
              <img className="setting-icon" src={contacticon} />
              <a href="#welcome" className="sidebar-anchor">
                Contact Us
              </a>
            </li>
            <li className="sidebar-list bottom">
              <img className="setting-icon" src={signouticon} />
              <a href="#welcome" className="sidebar-anchor">
                Sign Out
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Settings</h4>
          <p> Manage your account settings</p>
        </div>
        <div className="second-container">
          <div>
            <div>
              <img src={infoicon} />
              <p>Personal Information</p>
            </div>
            <div>
              <img src={subscriptionicon} />
              <p>Subscription</p>
            </div>
            <div>
              <img src={mystore} />
              <p>My Store</p>
            </div>
            <div>
              <img src={securityicon} />
              <p>Security</p>
            </div>
          </div>
          <div>
            <h3>General information</h3>
            <hr />
          </div>
          <div>
            <div className="profile-section">
              <div className="profile">
                <h3>Profile Picture</h3>
                <img src={profileimage} />
              </div>
              <div className="settings-button">
                <button>Save</button>
                <button>Delete</button>
              </div>
            </div>

            <div className="input-field">
              <label className="label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input type="text" placeholder="First Name"></input>
              <label className="label" htmlFor="phoneNumber">
                Email Address
              </label>
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-field">
              <label className="label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input type="text" placeholder="Phone Number" />
              <label className="label" htmlFor="address">
                Address
              </label>
              <input type="text" placeholder="Address" />
            </div>
            <div>
              <label className="label" htmlFor="city">
                City
              </label>
              <input type="text" placeholder="City" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
