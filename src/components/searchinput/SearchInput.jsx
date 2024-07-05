import searchicon from "../../assets/search-icon.svg";
function SearchInput() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search product"
        className="search-input"
      />
      <img src={searchicon} alt="search icon" className="search-icon" />
    </div>
  );
}

export default SearchInput;
