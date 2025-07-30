// server/routes/cartRoutes.js
import express from 'express';
const router = express.Router();
import {
    getCart,
    addItemToCart,
    updateCartItem,
    removeCartItem
} from '../models/cartController.js';

router.route('/:cartId?').get(getCart);
router.route('/:cartId/items').post(addItemToCart);
router.route('/:cartId/items/:itemId').put(updateCartItem).delete(removeCartItem);

export default router;