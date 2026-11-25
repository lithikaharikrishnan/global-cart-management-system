
import { useMemo, useState } from "react";
import products from "../data/products";
import useCart from "../context/useCart";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

function ProductGrid({ onProductClick }) {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchTerm, sortOption]);

  return (
    <section className="product-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Explore Our Products</h2>
          <p>Find your style from our latest collection.</p>
        </div>
        <span>{filteredProducts.length} Products</span>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="product-toolbar">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <SortDropdown
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </section>
  );
}

export default ProductGrid;
