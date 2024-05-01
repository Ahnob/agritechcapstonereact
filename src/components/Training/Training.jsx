import logo_icon from "../../assets/logo capstone.jpg"
function Training() {
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
                <img src={logo_icon}/>
            </div>
           
            <div className="aside-content">
                <li><a href="../index.html" className="link"> <i className="icons"><img src="../image/homeblk.png" alt=""/></i>Home</a></li>
            </div>
            <div className="aside-content">
                <li><a href="../html/training.html" className="link"> <i className="icons"><img src="../image/trainingimg.png" alt=""/></i>Training</a></li>
            </div>
            <div className="aside-content">
                <li><a href="../html/farmerhomepg.html" className="link"> <i className="icons"><img src="../image/monitoring.png" alt=""/></i>Farm monitoring</a></li>
            </div>
            <div className="aside-content">
                <li><a href="../html/marketplace.html" className="link"> <i className="icons"><img src="../image/marketf.png" alt=""/></i>Market Place</a></li>
            </div>
            <div className="aside-content">
                <li><a href="#welcome" className="link"> <i className="icons"><img src="../image/subscriptions.png" alt=""/></i>Subscription</a></li>
            </div>
            <div className="aside-content">
                <li><a href="#welcome" className="link"> <i className="icons"><img src="../image/setings.png" alt=""/></i>Settings</a></li>
            </div>
            <div className="aside-content">
                <li><a href="../contactuspg.html" className="link"> <i className="icons"><img src="../image/phonehandleblack.png" alt=""/></i>Contact Us</a></li>
            </div>
            <div className="aside-content sign-out">
                <li><a href="#welcome" className="link"> <i className="icons"><img src="../image/signout.png" alt=""/></i>Sign Out</a></li>
            </div>
        </div>
        <div id="main-container">
            <div className="button">
                <button style="background-color: rgb(46, 153, 0);"><a href="../html/training.html" style="color: white;">All</a></button>
                <button><a href="../html/trainingpro.html">In progress</a></button>
                <button><a href="../html/trainingcom.html">Completed</a></button>
            </div>
            <div id="training-contianer">
                <button className="training-contianer1">
                    <img src="../image/T and R img1.png" alt=""/>
                    <h5>Technical Training</h5>
                    <p>Installation procedures, automated system control, irrigation systems management, and CEA (controlled environmental agriculture) techniques.</p>
                    <div>Explore</div>
                </button>
                <button className="training-contianer1">
                    <img src="../image/T and R img2.png" alt="" />
                    <h5>Crop Management</h5>
                    <p>Optimal growing conditions, nutrient management, disease prevention, and harvesting techniques for various crops. <span style="color: white;">is not to display now</span></p>
                    <div>Explore</div>
                </button>
                <button className="training-contianer1">
                    <img src="../image/T and R img3.png" alt=""/>
                    <h5>Sustainability Practices</h5>
                    <p>Learn sustainable farming  practices such as water management, energy efficiency, and waste reduction strategies.<span style="color: white;">is not to display now, this one will be sturborn</span></p>
                    <div>Explore</div>
                </button>
                <button className="training-contianer1">
                    <img src="../image/T and R img4.png" alt=""/>
                    <h5>Business Management</h5>
                    <p>Financial planning, marketing and sales,  Get equipped with the knowledge and tools needed to run successful and profitable vertical farming enterprises.</p>
                    <div>Explore</div>
                </button>
                <button className="training-contianer1">
                    <img src="../image/T and R img5.png" alt=""/>
                    <h5>Safety and Complience</h5>
                    <p>Installation procedures, automated system control, irrigation systems management, and CEA (controlled environmental agriculture) techniques.</p>
                    <div>Explore</div>
                </button>
            </div>

           
        </div>
    </aside>
    </div>
  )
}

export default Training
