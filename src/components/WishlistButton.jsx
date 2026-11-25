
import { Heart } from "lucide-react";

function WishlistButton({ isWishlisted, onToggle }) {
  return (
    <button
      type="button"
      className={
        isWishlisted
          ? "wishlist-button wishlisted"
          : "wishlist-button"
      }
      onClick={onToggle}
      aria-label={
        isWishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      title={
        isWishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
    >
      <Heart
        size={18}
        fill={isWishlisted ? "currentColor" : "none"}
      />
    </button>
  );
}

export default WishlistButton;
