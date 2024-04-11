import hamburger_icon from "../assets/hamburger.svg";
import "./Hamburger.css";

function Hamburger() {
  return (
    <button className="hamburger">
      <img src={hamburger_icon} alt="hamburger icon" />
    </button>
  );
}

export default Hamburger;
