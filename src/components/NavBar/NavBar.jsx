import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import arrowIcon from "../../../public/assets/svg/arrow.svg";
import menuIcon from "../../../public/assets/svg/menu.svg";
import menuCloseIcon from "../../../public/assets/svg/menu-close.png";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setVisibleSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (section) => {
    setVisibleSection(section);
  };

  const handleMouseLeave = () => {
    setVisibleSection(null);
  };
  return (
    <nav>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Pairview training" />
        </div>
      </a>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="" />
      </div>
      <div className={`nav-items ${menuOpen ? "active" : ""}`}>
        <div className="close" onClick={toggleMenu}>
          <img src={menuCloseIcon} alt="" />
        </div>
        <ul>
          <li
            className="more executive-talent"
            onMouseEnter={() => handleMouseEnter("exec-talent-section")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Executive Talent Sponsorship Program</a>
            <img src={arrowIcon} className="arrow-rotate" alt="" />
            <div className="orange-line"></div>
          </li>
          <li>
            <a href="">Career Bootcamp</a>
            <div className="orange-line"></div>
          </li>
          <li
            className="more how-we-work"
            onMouseEnter={() => handleMouseEnter("how-we-work-section")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">How We Work</a>
            <img src={arrowIcon} className="arrow-rotate" alt="" />
            <div className="orange-line"></div>
          </li>
          <li
            className="more for-enterprise"
            onMouseEnter={() => handleMouseEnter("for-enterprise-section")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">For Enterprise</a>
            <img src={arrowIcon} className="arrow-rotate" alt="" />
            <div className="orange-line"></div>
          </li>
          <li>
            <a href="#">Events</a>
            <div className="orange-line"></div>
          </li>
        </ul>
      </div>
      <div className="country-code">
        <p>NG</p>
      </div>
    </nav>
  );
};
export default NavBar;
