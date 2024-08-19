import { useState, } from "react";
import { useParams } from "react-router-dom";
import checkIcon from "../../../src/assets/career-detail-icons/check.svg";
import WhyChooseStackwisr from "../WhyChooseStackwisr/WhyChooseStackwisr.jsx";
import Alumni from "../Alumni/Alumni.jsx";
import ReadyToBegin from "../ReadyToBegin/ReadyToBegin.jsx";
import "./Tab.css";

const Tab = ({whatYouWillLearn, skills, potentialJobs}) => {
  const [activeTab, setActiveTab] = useState("about");
  const [visible, setVisible] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const showMore = () => {
    setVisible(!visible);
  };

  return (
    <div className="widget">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => handleTabClick("about")}
        >
          About
        </div>
        <div
          className={`tab ${activeTab === "syllabus" ? "active" : ""}`}
          onClick={() => handleTabClick("syllabus")}
        >
          Request Syllabus
        </div>
        <div
          className={`tab ${activeTab === "testimonials" ? "active" : ""}`}
          onClick={() => handleTabClick("testimonials")}
        >
          Testimonials
        </div>
        {/* Indicator Element */}
        <div className="active-indicator"></div>
      </div>
      <div className="tab-content">
        {activeTab === "about" && (
          <div className="tab-pane fade-in">
            <h2>What You&apos;ll Learn</h2>
            <div className={`what-you-learn ${visible ? "show" : ""} `}>
              {whatYouWillLearn.map((wywl, index) => {
                return (
                  <div className="checklist" key={index}>
                    <img src={checkIcon} alt="" />
                    <h4>{wywl}</h4>
                  </div>
                );
              })}
              {visible ? (
                <div onClick={showMore} className="show-more-action">
                  <h4>Show less</h4>
                </div>
              ) : (
                <div onClick={showMore} className="show-more-action">
                  <h4>Show more</h4>
                </div>
              )}
            </div>

            <h2>Skills You&apos;ll Gain</h2>
            <div className="skills">
              {skills.map((skill, index) => {
                return (
                  <div key={index} className="item-container">
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>

            <h2>Potential Jobs</h2>
            <div className="jobs">
              {potentialJobs.map((job, index) => {
                return (
                  <div key={index} className="item-container">
                    <p>{job}</p>
                  </div>
                );
              })}
            </div>
            <ReadyToBegin />
            <WhyChooseStackwisr />
          </div>
        )}
        {activeTab === "syllabus" && (
          <div className="tab-pane fade-in">
            <h2>Request Syllabus</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              ad eum! Vero asperiores nostrum voluptatum libero blanditiis
              consectetur vitae nihil facere, nemo error iste voluptas incidunt
              cumque atque tempore soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              ad eum! Vero asperiores nostrum voluptatum libero.
            </p>
          </div>
        )}
        {activeTab === "testimonials" && (
          <div className="tab-pane testimonials fade-in">
            <Alumni />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
