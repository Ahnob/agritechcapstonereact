import "./Training.css";

function Training_pro() {
  return (
    <div>
      <nav>
        <div id="nav-header">
          <p>Training and Resources</p>
        </div>
      </nav>
      <aside>
        <div id="asidediv">
          <div id="aside-logo">
            <img src="../image/logo capstone.jpg" alt="" />
          </div>

          <div className="aside-content">
            <li>
              <a href="../index.html" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/homeblk.png" alt="" />
                </i>
                Home
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="../html/training.html" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/trainingimg.png" alt="" />
                </i>
                Training
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="../html/farmerhomepg.html" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/monitoring.png" alt="" />
                </i>
                Farm monitoring
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="../html/marketplace.html" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/marketf.png" alt="" />
                </i>
                Market Place
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="#welcome" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/subscriptions.png" alt="" />
                </i>
                Subscription
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="#welcome" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/setings.png" alt="" />
                </i>
                Settings
              </a>
            </li>
          </div>
          <div className="aside-content">
            <li>
              <a href="../html/contactuspg.html" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/phonehandleblack.png" alt="" />
                </i>
                Contact Us
              </a>
            </li>
          </div>
          <div className="aside-content sign-out">
            <li>
              <a href="#welcome" className="link">
                {" "}
                <i className="icons">
                  <img src="../image/signout.png" alt="" />
                </i>
                Sign Out
              </a>
            </li>
          </div>
        </div>
        <div id="main-container">
          <div className="button">
            <button>
              <a href="../html/training.html">All</a>
            </button>
            <button style="background-color: rgb(46, 153, 0);">
              <a href="../html/trainingpro.html" style="color: white;">
                In progress
              </a>
            </button>
            <button>
              <a href="../html/trainingcom.html">Completed</a>
            </button>
          </div>
          <div className="training-contianer">
            <button className="training-pro">
              <img src="../image/T and R img1.png" alt="" />
              <div>
                <div>
                  <span style="font-weight: bold;">Technical Training:</span>
                   This category focuses on providing farmers with hands-on
                  training in operating and maintaining Uphaqar's suspended
                  Agritecture structures and associated equipment. Topics may
                  include installation procedures, automated system control,
                  irrigation systems management, and CEA (controlled
                  environmental agriculture) techniques.
                </div>
                <div id="explore">Explore</div>
              </div>
              <div>55%</div>
            </button>
            <button className="training-pro">
              <img src="../image/T and R img2.png" alt="" />
              <div>
                <div>
                  <span style="font-weight: bold;">Crop Management: </span>
                  Training in this category will cover best practices for crop
                  selection, planting, and cultivation within vertical farming
                  environments. Farmers will learn about optimal growing
                  conditions, nutrient management, disease prevention, and
                  harvesting techniques for various crops.{" "}
                  <span style="color: white;">
                    more text here...e structures and as
                  </span>
                </div>
                <div id="explore">Explore</div>
              </div>
              <div>30%</div>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Training_pro;
