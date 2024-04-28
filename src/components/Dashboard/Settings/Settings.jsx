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
import ToggleButton from "../../Toggle/Togglebutton";

function Settings() {
  return (
    <>
      <div className="settings-container">
        {/* <div className="top-section">
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
        </div> */}
        <div className="third-section">
          {/* <img src={logo} /> */}
          {/* <ul className="sidebar">
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
          </ul> */}
          <div className="second-container">
            <div className="top-container">
              <h3 className="setting-header">Settings</h3>
              <h3> Manage your account settings</h3>
            </div>
            <div className="sections">
              <div className="information">
                <div className="personal-information">
                  <div className="padding-icons">
                    <img className="icon" src={infoicon} />
                    <p className="personal-info-p">Personal Info</p>
                  </div>
                  <div className="padding-icons">
                    <img className="icon" src={subscriptionicon} />
                    <p>Subscription</p>
                  </div>
                  <div className="padding-icons">
                    <img className="icon" src={mystore} />
                    <p>My Store</p>
                  </div>
                  <div className="padding-icons">
                    <img className="icon" src={securityicon} />
                    <p>Security</p>
                  </div>
                </div>

                <div className="general-information">
                  <h3 className="border-bottom">General information</h3>
                  <div>
                    <div className="profile-section">
                      <div className="profile">
                        <h3 className="profile-heading">Profile Picture</h3>
                        <img src={profileimage} className="profile-image" />
                      </div>
                      <div className="settings-button">
                        <button className="save-button">Save</button>
                        <button className="delete-button">Delete</button>
                      </div>
                    </div>
                    <div className="input-field-container">
                      <div className="input-field">
                        <label className="label" htmlFor="phoneNumber">
                          Farm Name
                        </label>
                        <input type="text" placeholder="Afrinet Farms"></input>
                        <label className="label" htmlFor="Phone Number">
                          Phone Number
                        </label>
                        <input type="text" placeholder="xyz@gmail.com" />
                        <label className="label" htmlFor="city">
                          City
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className="input-field input-padding">
                        <label className="label" htmlFor="Email address">
                          Email Address
                        </label>
                        <input type="text" placeholder="1228" />
                        <label className="label" htmlFor="address">
                          Address
                        </label>
                        <input type="text" placeholder="xyz" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subscription">
                <h3 className="border-bottom">Subscription</h3>
                <div>
                  <h3 className="subscription-header">Credit Card</h3>
                  <p className="manage-invoice">Manage your invoices</p>
                  <button className="update-btn">Update</button>
                </div>
                <div>
                  <h3 className="subscription-header">Invoices</h3>
                  <p className="manage-invoice"> Manage your invoices</p>
                  <button className="update-btn">Update</button>
                </div>
              </div>
              <div className="payment-header">
                <h3 className="border-bottom">Payment Options</h3>
                <div>
                  <h3 className="subscription-header">Credit Card</h3>
                  <p className="manage-invoice">Manage your invoices</p>
                  <button className="update-btn">Update</button>
                </div>
                <div>
                  <h3 className="subscription-header">Invoice</h3>
                  <p className="manage-invoice">Manage your invoices</p>
                  <button className="update-btn">Update</button>
                </div>
              </div>
              <div className="payment-header">
                <h3 className="border-bottom">Security</h3>
                <p className="underline">Password Information</p>
                <div className="email-setup">
                  <div>
                    <h3 className="subscription-header">Email Setup</h3>
                    <p className="section-paragraph">
                      lorem Ipsum, God is a good God
                    </p>
                  </div>
                  <ToggleButton />
                </div>
                <div className="sms-setup">
                  <div>
                    <h3 className="subscription-header">SMS Setup</h3>
                    <p className="section-paragraph">
                      lorem Ipsum, God is a good God
                    </p>
                  </div>
                  <ToggleButton />
                </div>
                <p className="underline">Password Security</p>
                <div className="password-container">
                  <div className="change-password">
                    <h3 className="subscription-header">Password Change</h3>
                    <p className="section-paragraph">lorem Ipsum</p>
                  </div>
                  <button className="password-btn">Change Password</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
