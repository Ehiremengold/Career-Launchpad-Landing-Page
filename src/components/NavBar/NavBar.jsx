import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import arrowIcon from "../../../public/assets/svg/arrow.svg";
import { useState } from "react";

const NavBar = ({ setVisibleSection }) => {
  const handleMouseEnter = (section) => {
    setVisibleSection(section);
  };

  const handleMouseLeave = () => {
    setVisibleSection(null);
  };
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Pairview training" />
      </div>
      <div className="nav-items">
        <ul>
          <li
            className="more executive-talent"
            onMouseEnter={() => handleMouseEnter("exec-talent-section")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="">Executive Talent Sponsorship Program</a>
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
            <a href="">How We Work</a>
            <img src={arrowIcon} className="arrow-rotate" alt="" />
            <div className="orange-line"></div>
          </li>
          <li
            className="more for-enterprise"
            onMouseEnter={() => handleMouseEnter("for-enterprise-section")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="">For Enterprise</a>
            <img src={arrowIcon} className="arrow-rotate" alt="" />
            <div className="orange-line"></div>
          </li>
          <li>
            <a href="">Events</a>
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
