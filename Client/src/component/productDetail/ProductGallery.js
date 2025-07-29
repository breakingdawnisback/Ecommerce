// src/component/productDetail/ProductGallery.js
import React, { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="thumbnail-list">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`thumbnail-item ${img === mainImage ? 'active' : ''}`}
            onMouseEnter={() => setMainImage(img)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="main-image-container">
        <img src={mainImage} alt="Main product view" className="main-image" />
      </div>
    </div>
  );
};

export default ProductGallery;