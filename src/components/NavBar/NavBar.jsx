import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import * as socialIcons from "../../../public/assets/social-media-icons/utils.js";
import arrowDownIcon from "../../../public/assets/svg/arrow-down.svg";
import menubar from "../../../public/assets/svg/menu.svg"
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="">
          <img src={logo} alt="StackWisr" />
        </a>
      </div>

      <ul className="nav-items">
        <li className="nav-item dropdown">
          Career Paths
          <img src={arrowDownIcon} alt="" />
        </li>
        <li className="nav-item">Our Success</li>
        <li className="nav-item">Blog</li>
      </ul>

      <div className="about__socials">
        <p>About us</p>
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
      <div className="menu-bar">
        <img src={menubar} alt="" />
      </div>
    </nav>
  );
};
export default NavBar;
