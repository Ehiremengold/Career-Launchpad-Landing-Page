import "./Footer.css";
import arrowRight from "../../../public/assets/svg/arrow_right.svg";
import facebookIcon from "../../../public/assets/svg/facebook.svg";
import instagramIcon from "../../../public/assets/svg/instagram.svg";
import linkedinIcon from "../../../public/assets/svg/linkedin.svg";
import twitterIcon from "../../../public/assets/svg/x.svg";
const Footer = () => {
  return (
    <footer>
      <div className="upper-footer">
        <div className="footer-content">
          <div>
            <p>Featured Programmes</p>
            <ul>
              <a href="">
                <li>AI Engineer</li>
              </a>
              <a href="">
                <li>Cybersecurity Engineer</li>
              </a>
              <a href="">
                <li>Data Engineer</li>
              </a>
              <a href="">
                <li>Expert Data Scientist</li>
              </a>
            </ul>
          </div>

          <div>
            <p>Featured Courses</p>
            <ul>
              <a href="">
                <li>AI Application Development</li>
              </a>
              <a href="">
                <li>DataOps and Microservices for Big Data Solutions</li>
              </a>
              <a href="">
                <li>Build Deep Learning Models</li>
              </a>
              <a href="">
                <li>Credit Risk Analytics and Modelling</li>
              </a>
              <a href="">
                <li>
                  Decision Analytics Use Case Framing, Development and
                  Management
                </li>
              </a>
            </ul>
          </div>

          <div>
            <p>Resources</p>
            <ul>
              <a href="">
                <li>Blogs</li>
              </a>
              <a href="">
                <li>Course Catalogue</li>
              </a>
              <a href="">
                <li>Program Catalogue</li>
              </a>
              <a href="">
                <li>Events</li>
              </a>
              <a href="">
                <li>Insight Center</li>
              </a>
              <a href="">
                <li>Delegate Success</li>
              </a>
              <a href="">
                <li>Career Development Services</li>
              </a>
              <a href="">
                <li>Enterprise People 4.0 Services</li>
              </a>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <a href="">
                <li>About Pairview</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
              <a href="">
                <li>Meet Our Team</li>
              </a>
              <a href="">
                <li>Meet Our Consultants</li>
              </a>
              <a href="">
                <li>Policies</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-contact-us">
          <div className="first-sect">
            <p>Connect with us</p>
            <img src={arrowRight} alt="" />
          </div>
          <div className="contact-continent">
            <p>Europe</p>
            <div className="social-media-icons">
              <img src={facebookIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
          <div className="contact-continent">
            <p>Africa</p>
            <div className="social-media-icons">
              <img src={facebookIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer">
        <div className="footer-footer-content">
          <div>
            <a href="">
              <p>Terms of Use</p>
            </a>
            <span>&#124;</span>
          </div>
          <div>
            <a href="">
              <p>Privacy Policy</p>
            </a>
            <span>&#124;</span>
          </div>
          <div>
            <a href="">
              <p>Cookies</p>
            </a>
            <span>&#124;</span>
          </div>
          <div>
            <a href="">
              <p>Web Accessibility</p>
            </a>
            <span>&#124;</span>
          </div>
          <div>
            <a href="">
              <p>Legal Disclaimer</p>
            </a>
          </div>
        </div>

        <p>
          All Right Reserved &copy; pairviewtraining.com{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
