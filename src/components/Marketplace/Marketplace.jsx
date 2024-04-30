import arrowLeft from "../image/arrowleft.png";
import marketplace from "../image/marketplace.png";
import logoCapstone from "../image/logo capstone.jpg";
import searchIcon from "../image/search.png";
import filterIcon from "../image/filtericon.png";
import storeImg1 from "../image/storeimg1.png";
import storeImg2 from "../image/storeimg2.png";
import storeImg3 from "../image/storeimg3.png";
import pencilIcon from "../image/pencilicon.png";
import deleteIcon from "../image/deleteicons.png";
import pictureIcon from "../image/picture-icon.png";

function Sidebar() {
  const togglex = () => {
    // Your toggle function logic goes here
  };
}
function Marketplace() {
  return (
    <div id="blurx">
      <nav className="market-header">
        <div className="left-header">
          <div>
            <img src={arrowLeft} alt="" />
          </div>
          <img src={marketplace} alt="" />
          <p>My Store</p>
        </div>
        <div className="right-header">
          <a href="#" onClick={togglex}>
            <button>+</button>
            <p>Add Product</p>
          </a>
        </div>
      </nav>
      <aside>
        <div id="asidediv">
          <div id="aside-logo">
            <img src={logoCapstone} alt="" />
          </div>
          <div className="aside-content" id="asideContent">
            <li>
              <a href="../index.html" className="link">
                <i className="icons">
                  <img src="../image/homeblk.png" alt="" />
                </i>
                Home
              </a>
            </li>
          </div>
          {/* Other aside content */}
        </div>
        {/* Main container */}
        <div id="main-container">
          <div className="searchbox">
            <div>
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Search product..." />
            </div>
            <div>
              <img src={filterIcon} alt="" />
              <p>Filters</p>
            </div>
          </div>
          <div>
            <table id="productTable">{/* Table rows */}</table>
          </div>
        </div>
      </aside>
      {/* Upload container */}
      <div className="container-upload" id="popupx">
        <div className="close" onClick={togglex}>
          X
        </div>
        <h2>Upload New Product</h2>
        <h6>Tips</h6>
        <p>Ensure you upload high-quality pictures of your products</p>
        <div>
          <div className="img">
            <img src={pictureIcon} alt="" />
          </div>
          <p className="drag">
            Drag and drop image here, or click add image Add Image
          </p>
          <button className="add-image">Add Image</button>
        </div>
        <div>
          <h2>General Information</h2>
          <p>Product Name</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type product name here..."
          />
          <p>Description</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type product description here..."
          />
          <label htmlFor="">Price</label>
          <input type="text" name="" id="" placeholder="$ Type price here..." />
        </div>
        <div className="button-option">
          <button>X Cancel</button>
          <button>+ Add Product</button>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
