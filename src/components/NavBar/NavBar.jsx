import "./NavBar.css";
import logo from "../../../src/assets/logo/logo.png";
import * as socialIcons from "../../../src/assets/social-media-icons/utils.js";
import menubar from "../../../src/assets/svg/menu.svg";
import closeMenuBar from "../../../src/assets/svg/menu-close.png";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="StackWisr" />
        </a>
      </div>
      <div className={`nav-combined ${menuOpen ? "show" : ""}`}>
        <ul className="nav-items">
          <li className="nav-item dropdown">
            <a href="/explore-paths">Career Paths</a>
          </li>
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
            <a href="https://www.facebook.com/StackwisR">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={socialIcons.facebook}
                  alt="facebook"
                />
              </div>
            </a>
            <a href="https://www.instagram.com/stackwisr?igsh=M2JteDBuY3k3cTh6">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={socialIcons.instagram}
                  alt="instagram"
                />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/stackwiser/">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={socialIcons.linkedin}
                  alt="linkedin"
                />
              </div>
            </a>
            <a href="">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={socialIcons.youtube}
                  alt="youtube"
                />
              </div>
            </a>
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
