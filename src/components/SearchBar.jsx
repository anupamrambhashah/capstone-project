import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ExpenseContext);

  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-box"
    />
  );
};

export default SearchBar;