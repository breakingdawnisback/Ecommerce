import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddToBagModal.css';
import { CheckCircleIcon, CloseIcon } from './Icons';

const AddToBagModal = ({ isOpen, onClose, item, totalItems }) => {
  // This effect adds a class to the body to prevent scrolling when the modal is open.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen || !item) {
    return null; // Don't render anything if it's not open or there's no item
  }

  return (
    // The overlay is the semi-transparent background. Clicking it closes the modal.
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation prevents a click inside the modal from closing it */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <CheckCircleIcon />
            <h2>Item Added to Bag</h2>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="added-item-info">
            <img src={item.image} alt={item.name} className="added-item-image" />
            <div className="added-item-details">
              <p className="item-brand">{item.brand || 'Polo Ralph Lauren'}</p>
              <p className="item-name-modal">{item.name}</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <Link to="/cart" className="button primary-button modal-button" onClick={onClose}>
            Checkout ({totalItems})
          </Link>
          <button onClick={onClose} className="button secondary-button modal-button">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToBagModal;