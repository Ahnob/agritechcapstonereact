import { useState } from 'react';
import './CloseIcon.css';  // Import the CSS file for styles

const CloseIcon = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();  // Callback to handle the close action (e.g., removing the element)
    }, 300);  // Duration of the animation (must match CSS animation duration)
  };

  return (
    <div className={`close-icon ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      &times;
    </div>
  );
};

export default CloseIcon;