
import { Select } from "antd";

function SortDropdown({ sortOption, onSortChange }) {
  const options = [
    { value: "default", label: "Recommended" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" },
  ];

  return (
    <div className="sort-dropdown">
      <Select
        value={sortOption}
        onChange={onSortChange}
        options={options}
        placeholder="Sort products"
        style={{ width: 210 }}
      />
    </div>
  );
}

export default SortDropdown;
