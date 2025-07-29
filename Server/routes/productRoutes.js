import express from 'express';
const router = express.Router();
import { getProducts } from '../controllers/productController.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts);

export default router;
