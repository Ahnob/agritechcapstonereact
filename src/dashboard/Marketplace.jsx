import FilterButton from "../components/filter/FilterButton";
import SearchInput from "../components/searchinput/SearchInput";
import Cart from "../assets/cart_icon.svg";

function MarketplaceDashboard() {
  return (
    <div>
      <div>
        <div>
          <img src={Cart} alt="cart-icon" />
          <p>Market place</p>
        </div>
      </div>

      <div>
        <SearchInput />
        <FilterButton />
      </div>
    </div>
  );
}

export default MarketplaceDashboard;
