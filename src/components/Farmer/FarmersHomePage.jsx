import searchIcon from "../image/search.png";
import notificationIcon from "../image/Notification.png";
import redIcon from "../image/red.png";
import profileIcon from "../image/profileicon.png";

function FarmersHomePage() {
  return (
    <>
      <div className="header">
        <div id="searchbar">
          <i className="icons-nav">
            <img src={searchIcon} alt="" />
          </i>
          <input type="text" id="search" placeholder="Search Here..." />
        </div>
        <div>
          <img src={notificationIcon} alt="" id="notification" />
          <img src={redIcon} alt="" id="red-icon" />
        </div>
        <div>
          <img src={profileIcon} alt="" id="profile-img" />
        </div>
        <div>
          <p>Admin</p>
          <p>Moses</p>
        </div>
      </div>
    </>
  );
}

export default FarmersHomePage;
