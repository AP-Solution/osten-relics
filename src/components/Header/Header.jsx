import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>Osten Relics</h1>
        </Link>

        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/catalog" 
            className={`header__nav-link ${location.pathname === '/catalog' ? 'active' : ''}`}
          >
            Catalog
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/cart" 
            className="header__cart"
            aria-label="Shopping Cart"
          >
            <FaShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="header__cart-count">{cartItems.length}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
