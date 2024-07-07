import storeImg1 from "../../image/storeimg1.png";
import storeImg2 from "../../image/storeimg2.png";
import storeImg3 from "../../image/storeimg3.png";
import pencilIcon from "../../image/pencilicon.png";
import deleteIcon from "../../image/deleteicons.png";
import FilterButton from "../filter/FilterButton";
import SearchInput from "../searchinput/SearchInput";
import "./Maincontent.css";

const MainContent = () => {
  return (
    <div id="main-container">
      <div className="searchbox">
        <SearchInput />
        <FilterButton />
      </div>
      <div>
        <table id="productTable">
          <thead>
            <tr>
              <th className="square-box">
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Products</th>
              <th>Price</th>
              <th>Date Added</th>
              <th>Total sales</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>
                <input type="checkbox" className="checkbox" />
              </td>
              <td>
                <img src={storeImg1} alt="Fresh Tomato" />
                <p>Fresh Tomato</p>
              </td>
              <td># 5,000</td>
              <td>29 December 2022</td>
              <td># 35,000</td>
              <td style={{ color: "#EC3751" }}>Out of Stock</td>
              <td>
                <img src={pencilIcon} alt="Edit" />
                <img src={deleteIcon} alt="Delete" className="deleteIcon" />
              </td>
            </tr>
            <tr className="row">
              <td>
                <input type="checkbox" className="checkbox" />
              </td>
              <td>
                <img src={storeImg2} alt="Lettuce" />
                <p>Lettuce</p>
              </td>
              <td># 5,000</td>
              <td>29 December 2022</td>
              <td># 5,000</td>
              <td style={{ color: "#DDBB32" }}>In stock</td>
              <td>
                <img src={pencilIcon} alt="Edit" />
                <img src={deleteIcon} alt="Delete" className="deleteIcon" />
              </td>
            </tr>
            <tr className="row">
              <td>
                <input type="checkbox" className="checkbox" />
              </td>
              <td>
                <img src={storeImg3} alt="Broccoli" />
                <p>Broccoli</p>
              </td>
              <td># 5,000</td>
              <td>29 December 2022</td>
              <td># 50,000</td>
              <td style={{ color: "#EC3751" }}>Out of Stock</td>
              <td>
                <img src={pencilIcon} alt="Edit" />
                <img src={deleteIcon} alt="Delete" className="deleteIcon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
