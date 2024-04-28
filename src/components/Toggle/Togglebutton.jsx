// import React, { useState } from "react";
// import "./ToggleButton.css"; // Import CSS for styling
// function ToggleButton() {
//   // Define state to track if the button is toggled on or off
//   const [isToggled, setIsToggled] = useState(false);

//   // Function to handle button click
//   const handleClick = () => {
//     setIsToggled(!isToggled); // Toggle the state
//   };

//   return (
//     <button
//       className={isToggled ? "button-on" : "button-off"}
//       onClick={handleClick}
//     >
//       {isToggled ? "yellow" : "grey"}
//     </button>
//   );
// }
// export default ToggleButton;

import React, { useState } from 'react';
import './Togglebutton.css'; // Import your CSS file for styling

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleButton = () => {
    setIsChecked(!isChecked);
    // You can add any specific actions you want when the button is toggled here
    console.log('Toggle is ' + (isChecked ? 'ON' : 'OFF'));
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={toggleButton} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleButton;
