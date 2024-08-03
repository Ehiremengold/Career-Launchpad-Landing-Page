import "./Header.css";
import arrow from "../../../public/assets/svg/arrow.svg";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";

const Header = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleMouseEnterSection = (section) => {
    setVisibleSection(section);
  };

  const handleMouseLeaveSection = () => {
    setVisibleSection(null);
  };
  return (
    <header>
      <NavBar setVisibleSection={setVisibleSection} />

      <div
        className={`exec-talent-section ${
          visibleSection === "exec-talent-section" ? "visible" : ""
        }`}
        onMouseEnter={() => handleMouseEnterSection("exec-talent-section")}
        onMouseLeave={handleMouseLeaveSection}
      >
        <div className="content">
          <div className="left-section">
            <h3>Executive Talent Sponsorship Program</h3>
            <p>
              Specialized career mentoring program focused on developing high
              caliber candidates for Internship and job placement. Offered via
              live virtual classes, this will help you learn the most in-demand
              tech skills. Training, Internship, Mentorship and Job offers.
            </p>
            <a href="">
              <p className="successStories">Real Success Stories</p>
            </a>
          </div>

          <div className="middle-section">
            <a href="/executive-talent-sponsorship-program/ai-engineer">
              <div className="page-description">
                <p>AI Engineer</p>
                <img src={arrow} alt="" />
              </div>
            </a>
            <div className="page-description">
              <p>Data Engineer</p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="right-section">
            <div className="page-description">
              <p>Cybersecurity Engineer</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Expert Data Scientist</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`how-we-work-section ${
          visibleSection === "how-we-work-section" ? "visible" : ""
        }`}
        onMouseEnter={() => handleMouseEnterSection("how-we-work-section")}
        onMouseLeave={handleMouseLeaveSection}
      >
        <div className="content">
          <div className="left-section">
            <h3>How We Work</h3>
            <p>
              Pairview is a specialist in futuristic technology training. We
              work with ambitious individuals and businesses as a trusted
              partner, transforming careers and building future-ready workforce.
            </p>
          </div>

          <div className="middle-section">
            <a href="/about">
              <div className="page-description">
                <p>About</p>
                <img src={arrow} alt="" />
              </div>
            </a>
            <div className="page-description">
              <p>Our Career Development Approach</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Meet Team</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Contact Us</p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="right-section">
            <div className="page-description">
              <p>Delegate Success</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Career Consultants</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Partnership</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`for-enterprise-section ${
          visibleSection === "for-enterprise-section" ? "visible" : ""
        }`}
        onMouseEnter={() => handleMouseEnterSection("for-enterprise-section")}
        onMouseLeave={handleMouseLeaveSection}
      >
        <div className="content">
          <div className="left-section">
            <h3>For Enterprise</h3>
            <p>
              Pairview enables companies to build a strong digital foundation by
              upskilling your workforce in the cutting-edge tech skills through
              team enablement bootcamps, flexible tutor-led single course and
              more
            </p>
          </div>

          <div className="middle-section">
            <div className="page-description">
              <p>Overview People 4.0</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Talent Incubator</p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="right-section">
            <div className="page-description">
              <p>Re-skilling Solution</p>
              <img src={arrow} alt="" />
            </div>
            <div className="page-description">
              <p>Training and Upskilling</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
