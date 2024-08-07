import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import * as socialIcons from "../../../public/assets/social-media-icons/utils.js";
import menubar from "../../../public/assets/svg/menu.svg";
import closeMenuBar from "../../../public/assets/svg/menu-close.png";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="StackWisr" />
        </a>
      </div>
      <div className={`nav-combined ${menuOpen ? "show" : ""}`}>
        <ul className="nav-items">
          <l1 className="nav-item dropdown">
            <a href="/explore-paths"></a>Career Paths
          </l1>
          <li className="nav-item">
            <a href="/alumni">Our Success</a>
          </li>
          <li className="nav-item">
            <a href="/blog">Blog</a>
          </li>
        </ul>

        <div className="about__socials">
          <a href="/about-us">
            <p>About us</p>
          </a>
          <div className="socials">
            <div className="social-container">
              <img className="social-icon" src={socialIcons.facebook} alt="" />
            </div>
            <div className="social-container">
              <img className="social-icon" src={socialIcons.instagram} alt="" />
            </div>
            <div className="social-container">
              <img className="social-icon" src={socialIcons.linkedin} alt="" />
            </div>
            <div className="social-container">
              <img className="social-icon" src={socialIcons.youtube} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="menu-bar" onClick={toggleMenu}>
        <img src={menuOpen ? closeMenuBar : menubar} alt="" />
      </div>
    </nav>
  );
};
export default NavBar;
