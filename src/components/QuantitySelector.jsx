
import { Minus, Plus } from "lucide-react";

function QuantitySelector({ quantity, onQuantityChange }) {
  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-selector">
      <button
        onClick={decrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>

      <span>{quantity}</span>

      <button
        onClick={increase}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;
