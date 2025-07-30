import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../cart/CartItems';
import OrderSummary from '../cart/OrderSummary';
import './CartPage.css';

// This is temporary data. We will replace this with data from our API.
const initialCartItems = [
  {
    id: '3616853598051',
    name: 'Custom Slim Fit Bear Mesh Polo Shirt',
    image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710973159001_lifestyle?$cartDesk$',
    color: 'Red Wine',
    size: 'S',
    styleNumber: '3616853598051',
    price: 20500.00,
    quantity: 1,
  },
  {
    id: '3616854906329',
    name: 'Custom Slim Fit 20th Anniversary T-Shirt',
    image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710P00093001_lifestyle?$cartDesk$',
    color: 'Classic Wine/newport Navy',
    size: 'M',
    styleNumber: '3616854906329',
    price: 12100.00,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);

  // Recalculate subtotal whenever the cartItems array changes
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  // Handler to update the quantity of an item
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handler to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-page-container">
      <div className="cart-actions-top">
        <div className="cart-left">
          <button className="button primary-button">Proceed to Checkout</button>
          <Link to="/" className="button-text">Continue Shopping</Link>
        </div>
        <div className="cart-right">
          <div className="cart-help">
            <p>Need assistance? <a href="/contactus">Email Us</a></p>
            <p>All Transactions are safe and secure. <a href="/security">SECURITY POLICY</a></p>
          </div>
        </div>
      </div>

      <div className="cart-main-content">
        <div className="cart-items-panel">
          <h2 className="panel-header">Shopping Bag ({totalItems})</h2>
          {cartItems.length > 0 ? (
            <table className="cart-items-table">
              <thead>
                <tr>
                  <th className="header-item">Item</th>
                  <th className="header-qty">Qty</th>
                  <th className="header-price">Price</th>
                  <th className="header-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </tbody>
            </table>
          ) : (
             <div className="cart-empty-message">Your Shopping Bag is Empty</div>
          )}
        </div>
        
        {cartItems.length > 0 && <OrderSummary subtotal={subtotal} />}
      </div>
    </div>
  );
};

export default CartPage;