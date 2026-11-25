
import { ShoppingCart } from "lucide-react";
import WishlistButton from "./WishlistButton";
import useWishlist from "../context/useWishlist";

function ProductCard({ product, onAddToCart, onProductClick }) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => onProductClick(product)}
          style={{ cursor: "pointer" }}
        />

        <WishlistButton
          isWishlisted={isWishlisted(product.id)}
          onToggle={() => toggleWishlist(product)}
        />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3
          onClick={() => onProductClick(product)}
          style={{ cursor: "pointer" }}
        >
          {product.name}
        </h3>

        <div className="product-colors">
          {product.colors?.map((color, index) => (
            <span
              key={index}
              className="product-color-dot"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="product-bottom">
          <strong className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          <span className="product-rating">
            ★ {product.rating}
          </span>
        </div>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
