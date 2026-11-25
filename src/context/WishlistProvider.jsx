
import { useEffect, useState } from "react";
import WishlistContext from "./WishlistContext";

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem(
        "shopora-wishlist"
      );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "shopora-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    setWishlistItems((previousItems) => {
      const alreadyExists = previousItems.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return previousItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...previousItems, product];
    });
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
