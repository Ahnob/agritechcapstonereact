import filtericon from "../../assets/filter-icon.svg";

function FilterButton() {
  return (
    <div>
      <image src={filtericon} alt="filter-icon" />
      <p>Filters</p>
    </div>
  );
}

export default FilterButton;
