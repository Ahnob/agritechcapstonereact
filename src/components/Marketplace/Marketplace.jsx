import "./Marketplace.css";
import Navbar from "../Navbar/Navbar";
import stars from "../../assets/stars.png";
import greystar from "../../assets/star-gray.png";
import marketplace1 from "../../assets/marketplcimg1.png";
import loveimg from "../../assets/love.png";
import filter_icon from "../../assets/filtericon.png";
import search_icon from "../../assets/search-icon.svg";
import marketplace2 from "../../assets/marketplcimg2.png";
import marketplace3 from "../../assets/marketplcimg3.png";
import marketplace4 from "../../assets/marketplcimg4.png";
import marketplace5 from "../../assets/marketplcimg5.png";
import marketplace6 from "../../assets/marketplcimg6.png";
import Footer from "../footer/Footer";
import cart_icon from "../../assets/cart_icon.svg";
import account_icon from "../../assets/Account-icon.svg";

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
    label: "Contact Us",
    href: "/Contactus",
  },
  {
    label: "Market Place",
    href: "/Marketplace",
  },
];

const MarketPlace = () => {
  return (
    <>
      <Navbar links={links} />
      <section className="section">
        <h3 className="marketplace-topheading">Market Place</h3>
        <div className="most">
          <div className="marketplace-flex">
            <h3 className="bold-h3">Most Popular</h3>
            <div className="search-container">
              <img src={search_icon} alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Search products and manufacturers..."
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
        <div className="displayout">
          <div className="displayout1">
            <img src={marketplace1} className="product" alt="" />

            <div className="description">
              <div className="productimage-flex">
                <h3 className="product-name">Product Name</h3>
                <img src={loveimg} className="love-image" alt="" />
              </div>
              <p className="colorednumber">₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button className="addtocartbtn">Add to Cart</button>
                <button className="buynowbtn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="displayout1">
            <div className="cards">
              <img src={marketplace2} className="product" alt="" />
            </div>
            <div className="description">
              <div className="productimage-flex">
                <h3 className="product-name">Product Name</h3>
                <img src={loveimg} className="love-image" alt="" />
              </div>
              <p className="colorednumber">₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button className="addtocartbtn">Add to Cart</button>
                <button className="buynowbtn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="displayout1">
            <div className="cards">
              <img src={marketplace3} className="product" alt="" />
            </div>
            <div className="description">
              <div className="productimage-flex">
                <h3 className="product-name">Product Name</h3>
                <img src={loveimg} className="love-image" alt="" />
              </div>
              <p className="colorednumber">₦120.00</p>
              <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={greystar} alt="" />
                <p className="rating">(171)</p>
              </div>
              <div className="action-button">
                <button className="addtocartbtn">Add to Cart</button>
                <button className="buynowbtn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="marketplace-flex">
        <h3 className="bold-h3">Best Seller</h3>
        <div className="marketplace-flex1">
          <button className="marketplace-flex1 filter-btn">
            <img src={filter_icon} alt="filter" />
            <p>Filters</p>
          </button>
        </div>
      </div>
      <div className="displayout">
        <div className="displayout1">
          <img src={marketplace4} className="product" alt="" />

          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="displayout1">
          <div className="cards">
            <img src={marketplace5} className="product" alt="" />
          </div>
          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="displayout1">
          <div className="cards">
            <img src={marketplace6} className="product" alt="" />
          </div>
          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="displayout">
        <div className="displayout1">
          <img src={marketplace4} className="product" alt="" />

          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="displayout1">
          <div className="cards">
            <img src={marketplace5} className="product" alt="" />
          </div>
          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="displayout1">
          <div className="cards">
            <img src={marketplace6} className="product" alt="" />
          </div>
          <div className="description">
            <div className="productimage-flex">
              <h3 className="product-name">Product Name</h3>
              <img src={loveimg} className="love-image" alt="" />
            </div>
            <p className="colorednumber">₦120.00</p>
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={greystar} alt="" />
              <p className="rating">(171)</p>
            </div>
            <div className="action-button">
              <button className="addtocartbtn">Add to Cart</button>
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
