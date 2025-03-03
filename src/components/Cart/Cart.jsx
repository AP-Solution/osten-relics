import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import './Cart.scss';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return typeof price === 'number' 
      ? `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
      : 'Price on request';
  };

  const handleRemoveItem = (id, title) => {
    if (window.confirm(`Are you sure you want to remove "${title}" from your cart?`)) {
      dispatch(removeFromCart(id));
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart? This action cannot be undone.')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart cart--empty">
        <div className="cart__empty-content">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/catalog" className="cart__continue-shopping">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <h1>Shopping Cart</h1>
        <button 
          className="cart__clear-btn"
          onClick={handleClearCart}
          aria-label="Clear cart"
        >
          Clear Cart
        </button>
      </div>

      <div className="cart__content">
        <div className="cart__items">
          {items.map((item) => (
            <div key={item.id} className="cart__item">
              <div className="cart__item-image">
                <img src={item.mainImage} alt={item.title} />
              </div>
              
              <div className="cart__item-details">
                <h3>{item.title}</h3>
                <div className="cart__item-price">
                  {formatPrice(item.price)}
                </div>
              </div>

              <button
                className="cart__remove-btn"
                onClick={() => handleRemoveItem(item.id, item.title)}
                aria-label={`Remove ${item.title} from cart`}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="cart__summary">
          <h2>Order Summary</h2>
          
          <div className="cart__summary-details">
            <div className="cart__summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="cart__summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart__summary-row cart__summary-row--total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <div className="cart__actions">
            <button className="cart__checkout-btn">
              Proceed to Checkout
            </button>
            <Link to="/catalog" className="cart__continue-shopping">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>

          <div className="cart__info">
            <p>Secure Checkout</p>
            <p>All transactions are secure and encrypted.</p>
            <p>Each item in our collection is unique and authentic.</p>
            <p>Please note that shipping costs will be calculated during checkout based on your location.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
