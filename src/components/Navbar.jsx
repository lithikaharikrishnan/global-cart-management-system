
import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Heart,
  UserRound,
} from "lucide-react";

import useCart from "../context/useCart";
import useWishlist from "../context/useWishlist";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";

function Navbar() {
  const {
    cartItems,
    cartCount,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const { wishlistItems } = useWishlist();

  const [cartOpen, setCartOpen] = useState(false);

  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <>
      <header className="shop-navbar">
        <div className="container nav-content">
          <a href="/" className="logo">
            Shopora<span>.</span>
          </a>

          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search fashion, bags, shoes..."
            />
          </div>

          <div className="nav-actions">
            <ThemeToggle />

            <button
              className="icon-button"
              onClick={() => setWishlistOpen(true)}
              aria-label="Open Wishlist"
              title="Wishlist"
            >
              <Heart size={20} />
              <span>{wishlistItems.length}</span>
            </button>

            <button
              className="icon-button"
              aria-label="Account"
              title="Account"
            >
              <UserRound size={20} />
            </button>

            <button
              className="cart-button"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQuantityChange={updateQuantity}
        onRemove={removeFromCart}
      />

      {wishlistOpen && (
        <div className="wishlist-overlay">
          <div className="wishlist-panel">
            <div className="wishlist-heading">
              <h3>My Wishlist</h3>

              <button
                className="icon-button"
                onClick={() => setWishlistOpen(false)}
              >
                ✕
              </button>
            </div>

            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item) => (
                <div
                  className="wishlist-product"
                  key={item.id}
                >
                  <img src={item.image} alt={item.name} />

                  <div>
                    <strong>{item.name}</strong>
                    <p>₹{item.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
