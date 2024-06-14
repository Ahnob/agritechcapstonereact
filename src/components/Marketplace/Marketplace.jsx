import "./Marketplace.css";
import Navbars from "../Navbar/Navbars";
import stars from "../../assets/stars.png";
import greystar from "../../assets/star-gray.png";
import marketplace1 from "../../assets/marketplcimg1.png";
import loveimg from "../../assets/love.png";
// import marketplace2 from "../../assets/marketplcimg2.png";
// import marketplace3 from "../../assets/marketplcimg3.png";
// import marketplace4 from "../../assets/marketplcimg4.png";
// import marketplace5 from "../../assets/marketplcimg5.png";
// import marketplac6 from "../../assets/marketplcimg6.png";

const MarketPlace = () => {
  return (
    <>
      <Navbars />
      <section className="section">
        <div className="market-plc" id="market-plc">
          <p>Market Place</p>
        </div>
        <div className="most">
          <h2>Most Popular</h2>
          <div className="searchFilter">
            <ul className="menu mktMenu">
              <div className="search">
                <img
                  src="../image/searchmkt.png"
                  alt=""
                  className="imgSearch"
                />
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Search products and manufacturers"
                />
              </div>
            </ul>
            <div>
              <button className="filterGrey">Search</button>
            </div>
          </div>
        </div>
        <div className="displayout">
          <div className="displayout1">
            <img src={marketplace1} alt="" />

            <div className="discription">
              <div className="productimage-flex">
                <h3>Product Name</h3>
                <img src={loveimg} alt="" />
              </div>
              <p>₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="displayout1">
            <div className="cards">
              <img src={marketplace1} alt="" />
            </div>
            <div className="discription">
              <div className="productimage-flex">
                <h3>Product Name</h3>
                <img src={loveimg} alt="" />
              </div>
              <p>₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="displayout1">
            <div className="cards">
              <img src={marketplace1} alt="" />
            </div>
            <div className="discription">
              <div className="productimage-flex">
                <h3>Product Name</h3>
                <img src={loveimg} alt="" />
              </div>
              <p>₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPlace;
