import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductGallery from '../component/productDetail/ProductGallery';
import ProductInfo from '../component/productDetail/ProductInfo';
import CartContext from '../Context/CartContext'; // <-- Import CartContext
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id: productId } = useParams(); // Get product ID from the URL, e.g., "60d0fe4f5311236168a109ca"
  const { addToCart } = useContext(CartContext); // Get the addToCart function from our global context

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // State to track the user's size and color selections
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
        setProduct(data);
        // Automatically select the first color available as the default
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0].name);
        }
      } catch (err) {
        setError('Product not found. Please try again later.');
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Re-run this effect if the product ID in the URL changes
  
  // This function is triggered when the "Add to Bag" button is clicked
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size to continue.'); // Basic validation
      return;
    }
    
    const selections = {
      size: selectedSize,
      color: selectedColor,
    };
    
    // Call the global addToCart function with the full product object and the user's selections
    addToCart(product, selections);
  };

  // --- Render Logic ---
  if (loading) {
    return <div className="pdp-container"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="pdp-container"><p style={{color: 'red', textAlign: 'center'}}>{error}</p></div>;
  }

  if (!product) {
    return null; // Don't render anything if the product isn't loaded yet
  }

  return (
    <div className="pdp-container">
      <ProductGallery images={product.images} />
      <ProductInfo 
        product={product}
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
        onAddToCart={handleAddToCart} // Pass the handler down as a prop
      />
    </div>
  );
};

export default ProductDetailPage;