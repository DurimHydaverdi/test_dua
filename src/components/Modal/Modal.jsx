import React from 'react';
import './Modal.scss'; // Create this SCSS file for styling

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
        <button onClick={onClose} className="modal-close-button">OK</button>
      </div>
    </div>
  );
};

export default Modal;