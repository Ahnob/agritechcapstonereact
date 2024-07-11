import FilterButton from "../components/filter/FilterButton";
import SearchInput from "../components/searchinput/SearchInput";
import Cart from "../assets/cart_icon.svg";
import mystore from "../assets/mystore-icon.svg";
import "./MarketplaceDashboard.css";

function MarketplaceDashboard() {
  return (
    <div className="top-container">
      <div>
        <p>First flex</p>
      </div>
      <div>
        <div className="top-container-marketplace">
          <div className="mystore-container">
            <img src={mystore} alt="mystore-icon" />
            <p>Market place</p>
          </div>
          <button className="cart-container">
            <img src={Cart} alt="cart-icon" />
            <p>My Store</p>
          </button>
        </div>
        <div className="second-container-marketplace">
          <SearchInput />
          <FilterButton />
        </div>
      </div>
    </div>
  );
}

export default MarketplaceDashboard;
