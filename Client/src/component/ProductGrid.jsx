import React from 'react';
import ProductCard from './products/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
