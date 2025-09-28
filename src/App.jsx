import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductList onHomeClick={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <div className={`App ${currentPage === 'home' ? 'home-page' : ''}`}>
            {/* 🌿 HEADER / NAVBAR */}
            <div className="header">
              <div className="navbar">
                <div className="tag">
                  <div className="luxury">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                      alt="Paradise Nursery Logo"
                    />
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage('home');
                      }}
                    >
                      <div>
                        <h3>Paradise Nursery</h3>
                        <i>Where Green Meets Serenity</i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="nav-links">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('products');
                    }}
                  >
                    Plants
                  </a>
                </div>
              </div>
            </div>

            {/* 🏡 HERO SECTION */}
            <div className="main-content">
              <div className="hero-section">
                <h1>Welcome to Paradise Nursery</h1>
                <p>Discover the perfect plants to bring life and beauty to your space</p>
                <button
                  className="get-started-button"
                  onClick={() => setCurrentPage('products')}
                >
                  Get Started
                </button>
              </div>

              {/* ✨ FEATURES SECTION */}
              <div className="features-section">
                <div className="feature-card">
                  <h3>Air Purifying Plants</h3>
                  <p>Improve your indoor air quality naturally</p>
                  <button
                    className="air-purifying-button"
                    onClick={() => setCurrentPage('products')}
                  >
                    Air Purifying Plants
                  </button>
                </div>

                <div className="feature-card">
                  <h3>Aromatic Plants</h3>
                  <p>Enjoy natural fragrances throughout your home</p>
                  <button
                    className="aromatic-button"
                    onClick={() => setCurrentPage('products')}
                  >
                    Discover Aromatic
                  </button>
                </div>

                <div className="feature-card">
                  <h3>Low Maintenance</h3>
                  <p>Perfect for beginners and busy plant lovers</p>
                  <button
                    className="low-maintenance-button"
                    onClick={() => setCurrentPage('products')}
                  >
                    Low Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderPage();
}

export default App;
