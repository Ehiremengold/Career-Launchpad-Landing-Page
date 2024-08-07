import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.png";
import * as socialIcons from "../../../public/assets/social-media-icons/utils.js";
import arrowDownIcon from "../../../public/assets/svg/arrow-down.svg";
import menubar from "../../../public/assets/svg/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollTo } from "react-scroll/modules/mixins/scroller.js";

const NavBar = () => {
  const backToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="logo" onClick={backToTop()}>
        <a href="">
          <img src={logo} alt="StackWisr" />
        </a>
      </div>

      <ul className="nav-items">
        <Link
          className="nav-item dropdown"
          to="explore-paths"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Career Paths
          <img src={arrowDownIcon} alt="" />
        </Link>
        <Link
          className="nav-item"
          to="alumni"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Our Success
        </Link>
        <Link
          className="nav-item"
          to="blog__section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Blog
        </Link>
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
