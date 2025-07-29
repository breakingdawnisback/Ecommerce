// src/component/productDetail/ProductInfo.js
import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 2,
  }).format(product.price);

  return (
    <aside className="product-info">
      <p className="pdp-brand">{product.brand}</p>
      <h1 className="pdp-name">{product.name}</h1>
      <p className="pdp-price">{formattedPrice}</p>
      
      <div className="pdp-selector-group">
        <div className="selector-label">
          <span>Size:</span>
          <span>{selectedSize}</span>
        </div>
        <div className="size-selector">
          {product.sizes.map(size => (
            <button 
              key={size}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="add-to-bag-button">Add to Bag</button>

      <details className="pdp-details-accordion" open>
        <summary>Description & Details</summary>
        <div className="accordion-content">
          <p>{product.description}</p>
          <ul>
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </details>
    </aside>
  );
};

export default ProductInfo;