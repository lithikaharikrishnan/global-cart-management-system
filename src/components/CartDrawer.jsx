
import { Drawer, Empty } from "antd";
import { ShoppingBag } from "lucide-react";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartDrawer({
  open,
  onClose,
  items,
  onQuantityChange,
  onRemove,
}) {
  return (
    <Drawer
      title={
        <div className="cart-drawer-title">
          <ShoppingBag size={21} />
          <span>Shopping Cart</span>
          <span className="cart-item-count">
            {items.reduce(
              (total, item) => total + item.quantity,
              0
            )}{" "}
            Items
          </span>
        </div>
      }
      placement="right"
      open={open}
      onClose={onClose}
      size="large"
      destroyOnHidden={false}
    >
      <div className="cart-drawer-content">
        {items.length > 0 ? (
          <>
            <div className="cart-items-list">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={onQuantityChange}
                  onRemove={onRemove}
                />
              ))}
            </div>

            <CartSummary items={items} />
          </>
        ) : (
          <div className="empty-cart">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Your shopping cart is empty"
            >
              <p>Discover something beautiful at Shopora!</p>
            </Empty>
          </div>
        )}
      </div>
    </Drawer>
  );
}

export default CartDrawer;
