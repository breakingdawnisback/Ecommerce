import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  // Create an array for the quantity dropdown options (e.g., 1 to 10)
  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <tr className="cart-item-row">
      {/* ===== Item Details Cell ===== */}
      <td className="item-details-cell">
        <div className="item-info-wrapper">
          <div className="item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-attribute">Color: {item.color}</p>
            <p className="item-attribute">Size: {item.size}</p>
            <p className="item-attribute">Style Number: {item.styleNumber}</p>
            {/* Actions for mobile view */}
            <div className="item-actions-mobile">
                <button className="button-text-small">Edit Details</button>
                <button className="button-text-small" onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      </td>

      {/* ===== Quantity Cell ===== */}
      <td className="item-quantity-cell">
        <select
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
          className="quantity-select"
          aria-label={`Quantity for ${item.name}`}
        >
          {quantityOptions.map(qty => (
            <option key={qty} value={qty}>{qty}</option>
          ))}
        </select>
        {/* Actions for desktop view */}
        <div className="item-actions-desktop">
            <button className="button-text-small">Edit Details</button>
            <button className="button-text-small" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </td>

      {/* ===== Price Cell ===== */}
      <td className="item-price-cell">₹{item.price.toFixed(2)}</td>

      {/* ===== Total Cell ===== */}
      <td className="item-total-cell">₹{(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;