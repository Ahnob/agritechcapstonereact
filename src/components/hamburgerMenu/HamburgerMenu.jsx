// import { useState } from "react";
import hamburger_icon from "../../assets/hamburger.svg";
import "./hamburgerMenu.css";


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src={hamburger_icon} alt="hamburger icon" />

      <button onClick={() => setIsOpen(true)} className="hamburger">
        <img src={hamburger_icon} alt="hamburger icon" />
      </button>
      {isOpen && <Sidenav onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default HamburgerMenu;
