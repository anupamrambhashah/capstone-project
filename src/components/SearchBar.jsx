import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ExpenseContext);

  return (
    <input
      type="text"
      placeholder=" Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        border: "none"
      }}
    />
  );
};

export default SearchBar;