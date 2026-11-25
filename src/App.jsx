
import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

import useCart from "./context/useCart";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />

      <main className="container">
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack={handleBack}
          />
        ) : (
          <>
            <HeroBanner />

            <ProductGrid
              onProductClick={handleProductClick}
            />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
