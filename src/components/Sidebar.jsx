
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  ShoppingCart,
  UserRound,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Products", icon: ShoppingBag },
  { label: "Wishlist", icon: Heart },
  { label: "My Cart", icon: ShoppingCart },
  { label: "My Account", icon: UserRound },
  { label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="shop-sidebar">
      <h3>My Shopora</h3>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a href="#" className="sidebar-link" key={item.label}>
              <Icon size={19} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
