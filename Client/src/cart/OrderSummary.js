import React, { useState } from 'react';
import './OrderSummary.css';

const OrderSummary = ({ subtotal }) => {
    const [promoVisible, setPromoVisible] = useState(false);
    
    // These will be calculated with more logic later
    const estimatedShipping = 0.00; 
    const estimatedTotal = subtotal + estimatedShipping;

    return (
        <div className="order-summary-panel">
            <h2 className="panel-header">Order Summary</h2>
            
            <div className="summary-section">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Estimated Shipping</span>
                    <span>{estimatedShipping > 0 ? `₹${estimatedShipping.toFixed(2)}` : 'FREE'}</span>
                </div>
                
                <div className="promo-code-section">
                    <div className="promo-header" onClick={() => setPromoVisible(!promoVisible)}>
                        <h3>Apply a Promo Code</h3>
                        <span className={`promo-toggle ${promoVisible ? 'open' : ''}`}></span>
                    </div>
                    {promoVisible && (
                        <div className="promo-content">
                            <input type="text" placeholder="Promo code" className="promo-input" />
                            <button className="promo-apply-button">Apply</button>
                        </div>
                    )}
                </div>

                <div className="summary-row total-row">
                    <span>Estimated Total</span>
                    <span>₹{estimatedTotal.toFixed(2)}</span>
                </div>
            </div>

            <div className="cart-actions-bottom">
                 <button className="button primary-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default OrderSummary;