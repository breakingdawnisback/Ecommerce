import Cart from '../models/Cart.js';
import mongoose from 'mongoose';

const { Types } = mongoose;

// Helper to find or create a cart
const findOrCreateCart = async (cartId) => {
    if (cartId && Types.ObjectId.isValid(cartId)) {
        const cart = await Cart.findById(cartId);
        if (cart) return cart;
    }
    return new Cart({ items: [] });
};

// GET /api/cart/:cartId?
export const getCart = async (req, res) => {
    try {
        const cart = await findOrCreateCart(req.params.cartId);
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server Error: Could not get cart.' });
    }
};

// POST /api/cart/:cartId/items
export const addItemToCart = async (req, res) => {
    const { productId, name, image, price, color, size, quantity } = req.body;

    try {
        const cart = await findOrCreateCart(req.params.cartId);
        
        const existingItem = cart.items.find(
            (item) => item.productId === productId && item.color === color && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, name, image, price, color, size, quantity });
        }

        const updatedCart = await cart.save();
        res.status(201).json(updatedCart);
    } catch (err) {
        res.status(500).json({ message: 'Server Error: Could not add item to cart.' });
    }
};

// PUT /api/cart/:cartId/items/:itemId
export const updateCartItem = async (req, res) => {
    const { quantity } = req.body;
    
    try {
        const cart = await Cart.findById(req.params.cartId);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const item = cart.items.id(req.params.itemId);
        if (!item) return res.status(404).json({ message: 'Item not found in cart' });

        item.quantity = Number(quantity);
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } catch (err) {
        res.status(500).json({ message: 'Server Error: Could not update item.' });
    }
};

// DELETE /api/cart/:cartId/items/:itemId
export const removeCartItem = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cartId);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        
        cart.items.pull({ _id: req.params.itemId });
        
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } catch (err) {
        res.status(500).json({ message: 'Server Error: Could not remove item.' });
    }
};