import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import * as socialIcons from "../../../public/assets/social-media-icons/utils.js";
import arrowDownIcon from "../../../public/assets/svg/arrow-down.svg";
import menubar from "../../../public/assets/svg/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollTo } from "react-scroll/modules/mixins/scroller.js";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="StackWisr" />
        </a>
      </div>

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
        <a href="">
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
      <div className="menu-bar">
        <img src={menubar} alt="" />
      </div>
    </nav>
  );
};
export default NavBar;
