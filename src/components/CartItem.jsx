
import { Trash2 } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

function CartItem({ item, onQuantityChange, onRemove }) {
  const selectedVariant = item.selectedVariant;

  return (
    <div className="cart-item">
      <img
        src={selectedVariant?.image || item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>{item.category}</p>

        {selectedVariant && (
          <div className="cart-selected-color">
            <span
              className="cart-color-dot"
              style={{
                backgroundColor: selectedVariant.color,
              }}
            />
            <span>
              Color: {selectedVariant.name}
            </span>
          </div>
        )}

        <strong>
          ₹{item.price.toLocaleString("en-IN")}
        </strong>

        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(quantity) =>
            onQuantityChange(item.id, quantity)
          }
        />
      </div>

      <button
        className="remove-cart-item"
        onClick={() => onRemove(item.id)}
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default CartItem;
