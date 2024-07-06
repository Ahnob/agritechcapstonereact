import filtericon from "../../assets/filter-icon.svg";
import "./Filter.css"
function FilterButton() {
  return (
    <div>
      <image src={filtericon} alt="filter-icon" />
      <p>Filters</p>
    </div>
  );
}

export default FilterButton;
