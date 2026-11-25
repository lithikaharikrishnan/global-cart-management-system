
import { Search } from "lucide-react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-box">
      <Search size={18} />

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
}

export default SearchBar;
