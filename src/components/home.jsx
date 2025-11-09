import './home.css';
import React from 'react';

// --- (EDIT 1) ---
// Import your background image here.
// Make sure the path is correct relative to this Home.jsx file.
// For example, if your image is in 'src/assets/hero-bg.jpg':
// import HeroBackgroundImage from '../assets/hero-bg.jpg';

// Using a placeholder for now:
const HeroBackgroundImage = '/homeback.jpg';


// You can replace these with actual icons from a library like react-icons
const SearchIcon = () => '🔍';
const BedIcon = () => '🛏️';
const BathIcon = () => '🛁';
const SqftIcon = () => '🏠';

const Home = () => {
  return (
    <div className="home-page">
      {/* ------------------- */}
      {/* HERO SECTION        */}
      {/* ------------------- */}
      {/* This is the first thing users see. It needs a strong background image and a clear search bar. */}
      
      {/* --- (EDIT 2) --- */}
      {/* We add the 'style' prop to set the background image dynamically */}
      <header 
        className="hero-section" 
        style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Find Your Dream Home in MUMBAI!</h1>
          <p>We make finding the perfect property in the City of Dreams simple and stress-free.</p>
          
          <div className="search-bar">
            <input type="text" placeholder="Enter city, neighborhood, or zip code..." />
            <select>
              <option value="buy">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
            <select>
              <option value="">Price Range</option>
              <option value="0-500k">$0 - $500,000</option>
              <option value="500k-1m">$500,000 - $1M</option>
              <option value="1m+">$1M+</option>
            </select>
            <button className="btn btn-primary">
              <SearchIcon /> Search
            </button>
          </div>
        </div>
      </header>

      {/* ------------------- */}
      {/* FEATURED LISTINGS   */}
      {/* ------------------- */}
      {/* This section builds desire by showing off your best properties in a clean, card-based grid. */}
      <section className="featured-listings">
        <h2>Featured Properties</h2>
        <div className="listing-grid">
          {/* --- Property Card 1 --- */}
          <div className="property-card">
            <img src="/images/img1.jpg" alt="Luxury Sea View Apartment" />
            <div className="card-content">
              <div className="price">₹4 Cr</div>
              <h3>Luxury Sea View Apartment</h3>
              <p className="address">Malabar Hill, Mumbai</p>
              <div className="features">
                <span><BedIcon /> 4 Beds</span>
                <span><BathIcon /> 5 Baths</span>
                <span><SqftIcon /> 3,200 sqft</span>
              </div>
              <button className="btn btn-secondary">View Details</button>
            </div>
          </div>

          {/* --- Property Card 2 (Mumbai) --- */}
          <div className="property-card">
            <img src="/images/img2.jpg" alt="Modern Duplex Penthouse" />
            <div className="card-content">
              <div className="price">₹8.5 Lakh</div>
              <h3>Modern Duplex Penthouse</h3>
              <p className="address">Bandra Kurla Complex (BKC), Mumbai</p>
              <div className="features">
                <span><BedIcon /> 3 Beds</span>
                <span><BathIcon /> 4 Baths</span>
                <span><SqftIcon /> 2,800 sqft</span>
              </div>
              <button className="btn btn-secondary">View Details</button>
            </div>
          </div>

          {/* --- Property Card 3 (Mumbai) --- */}
          <div className="property-card">
            <img src="/images/img3.jpg" alt="Sky Villa with Ocean View" />
            <div className="card-content">
              <div className="price">₹5.8 Cr</div>
              <h3>Sky Villa with Ocean View</h3>
              <p className="address">Worli Sea Face, Mumbai</p>
              <div className="features">
                <span><BedIcon /> 4 Beds</span>
                <span><BathIcon /> 4 Baths</span>
                <span><SqftIcon /> 3,000 sqft</span>
              </div>
              <button className="btn btn-secondary">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- */}
      {/* VALUE PROPOSITION   */}
      {/* ------------------- */}
      {/* This tells users *why* they should use your service. Keep it to 3 simple steps. */}
      <section className="value-prop">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <span>1</span>
            <h3>Search Properties</h3>
            <p>Use our advanced search to find properties by location, price, and more.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Schedule Tours</h3>
            <p>Book virtual or in-person tours directly with our expert agents.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Close the Deal</h3>
            <p>We'll guide you through every step of the buying or renting process.</p>
          </div>
        </div>
      </section>

      {/* ------------------- */}
      {/* CTA BANNER          */}
      {/* ------------------- */}
      {/* A final, clear call-to-action to capture leads (e.g., potential sellers or buyers). */}
      <section className="cta-banner">
        <h2>Ready to Sell Your Home?</h2>
        <p>Let our team of experts help you get the best price for your property.</p>
        <button className="btn btn-light">Book a Meeting with our Agent!</button>
      </section>
    </div>
  );
};

export default Home;