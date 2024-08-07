import "./Footer.css";

import * as socialIcons from "../../../public/assets/social-media-icons/utils.js";

const Footer = () => {
  return (
    <footer className="hidden">
      <div className="upper-footer">
        <div className="footer-content">
          <div>
            <p>Career Paths</p>
            <ul>
              <a href="">
                <li>Data Analyst</li>
              </a>
              <a href="">
                <li>Business Analyst</li>
              </a>
              <a href="">
                <li>Cybersecurity</li>
              </a>
              <a href="">
                <li>HR Analyst</li>
              </a>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Careers</li>
              </a>
              <a href="">
                <li>Press</li>
              </a>
            </ul>
          </div>

          <div>
            <p>Legal</p>
            <ul>
              <a href="">
                <li>Claim</li>
              </a>
              <a href="">
                <li>Privacy</li>
              </a>
              <a href="">
                <li>Terms</li>
              </a>
            </ul>
          </div>

          <div>
            <p>Request A Call Back</p>
            <span>
              Book a consultation today to speak with one of our career experts
              and get started
            </span>
            <button className="book-call-btn">Book Call</button>
          </div>
        </div>
      </div>

      <div className="lower-footer">
        <div className="d-flex">
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
          <div className="footer-footer-content">
            <p>Terms & Conditions</p>

            <span>&#124;</span>

            <p>Privacy Policy</p>
          </div>

          <p className="year-copy">
            All Right Reserved &copy; {new Date().getFullYear()}{" "}
            <strong>Stackwisr.co.uk</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
