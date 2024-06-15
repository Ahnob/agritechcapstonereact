import { useState } from "react";
import logo from "../../assets/logo.png";
import hamburger_icon from "../../assets/hamburger.svg";
import SideNav from "../side-nav/Sidenav";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/Aboutus",
  },
  {
    label: "Products",
    href: "/Products",
  },
  {
    label: "Contact us",
    href: "/Contactus",
  },
  {
    label: "Marketplace",
    href: "/Marketplace",
  },
];

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo image" />
      </div>
      <ul className="nav-menu" id="navMenu">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink to={link.href} className="link">
              Home
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-button">
        <button className="login-btn">
          <NavLink to="/login">Log in</NavLink>
        </button>
        <button className="signup-btn">
          <NavLink to="/Onboarding">Sign Up</NavLink>
        </button>
      </div>
      <button onClick={() => setIsOpen(true)} className="hamburger">
        <img src={hamburger_icon} alt="hamburger icon" />
      </button>
      {isOpen && <SideNav onClose={() => setIsOpen(false)} />}
    </nav>
  );
}
export default Navbar;
