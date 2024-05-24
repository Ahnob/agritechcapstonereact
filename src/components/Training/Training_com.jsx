import React from 'react'

function Training_com() {
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
                <img src="../image/logo capstone.jpg" alt=""/>
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
                <li><a href="../html/contactuspg.html" className="link"> <i className="icons"><img src="../image/phonehandleblack.png" alt=""/></i>Contact Us</a></li>
            </div>
            <div className="aside-content sign-out">
                <li><a href="#welcome" className="link"> <i className="icons"><img src="../image/signout.png" alt=""/></i>Sign Out</a></li>
            </div>
        </div>
        <div id="main-container">
            <div className="button">
                <button><a href="../html/training.html">All</a></button>
                <button><a href="../html/trainingpro.html">In progress</a></button>
                <button style="background-color: rgb(46, 153, 0);"><a href="../html/trainingcom.html" style="color: white;">Completed</a></button>
            </div>
            <div className="training-contianer">
                <button className="training-pro">
                    <img src="../image/T and R img3.png" alt=""/>
                    <div>
                    <div><span style="font-weight: bold;">Business Management:</span>Farmers will receive training in business management skills, such as financial planning, marketing and expansion, sales, international trade laws and customer relations. This category will equip farmers with the knowledge and tools needed to run successful and profitable vertical farming enterprises.</div>
                    <div id="explore">Explore</div>
                    </div>
                    <div>100%</div>
                </button>
            </div>
        </div>
    </aside>
    </div>
  )
}

export default Training_com
