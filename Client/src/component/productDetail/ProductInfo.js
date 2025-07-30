// src/component/productDetail/ProductInfo.js
import React from 'react';
import './ProductInfo.css';

// Receive the new props: selectedSize, onSizeSelect, and onAddToCart
const ProductInfo = ({ product, selectedSize, onSizeSelect, onAddToCart }) => {
  const isSizeSelected = (size) => selectedSize === size;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(product.price);

  return (
    <aside className="product-info">
      <p className="pdp-brand">{product.brand}</p>
      <h1 className="pdp-name">{product.name}</h1>
      <p className="pdp-price">{formattedPrice}</p>
      
      <div className="pdp-selector-group">
        <div className="selector-label">
          <span>Size:</span>
          <span>{selectedSize}</span> {/* Display the selected size from props */}
        </div>
        <div className="size-selector">
          {product.sizes.map(size => (
            <button 
              key={size}
              className={`size-option ${isSizeSelected(size) ? 'selected' : ''}`}
              onClick={() => onSizeSelect(size)} // Call the function passed from the parent
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button 
        className="add-to-bag-button"
        onClick={onAddToCart} // Call the handler passed from the parent
        disabled={!selectedSize} // Disable the button if no size is selected
      >
        Add to Bag
      </button>

      <details className="pdp-details-accordion" open>
        <summary>Description & Details</summary>
        <div className="accordion-content">
          <p>{product.description || 'Default description here...'}</p>
          {product.details && (
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </details>
    </aside>
  );
};

export default ProductInfo;