import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ProductModal from '../ProductModal/ProductModal';
import productsData from '../../data/products.json';
import './HomePage.scss';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = productsData.products.filter(product => !product.sold).slice(0, 3);

  const categories = [
    {
      title: "Combat Equipment",
      image: "../../../public/images/hlm1_01.jpg",
      description: "Authentic combat-used equipment including helmets and field gear"
    },
    {
      title: "Military Documents",
      image: "../../../public/images/fd_01.jpg",
      description: "Original wartime documentation and manuals"
    },
    {
      title: "Personal Items",
      image: "../../../public/images/fk_01.jpg",
      description: "Personal equipment and everyday military items"
    }
  ];

  const testimonials = [
    {
      text: "Exceptional authenticity and detailed documentation for each item.",
      author: "James W., Military Historian"
    },
    {
      text: "The most reliable source for genuine WWII artifacts I've found.",
      author: "Michael R., Collector"
    },
    {
      text: "Their expertise in authentication is unmatched.",
      author: "Dr. Sarah L., Museum Curator"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1>OSTEN RELICS</h1>
          <p>Preserving History Through Authentic World War II Military Artifacts</p>
          <Link to="/catalog" className="home__cta-button">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home__section">
        <div className="home__section-header">
          <h2>Featured Artifacts</h2>
          <p>Recently Added to Our Collection</p>
        </div>
        <div className="home__featured-grid">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="home__featured-item"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="home__featured-image">
                <img src={product.mainImage} alt={product.title} />
                <div className="home__featured-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description.split('.')[0]}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="home__section home__categories">
        <div className="home__section-header">
          <h2>Our Collection</h2>
          <p>Explore Our Categories</p>
        </div>
        <div className="home__categories-grid">
          {categories.map((category, index) => (
            <Link to="/catalog" key={index} className="home__category-card">
              <div className="home__category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="home__category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="home__section home__about-preview">
        <div className="home__about-content">
          <h2>Expert Authentication</h2>
          <p>Every artifact in our collection undergoes thorough authentication by military historians and experts. We specialize in items from the Kharkov region, each telling its own unique story of World War II.</p>
          <Link to="/about" className="home__link-button">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home__section home__testimonials">
        <div className="home__section-header">
          <h2>Collector Testimonials</h2>
          <p>What Our Clients Say</p>
        </div>
        <div className="home__testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="home__testimonial-card">
              <p>"{testimonial.text}"</p>
              <span>— {testimonial.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isOpen={true}
          initialSlide={0}
        />
      )}
    </div>
  );
};

export default HomePage;
