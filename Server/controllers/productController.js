// server/controllers/productController.js
import Product from '../models/Product.js';

const getProducts = async (req, res) => {
  try {
    const { sortBy, subCategory, color } = req.query;

    // --- Build Filter Object ---
    const filter = {};
    if (subCategory) {
      // Decode URI component to handle spaces, e.g., "Polo%20Shirts" -> "Polo Shirts"
      filter.subCategory = decodeURIComponent(subCategory); 
    }
    if (color) {
      filter['colors.name'] = decodeURIComponent(color); // Query based on the name within the colors array
    }
    // We can add more filters here later (e.g., size, price range)

    // --- Build Sort Object ---
    let sortOptions = {};
    if (sortBy === 'price-low-high') sortOptions = { price: 1 };
    else if (sortBy === 'price-high-low') sortOptions = { price: -1 };
    else if (sortBy === 'new-arrivals') sortOptions = { createdAt: -1 };
    
    // --- Execute Query ---
    const products = await Product.find(filter).sort(sortOptions);

    res.json(products);
  } catch (error) {
    console.error(error); // Log the full error for debugging
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getProducts };