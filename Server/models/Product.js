// server/models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true }, // <-- ADD THIS FIELD
  price: { type: Number, required: true },
  images: [{ type: String }],
  colors: [{ // <-- UPDATE THIS to be an array of objects
    name: String, 
    swatch: String, // e.g., a hex code like '#0000FF'
  }],
  sizes: [{ type: String }],
  isNewArrival: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
export default Product;