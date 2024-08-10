import "./CareerDetail.css";
import detailImg from "/assets/career-img/analyst.jpg";
import chart from "/assets/career-img/chart.svg";
import work from "/assets/career-img/work.svg";
import { skills } from "./skills.js";
import { jobs } from "./jobs.js";
import { outcomes } from "./outcomes.js";

const CareerDetail = () => {
  return (
    <>
      <section className="course-detail">
        <div className="detail_wrapper">
          <div className="course-detail__description">
            <h2>IT BUSINESS ANALYST</h2>
            <p>
              StackwisR IT Business Analyst programme is designed with high
              performance, skill transferability and rapid career progression in
              mind. On completion, candidates are expected to be one of the most
              equipped entry to mid-level BA candidates on the jobs markets.
            </p>
            <p>
              IT Business Analyst helps organisations build, own, improve and
              manage products, implement best practices and user experience. The
              BA will own the development lifecycle of systems and processes,
              manage stakeholders, operational process, carry out research and
              solve complex problems using Data, frameworks and IT tools.
            </p>
          </div>
          <div className="course-detail__image">
            <img src={detailImg} alt="" />
          </div>
        </div>
        <div className="action-btns">
          <button className="enroll-btn">ENROLL NOW</button>
          <button className="request-btn">REQUEST SYLLABUS</button>
        </div>
      </section>
      {/* wywl - what you will learn ;) */}
      <section className="wywl">
        <h2>What You&apos;ll Learn</h2>
        <div className="wywl-wrapper">
          <ul>
            {/* {console.log(typeof outcomes["results"])} */}
            {outcomes["results"].map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </section>
      <div className="blue-line"></div>
      <section className="gains">
        <div className="section_wrapper">
          {/* div 1 */}
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

          {/* div 2 */}
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
      </section>
    </>
  );
};
export default CareerDetail;
