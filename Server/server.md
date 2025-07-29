
### **Phase 3 (Continued): Building the Products API**

Let's switch back to the `/server` directory.

#### **1. Create the Product Routes**

This file will define the API endpoints for fetching products.

Create `server/routes/productRoutes.js`:

```javascript
// server/routes/productRoutes.js
import express from 'express';
const router = express.Router();
import { getProducts } from '../controllers/productController.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts);

export default router;
```

#### **2. Create the Product Controller**

This file contains the logic that runs when the route is hit. It will fetch data from our MongoDB database.

Create `server/controllers/productController.js`:

```javascript
// server/controllers/productController.js
import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    // We can add filtering logic here later based on req.query
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getProducts };
```

#### **3. Connect the Routes in `server.js`**

Now, we tell our main Express app to use these new routes.

Update `server/server.js`:

```javascript
// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'; // <-- Import product routes

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the product routes
app.use('/api/products', productRoutes); // <-- Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
```

**Test the API:**
Restart your server (`npm run server` in the `/server` directory). Now, open your browser or a tool like Postman and go to `http://localhost:5000/api/products`. You should see a JSON array of the product data you seeded earlier!

Our backend is now serving product data. The next and final step for this page is to fetch this data in our React app and display it.

Ready to build the `FiltersPanel` and `ProductGrid` on the frontend?