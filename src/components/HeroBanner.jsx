
import { ArrowRight, Sparkles } from "lucide-react";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-tag">
          <Sparkles size={16} />
          New Season Collection
        </span>

        <h1>
          Find Your
          <br />
          <span>Everyday Style</span>
        </h1>

        <p>
          Discover beautiful fashion, accessories and
          lifestyle essentials made for you.
        </p>

        <a href="#products" className="hero-button">
          Explore Collection
          <ArrowRight size={18} />
        </a>

        <div className="hero-stats">
          <div>
            <strong>500+</strong>
            <span>Products</span>
          </div>

          <div>
            <strong>4.8/5</strong>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
          alt="Fashion collection"
        />

        <div className="hero-floating-card">
          <span>✨</span>
          <div>
            <strong>Fresh Styles</strong>
            <p>Made for your vibe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
