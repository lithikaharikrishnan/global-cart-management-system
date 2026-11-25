
import { useState } from "react";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";

import useWishlist from "../context/useWishlist";

function ProductDetails({ product, onAddToCart, onBack }) {
  const variants = product.variants || [];

  const [selectedVariant, setSelectedVariant] = useState(
    variants[0] || {
      name: "Default",
      color: "#765582",
      image: product.image,
    }
  );

  const { isWishlisted, toggleWishlist } = useWishlist();

  if (!product) return null;

  return (
    <section className="product-details-page">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} />
        Back to Products
      </button>

      <div className="product-details-container">
        <div className="details-image">
          <img
            src={selectedVariant.image}
            alt={`${product.name} - ${selectedVariant.name}`}
          />
        </div>

        <div className="details-content">
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <div className="details-rating">
            <Star
              size={18}
              fill="#E9A23B"
              color="#E9A23B"
            />
            {product.rating} / 5
          </div>

          <h2 className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p className="details-description">
            Discover your perfect style with this premium
            collection from Shopora. Designed for comfort,
            quality and everyday elegance.
          </p>

          <div className="color-selection">
            <h3>Choose Your Color</h3>

            <p>
              Selected: <strong>{selectedVariant.name}</strong>
            </p>

            <div className="color-variant-list">
              {variants.map((variant) => (
                <button
                  key={variant.name}
                  type="button"
                  className={
                    selectedVariant.name === variant.name
                      ? "color-variant-thumb active"
                      : "color-variant-thumb"
                  }
                  onClick={() => setSelectedVariant(variant)}
                  title={variant.name}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                  />

                  <span
                    className="variant-color-dot"
                    style={{ backgroundColor: variant.color }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="details-actions">
            <button
              className="add-cart-button"
              onClick={() =>
                onAddToCart({
                  ...product,
                  selectedColor: selectedVariant.name,
                  selectedVariant,
                })
              }
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button
              className="wishlist-details-button"
              onClick={() => toggleWishlist(product)}
            >
              <Heart
                size={19}
                fill={
                  isWishlisted(product.id)
                    ? "currentColor"
                    : "none"
                }
              />

              {isWishlisted(product.id)
                ? "Wishlisted"
                : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
