// src/pages/ProductDetailPage.js
import React from 'react';
import './ProductDetailPage.css';
import ProductGallery from '../component/productDetail/ProductGallery';
import ProductInfo from '../component/productDetail/ProductInfo';
// We will create these components next
// import ProductGallery from '../component/productDetail/ProductGallery';
// import ProductInfo from '../component/productDetail/ProductInfo';

const ProductDetailPage = () => {
  // We'll fetch real product data here later. For now, let's use a sample.
  const sampleProduct = {
    _id: '123',
    name: 'Polo Bear Fleece Hoodie',
    price: 24700.00,
    brand: 'Polo Ralph Lauren',
    description: 'The iconic Polo Bear sports a preppy, layered look on this fleece hoodie.',
    details: [
      'Drawstring hood.',
      'Long sleeves with ribbed cuffs.',
      'Side on-seam pockets.',
      'Ribbed hem.',
      'Polo Bear and "Polo Bear by Ralph Lauren" script printed at the centre front.',
    ],
    images: [
      'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710980306001_alternate10?$rl_df_pdp_5_7_a$',
      'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710980306001_alternate1?$rl_df_pdp_5_7_a$',
      'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710980306001_lifestyle?$rl_df_pdp_5_7_a$',
      'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710980306001_alternate3?$rl_df_pdp_5_7_a$',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Fa25 Deckwash White Hrtg', swatch: '#f0efed' }]
  };

 return (
    <div className="pdp-container">
      <ProductGallery images={sampleProduct.images} />
      <ProductInfo product={sampleProduct} />
    </div>
  );
};

export default ProductDetailPage;