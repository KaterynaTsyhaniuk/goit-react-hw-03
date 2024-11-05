import css from "./SearchBox.module.css";

function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={css.searshBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css.searchInput}
      />
    </div>
  );
}

export default SearchBox;
