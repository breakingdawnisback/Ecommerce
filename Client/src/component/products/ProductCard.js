// src/components/ProductCard.jsx
import { HeartIcon } from '../common/Icons';
import'./ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = ({ product }) => {
  // Simple price formatter
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(product.price);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <a href={`/product/${product._id}`}>
          <img src={product.images[0]} alt={product.name} className="product-image primary" />
          {product.images[1] && <img src={product.images[1]} alt={product.name} className="product-image secondary" />}
        </a>
        <button className="wishlist-button"><HeartIcon /></button>
        <div className="quick-shop-overlay">
          <button className="quick-shop-button">Quick shop</button>
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-name"><a href={`/product/${product._id}`}>{product.name}</a></h3>
        <p className="product-price">{formattedPrice}</p>
        {product.colorsAvailable && (
          <div className="product-colors">
            {product.colorsAvailable} {product.colorsAvailable > 1 ? 'colors' : 'color'} available
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;