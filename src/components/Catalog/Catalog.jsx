import React, { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';
import productsData from '../../data/products.json';
import './Catalog.scss';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="catalog">
      <div className="catalog__header">
        <h1 className="catalog__title">Military Collectibles Catalog</h1>
        <p className="catalog__subtitle">Authentic World War II Artifacts</p>
      </div>

      <div className="catalog__grid">
        {productsData.products.map((product) => (
          <div key={product.id} className="catalog__item">
            <div 
              className="catalog__product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="catalog__product-image">
                <img src={product.mainImage} alt={product.title} />
                {product.sold && (
                  <div className="catalog__product-sold">
                    <span>Sold</span>
                  </div>
                )}
                <div className="catalog__product-images-count">
                  <span>{product.totalImages} images</span>
                </div>
              </div>
              <div className="catalog__product-info">
                <h3>{product.title}</h3>
                <p className="catalog__product-condition">
                  {product.description.split('.')[0]}
                </p>
                <button className="catalog__product-details">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default Catalog;
