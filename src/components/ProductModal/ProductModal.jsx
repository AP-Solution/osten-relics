import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductModal.scss';

const ProductModal = ({ product, onClose, initialSlide = 0, isOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);

  // Generate product images array
  const productImages = Array.from(
    { length: product.totalImages },
    (_, i) => ({
      src: `/images/${product.imagePrefix}_${String(i + 1).padStart(2, '0')}.jpg`
    })
  );

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    initialSlide,
    asNavFor: navSlider,
    beforeChange: (current, next) => {
      if (navSlider) {
        navSlider.slickGoTo(next);
      }
    }
  };

  const navSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    centerMode: false,
    initialSlide,
    asNavFor: mainSlider,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      if (mainSlider) {
        mainSlider.slickGoTo(next);
      }
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal__content" onClick={e => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose}>×</button>

        <div className="product-modal__gallery">
          <div className="product-modal__main-slider">
            <Slider ref={slider => setMainSlider(slider)} {...mainSliderSettings}>
              {productImages.map((image, index) => (
                <div key={index} className="product-modal__main-slide">
                  <img src={image.src} alt={`${product.title} - View ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="product-modal__nav-slider">
            <Slider ref={slider => setNavSlider(slider)} {...navSliderSettings}>
              {productImages.map((image, index) => (
                <div key={index} className="product-modal__nav-slide">
                  <img src={image.src} alt={`${product.title} - Thumbnail ${index + 1}`} />
                  <span className="product-modal__nav-number">{index + 1}/{product.totalImages}</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="product-modal__info">
          <h2 className="product-modal__title">{product.title}</h2>
          <div className="product-modal__description">
            {product.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="product-modal__footer">
            {product.sold ? (
              <div className="product-modal__sold">Sold</div>
            ) : (
              <div className="product-modal__actions">
                <div className="product-modal__price">${product.price}</div>
                <button 
                  className={`product-modal__cart-button ${isInCart ? 'product-modal__cart-button--remove' : ''}`}
                  onClick={() => {
                    if (isInCart) {
                      dispatch(removeFromCart(product.id));
                    } else {
                      dispatch(addToCart(product));
                    }
                  }}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
