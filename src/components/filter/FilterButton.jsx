import filtericon from "../../assets/filter-icon.svg";
import "./Filter.css";
function FilterButton() {
  return (
    <div>
      <button className="filterBtn">
        <img src={filtericon} alt="filter-icon" />

        <p>Filters</p>
      </button>
    </div>
  );
}

export default FilterButton;
