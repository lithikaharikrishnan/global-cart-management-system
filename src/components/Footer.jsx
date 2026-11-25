
import {
  Camera,
  MessageCircle,
  Send,
  Mail,
  Heart,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="shop-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="/" className="logo">
            Shopora<span>.</span>
          </a>

          <p>
            Discover your everyday style with beautiful
            fashion and lifestyle essentials.
          </p>

          <div className="footer-socials">
            <a href="https://instagram.com" aria-label="Instagram">
              <Camera size={19} />
            </a>

            <a href="https://facebook.com" aria-label="Facebook">
              <MessageCircle size={19} />
            </a>

            <a href="https://twitter.com" aria-label="Twitter">
              <Send size={19} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#products">All Products</a>
          <a href="#products">Fashion</a>
          <a href="#products">Shoes</a>
          <a href="#products">Accessories</a>
        </div>

        <div className="footer-links">
          <h4>Customer Care</h4>
          <a href="#products">My Account</a>
          <a href="#products">Shopping Cart</a>
          <a href="#products">Wishlist</a>
          <a href="mailto:support@shopora.com">Contact Us</a>
        </div>

        <div className="footer-newsletter">
          <h4>Stay in Style</h4>
          <p>
            Get updates about new collections and special offers.
          </p>

          <div className="newsletter-box">
            <Mail size={18} />
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Shopora. All rights reserved.</p>

        <p>
          Made with <Heart size={14} fill="currentColor" /> for
          fashion lovers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
