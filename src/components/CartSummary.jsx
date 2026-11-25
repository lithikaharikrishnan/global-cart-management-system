
function CartSummary({ items }) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString("en-IN")}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>
          {shipping === 0
            ? "Free"
            : `₹${shipping.toLocaleString("en-IN")}`}
        </span>
      </div>

      <div className="summary-row summary-total">
        <strong>Total</strong>
        <strong>₹{total.toLocaleString("en-IN")}</strong>
      </div>

      <button className="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
