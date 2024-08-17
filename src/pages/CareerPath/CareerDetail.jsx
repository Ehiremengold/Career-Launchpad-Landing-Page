import "./CareerDetail.css";
import detailImg from "/src/assets/career-img/analyst.jpg";
import chart from "/src/assets/career-img/chart.svg";
import work from "/src/assets/career-img/work.svg";
import rating from "/src/assets/career-detail-icons/rating.svg";
import language from "/src/assets/career-detail-icons/language.svg";
import { skills } from "./skills.js";
import { jobs } from "./jobs.js";
import { outcomes } from "./outcomes.js";
import Tab from "../../components/Tab/Tab.jsx";

const CareerDetail = () => {
  return (
    <>
      <section className="course-detail">
        <div className="course-detail__wrapper">
          <div className="course_description">
            <h1>IT Business Analyst</h1>
            <p>
              The IT Business Analyst program is designed for high performance,
              skill transferability, and rapid career progression.
            </p>

            <p>
              Graduates emerge as top-tier entry to mid-level BAs, fully
              equipped to excel in the job market.
            </p>
          </div>
          <div className="course-detail-action-btns">
            <div className="rating">
              <img src={rating} alt="" />
              <h2>4.5</h2>
            </div>
            <div className="language">
              <img src={language} alt="" />
              <h2>English</h2>
            </div>
            <div className="enroll-action-btn">
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </section>
      
      <Tab />
      {/* wywl - what you will learn ;) */}
      {/* <section className="wywl">
        <h2>What You&apos;ll Learn</h2>
        <div className="wywl-wrapper">
          <ul>
           
            {outcomes["results"].map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </section>
      <div className="blue-line"></div>
      <section className="gains">
        <div className="section_wrapper">

          <div className="sywa">
            <div className="icon-box">
              <img src={chart} alt="" />
            </div>
            <div className="sywa__content">
              <h4>Skills You Will Acquire</h4>
              <ul>
                {skills["results"].map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="jrycaf">
            <div className="icon-box">
              <img src={work} alt="" />
            </div>
            <div className="jrycaf__content">
              <h4>Job Roles You Can Apply For</h4>
              <ul>
                {jobs["results"].map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="get-started">
        <div className="get-started__wrapper">
          <h2>Ready to Get Started?</h2>
          <p>
            Click on the &quot;Get started&quot; button to fill out the form,
            and one of our career experts will contact you shortly.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section> */}
    </>
  );
};
export default CareerDetail;
