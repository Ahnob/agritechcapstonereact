import aboutPgImg1 from "../../assets/Aboutus-image.svg";
import aboutPgImg2 from "../../assets/about.png";
import aboutPgImg3 from "../../assets/whatweoffer-newimage.svg";
import team_first from "../../assets/firstimage.png";
import team_second from "../../assets/second-image.svg";
import team_third from "../../assets/third-image.png";
import aboutPgIcon from "../../assets/aboutPgIcon.png";
import "./Aboutus.css";
import Navbar from "../Navbar/Navbar";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/Aboutus",
  },
  {
    label: "Products",
    href: "/Products",
  },
  {
    label: "Contact us",
    href: "/Contactus",
  },
  {
    label: "Marketplace",
    href: "/Marketplace",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Navbar links={links} />

      <div>
        <img src={aboutPgImg1} alt="" className="aboutPgImg1" />
        <h3 className="aboutustxt">About us</h3>
      </div>
      <div className="aboutuscontainer">
        <div>
          <img src={aboutPgImg2} alt="" className="aboutPgImg2" />
        </div>
        <div className="aboutUsPgTxt1">
          <h2>About Agritechlink</h2>
          <span>
            Welcome to AgritechLink, your integrated agricultural management
            platform for sustainable farming and enhanced market access. Our
            mission is to revolutionize the agricultural sector in Nigeria by
            providing innovative solutions that empower farmers, promote
            sustainable practices, and foster economic growth.
          </span>
          <h2>Our Story</h2>
          <span>
            AgritechLink was born out of a collaboration between Group 102 of
            Tech4Dev 2024 fellows and Uphaqar, a pioneering agricultural
            technology company in Nigeria. Through Agile methodologies and
            stakeholder engagement, we recognized the pressing need to address
            the agricultural sector's challenges, including inefficient farming
            practices, limited market access, and environmental degradation.
          </span>
        </div>
      </div>

      <div className="aboutus-second-container">
        <div className="aboutUsPgTxt1">
          <h2 className="aboutus-header">Our Solution</h2>
          <span>
            AgritechLink is a comprehensive platform that offers farmers access
            to Uphaqar's innovative suspended agriculture 3D design farming
            model called “Agritecture”. We also offer a marketplace where
            farmers within our database and business model get to showcase their
            products and sell to potential buyers (both B2C and B2B within our
            platform). This marketplace serves as a hub for connecting farmers
            directly with consumers and businesses, enhancing market access and
            fostering economic growth in the agricultural sector. The platform
            also serves as a hub for training, support services, and resources
            to empower farmers to thrive in today's agricultural landscape.
          </span>
        </div>
        <img src={aboutPgImg3} alt="" className="aboutPgImg3" />
      </div>
      <div className="aboutUsPgTxth3">
        <h2 className="our_approach">Our Approach</h2>
        <span>
          At AgritechLink, we combine Scrum and Agile methodologies to ensure
          efficient project management and continuous improvement. Our dedicated
          team of developers, designers, and project managers work tirelessly to
          deliver a platform that meets the needs of our stakeholders and users.
        </span>
      </div>

      <h2 className="aboutus-h2">Key Features</h2>
      <div className="aboutUsPgTxth4Flex">
        <div className="aboutUsPgTxth4Box1 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Uphaqar Agritecture Model:</h2>
            <span>
              We enable efficient scaling of Uphaqar's Agritecture model,
              allowing farmers across Nigeria to benefit from sustainable
              farming practices.
            </span>
          </div>
        </div>
        <div className="aboutUsPgTxth4Box2 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Comprehensive Support System:</h2>
            <span>
              Our platform provides free training programs and ongoing
              assistance to ensure farmers can effectively implement and manage
              the Agritecture model.
            </span>
          </div>
        </div>
        <div className="aboutUsPgTxth4Box3 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Facilitated Market Access:</h2>
            <span>
              With our marketplace feature, farmers can showcase and sell their
              products directly to consumers and businesses, enhancing their
              profitability and sustainability.
            </span>
          </div>
        </div>

        <div className="aboutUsPgTxth4Box4 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Promoting Sustainable Practices:</h2>
            <span>
              AgritechLink integrates monitoring and reporting functionalities
              to promote sustainable farming practices and environmental
              conservation.
            </span>
          </div>
        </div>
        <div className="aboutUsPgTxth4Box5 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Revenue Generation:</h2>
            <span>
              By facilitating market access and offering subscription services,
              AgritechLink creates revenue opportunities for both farmers and
              Uphaqar.
            </span>
          </div>
        </div>
        <div className="aboutUsPgTxth4Box6 box">
          <div>
            <img src={aboutPgIcon} alt="" className="aboutUsPgTxth4Box1Img" />
            <h2>Driving Innovation:</h2>
            <span>
              We embrace cutting-edge technologies such as precision farming,
              IoT sensors, and AI to optimize resource use and increase
              efficiency in agriculture.
            </span>
          </div>
        </div>
      </div>

      <hr className="teamhr" />
      <div className="ourTeam">
        <div>
          <div className="ourTeamA">Our Team</div>
          <div className="agriI">(Agritech Innovators)</div>
        </div>
        <div className="teamCardsGrid">
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_first} alt="" className="teamImg" />
              <br />
              <div className="teamName">Mercy Fred-Ekhose</div>
              <div className="teamRole">Team Lead (Product Manager)</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_second} alt="" className="teamImg" />
              <br />
              <div className="teamName">Mutiyat Salami</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={team_third} alt="" className="teamImg" />
              <br />
              <div className="teamName">Moromoluwa Olusanjo</div>
              <div className="teamRole">Product Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
