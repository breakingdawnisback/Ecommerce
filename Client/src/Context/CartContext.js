import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();
const API_URL = 'http://localhost:5000/api/cart'; // Your backend server URL

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // State to control the "Item Added" modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedItem, setAddedItem] = useState(null);

    // Helper to get the cart ID from localStorage
    const getCartId = () => {
        return localStorage.getItem('ralphLaurenCartId');
    };

    // Fetches the cart from the backend or creates a new one on initial load
    const fetchCart = async () => {
        setLoading(true);
        try {
            const cartId = getCartId();
            // If we have a cartId, fetch that cart, otherwise the API will create a new one
            const url = cartId ? `${API_URL}/${cartId}` : API_URL;
            const { data } = await axios.get(url);
            
            // If a new cart was created by the server, save its ID
            if (!cartId) {
                localStorage.setItem('ralphLaurenCartId', data._id);
            }
            setCart(data);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
            // If the cart ID is invalid (e.g., deleted from DB), clear it and refetch
            localStorage.removeItem('ralphLaurenCartId');
        } finally {
            setLoading(false);
        }
    };
    
    // Run fetchCart once when the application loads
    useEffect(() => {
        fetchCart();
    }, []);

    // --- Modal Control Functions ---
    const closeModal = () => {
        setIsModalOpen(false);
        setAddedItem(null); // Clear the item from state
    };

    const openModalWithItem = (item) => {
        setAddedItem(item);
        setIsModalOpen(true);
        // Automatically close the modal after 10 seconds as per the requirement
        setTimeout(() => {
            closeModal();
        }, 10000);
    };

    // --- Cart Action Functions ---

    const addToCart = async (product, selections) => {
        const cartId = getCartId();
        if (!cartId || !product) return;

        const itemToAdd = {
            productId: product._id, // Assuming your product object has an _id
            name: product.name,
            image: product.images[0], // Use the first product image for cart/modal
            price: product.price,
            color: selections.color,
            size: selections.size,
            quantity: 1, // Always add one at a time from PDP
            brand: product.brand
        };

        try {
            const { data: updatedCart } = await axios.post(`${API_URL}/${cartId}/items`, itemToAdd);
            setCart(updatedCart); // Update the global cart state
            openModalWithItem(itemToAdd); // Open the modal with the new item's details
        } catch (error) {
            console.error("Failed to add item to cart:", error);
            // You can add user-facing error handling here
        }
    };
    
    const updateQuantity = async (itemId, quantity) => {
        const cartId = getCartId();
        if (!cartId || quantity < 1) return;
        try {
            const { data } = await axios.put(`${API_URL}/${cartId}/items/${itemId}`, { quantity });
            setCart(data);
        } catch (error) {
            console.error("Failed to update quantity:", error);
        }
    };
    
    const removeFromCart = async (itemId) => {
        const cartId = getCartId();
        if (!cartId) return;
        try {
            const { data } = await axios.delete(`${API_URL}/${cartId}/items/${itemId}`);
            setCart(data);
        } catch (error) {
            console.error("Failed to remove item:", error);
        }
    };


    // The value provided to all children components
    const value = {
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        isModalOpen,
        addedItem,
        closeModal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;