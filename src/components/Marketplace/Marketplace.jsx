// import { useState } from "react";
// import { Link } from "react-router-dom";
// import arrowLeft from "../image/arrowleft.png";
// import marketplace from "../image/marketplace.png";
// import homeIcon from "../image/homeblk.png";
// import trainingIcon from "../image/trainingimg.png";
// import monitoringIcon from "../image/monitoring.png";
// import marketIcon from "../image/marketf.png";
// import subscriptionsIcon from "../image/subscriptions.png";
// import settingsIcon from "../image/setings.png";
// import contactIcon from "../image/phonehandleblack.png";
// import signOutIcon from "../image/signout.png";
// import searchIcon from "../image/search.png";
// import filterIcon from "../image/filtericon.png";
// import storeImg1 from "../image/storeimg1.png";
// import storeImg2 from "../image/storeimg2.png";
// import storeImg3 from "../image/storeimg3.png";
// import pencilIcon from "../image/pencilicon.png";
// import deleteIcon from "../image/deleteicons.png";
// import pictureIcon from "../../assets/";
// import "./Marketplace.css";

// function App() {
//   const [popupVisible, setPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setPopupVisible(!popupVisible);
//   };

//   return (
//     <div id="blurx">
//       <nav className="market-header">
//         <div className="left-header">
//           <div>
//             <img src={arrowLeft} alt="Arrow Left" />
//           </div>
//           <img src={marketplace} alt="Marketplace" />
//           <p>My Store</p>
//         </div>
//         <div className="right-header">
//           <button onClick={togglePopup}>+</button>
//           <p>Add Product</p>
//         </div>
//       </nav>
//       <aside>
//         <div id="asidediv">
//           <div id="aside-logo">
//             <img src={logoCapstone} alt="Capstone Logo" />
//           </div>
//           <div className="aside-content" id="asideContent">
//             <li>
//               <Link to="../index.html" className="link">
//                 <i className="icons">
//                   <img src={homeIcon} alt="Home Icon" />
//                 </i>
//                 Home
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="../html/training.html" className="link">
//                 <i className="icons">
//                   <img src={trainingIcon} alt="Training Icon" />
//                 </i>
//                 Training
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="../html/farmerhomepg.html" className="link">
//                 <i className="icons">
//                   <img src={monitoringIcon} alt="Monitoring Icon" />
//                 </i>
//                 Farm monitoring
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="../html/marketplace.html" className="link">
//                 <i className="icons">
//                   <img src={marketIcon} alt="Market Icon" />
//                 </i>
//                 Market Place
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="#welcome" className="link">
//                 <i className="icons">
//                   <img src={subscriptionsIcon} alt="Subscriptions Icon" />
//                 </i>
//                 Subscription
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="#welcome" className="link">
//                 <i className="icons">
//                   <img src={settingsIcon} alt="Settings Icon" />
//                 </i>
//                 Settings
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content">
//             <li>
//               <Link to="../contactuspg.html" className="link">
//                 <i className="icons">
//                   <img src={contactIcon} alt="Contact Icon" />
//                 </i>
//                 Contact Us
//               </Link>
//             </li>
//           </div>
//           <div className="aside-content sign-out">
//             <li>
//               <Link to="#welcome" className="link">
//                 <i className="icons">
//                   <img src={signOutIcon} alt="Sign Out Icon" />
//                 </i>
//                 Sign Out
//               </Link>
//             </li>
//           </div>
//         </div>
//         <div id="main-container">
//           <div className="searchbox">
//             <div>
//               <img src={searchIcon} alt="Search Icon" />
//               <input type="text" placeholder="Search product..." />
//             </div>
//             <div>
//               <img src={filterIcon} alt="Filter Icon" />
//               <p>Filters</p>
//             </div>
//           </div>
//           <div>
//             <table id="productTable">
//               <thead>
//                 <tr>
//                   <th className="square-box">
//                     <input type="checkbox" className="checkbox" />
//                   </th>
//                   <th>Products</th>
//                   <th>Price</th>
//                   <th>Date Added</th>
//                   <th>Total sales</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="row" id="row1">
//                   <td>
//                     <input type="checkbox" className="checkbox" />
//                   </td>
//                   <td>
//                     <img src={storeImg1} alt="Product" />
//                     <p>Fresh Tomato</p>
//                   </td>
//                   <td># 5,000</td>
//                   <td>29 December 2022</td>
//                   <td># 35,000</td>
//                   <td style={{ color: "#EC3751" }}>Out of Stock</td>
//                   <td>
//                     <img src={pencilIcon} alt="Edit" />
//                     <img
//                       src={deleteIcon}
//                       alt="Delete"
//                       className="deleteIcon"
//                       data-row-id="row1"
//                     />
//                   </td>
//                 </tr>
//                 <tr className="row" id="row2">
//                   <td>
//                     <input type="checkbox" className="checkbox" />
//                   </td>
//                   <td>
//                     <img src={storeImg2} alt="Product" />
//                     <p>Lettuce</p>
//                   </td>
//                   <td># 5,000</td>
//                   <td>29 December 2022</td>
//                   <td># 5,000</td>
//                   <td style={{ color: "#DDBB32" }}>In stock</td>
//                   <td>
//                     <img src={pencilIcon} alt="Edit" />
//                     <img
//                       src={deleteIcon}
//                       alt="Delete"
//                       className="deleteIcon"
//                       data-row-id="row2"
//                     />
//                   </td>
//                 </tr>
//                 <tr className="row" id="row3">
//                   <td>
//                     <input type="checkbox" className="checkbox" />
//                   </td>
//                   <td>
//                     <img src={storeImg3} alt="Product" />
//                     <p>Broccoli</p>
//                   </td>
//                   <td># 5,000</td>
//                   <td>29 December 2022</td>
//                   <td># 50,000</td>
//                   <td style={{ color: "#EC3751" }}>Out of Stock</td>
//                   <td>
//                     <img src={pencilIcon} alt="Edit" />
//                     <img
//                       src={deleteIcon}
//                       alt="Delete"
//                       className="deleteIcon"
//                       data-row-id="row3"
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </aside>

//       {popupVisible && (
//         <div className="container-upload" id="popupx">
//           <div className="close" onClick={togglePopup}>
//             X
//           </div>
//           <h2>Upload New Product</h2>
//           <h6>Tips</h6>
//           <p>Ensure you upload high quality pictures of your products</p>
//           <div>
//             <div className="img">
//               <img src={pictureIcon} alt="Picture Icon" />
//             </div>
//             <p className="drag">
//               Drag and drop image here, or click add image Add Image
//             </p>
//             <button className="add-image">Add Image</button>
//           </div>
//           <div>
//             <h2>General Information</h2>
//             <p>Product Name</p>
//             <input
//               type="text"
//               name="productName"
//               placeholder="Type product name here. . ."
//             />
//             <p>Description</p>
//             <input
//               type="text"
//               name="description"
//               placeholder="Type product description here. . ."
//             />
//             <label htmlFor="price">Price</label>
//             <input
//               type="text"
//               name="price"
//               id="price"
//               placeholder="$ Type price here. . ."
//             />
//           </div>
//           <div className="button-option">
//             <button onClick={togglePopup}>X Cancel</button>
//             <button>+ Add Product</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
