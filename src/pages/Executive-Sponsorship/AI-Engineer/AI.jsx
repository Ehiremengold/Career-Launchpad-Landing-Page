import "./AI.css";
import helpOutline from "../../../../public/assets/svg/help_outline_icon.png";
import stepsImg from "../../../../public/assets/bg/steps-to-start.png";
import * as images from "../../../../public/assets/companies/imgutil.js";
import jobGuarantee from "../../../../public/assets/svg/job-guarantee.svg";
import handsOn from "../../../../public/assets/svg/hands-on.svg";
import recruitmentConsult from "../../../../public/assets/svg/recruitment.svg";
import employableSkills from "../../../../public/assets/svg/employable.svg";
import Alumni from "../../../components/Alumni/Alumni.jsx";
import PricingTable from "../../../components/Pricing Table/PricingTable.jsx";
import { Helmet } from "react-helmet";
import learningOutcome1 from "../../../../public/assets/svg/lo1.svg";
import learningOutcome2 from "../../../../public/assets/svg/lo2.svg";
import learningOutcome3 from "../../../../public/assets/svg/lo3.svg";
import learningOutcome4 from "../../../../public/assets/svg/lo4.svg";
import { howToGetStartedData } from "./how-to-get-started.js";
import { mediums } from "./mediums.js";
import axios from "axios";
import { useState, useEffect } from "react";

const AIEngineer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch countries data from REST Countries API
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // Extract the necessary information (name and calling code)
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          callingCode:
            country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : ""),
        }));
        setCountries(countryData);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  const showModal = () => {
    console.log("show modal");
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.style.display = "block";
    }
  };

  const closeModal = () => {
    console.log("close modal");
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>
          AI Engineer Premium Job Offer Guaranteed | Pairview Training
        </title>
      </Helmet>
      <div className="because-of-sponsor-container">
        <section className="ai-hero">
          <div className="ai-hero__content">
            <h2>
              <span>Become an</span> AI Engineer
            </h2>
            <h1>Job Offer Guaranteed or Money Back.</h1>
            <p>
              The AI Engineer Job Offer Premium Guarantee Program is an
              immersive learning 12-month programme that helps you develop
              technical and soft skills. Become industry-ready with hands-on
              projects and application-based curriculum. Get hired by top
              companies and earn up to $45000.
            </p>
            <div className="ai-cta">
              <button>Enrol now</button>
              <p>Request Syllabus</p>
            </div>
          </div>
          <div className="why-become-an-ai-engineer">
            <img src={helpOutline} alt="" />
            <p>WHY BECOME AN AI ENGINEER</p>
          </div>
        </section>
        <div className="companies-hired-our-graduates">
          <h2>Our graduates have been hired by</h2>
          <div className="scroll-container">
            {Object.entries(images).map(([key, src]) => (
              <img
                key={key}
                src={src}
                alt={`Company ${key}`}
                className="company-image"
              />
            ))}
          </div>
        </div>
      </div>
      <section className="Job-Offer-Premium">
        <div className="premium-combined">
          <div className="premium-description">
            <h3>Why Join Expert AI Engineer Job Offer Premium Guarantee</h3>
            <p>
              A comprehensive training program designed to develop high caliber
              candidates for guaranteed high-paying jobs
            </p>
          </div>
          <div className="col-grids">
            <div className="col-grid">
              <img src={jobGuarantee} alt="" />
              <p className="img-description">100% Job Gaurantee</p>
              <p className="description-description">
                Land a high paying job within 12-months of completing the
                program or get your money back.
              </p>
            </div>
            <div className="col-grid">
              <img src={handsOn} alt="" />
              <p className="img-description">Hands-on Experience</p>
              <p className="description-description">
                Immersive project mastery involving hands-on practical projects
                with comprehensive mentoring for up to 12-months after your
                training.
              </p>
            </div>
            <div className="col-grid">
              <img src={recruitmentConsult} alt="" className="col-grid-img" />
              <p className="img-description">Recruitment Consultancy</p>
              <p className="description-description">
                Bespoke CV surgery, interview preparation and VIP booster
                sessions to help you build leadership skills and find relevant
                jobs
              </p>
            </div>
            <div className="col-grid">
              <img src={employableSkills} alt="" />
              <p className="img-description">Real Employable Skills</p>
              <p className="description-description">
                Cutting-edge curriculum designed and taught by industry experts,
                not academicians for you to become job-ready.
              </p>
            </div>
          </div>
        </div>
        <div className="free-consult">
          <button onClick={() => showModal()} className="free-consult-btn">
            REQUEST A FREE CONSULTATION
          </button>
        </div>
      </section>
      <Alumni />
      <section className="angled-bg">
        <div className="class-schedule">
          <div>
            <p>Learning Format</p>
            <p>Live Virtual Classes</p>
          </div>
          <div className="line"></div>
          <div>
            <p>Duration</p>
            <p>12-months</p>
          </div>
          <div className="line"></div>
          <div>
            <p>Next Intake</p>
            <p>September 2024</p>
          </div>
        </div>
      </section>

      <section className="learning-outcome">
        <div className="learning-outcome__details">
          <h3>Learning Outcome</h3>
          <div className="learning-cols">
            <div className="learning-col">
              <div className="learning-col__detail">
                <img
                  src={learningOutcome1}
                  alt=""
                  className="learning-outcome-icon"
                />
                <p>
                  Building, testing, and deploying AI models and applications
                </p>
              </div>
              <div className="learning-col__detail">
                <img
                  src={learningOutcome3}
                  alt=""
                  className="learning-outcome-icon"
                />
                <p>
                  Delivering a successful AI project by using key DataOps best
                  practices
                </p>
              </div>
            </div>
            <div className="learning-col">
              <div className="learning-col__detail">
                <img
                  src={learningOutcome2}
                  alt=""
                  className="learning-outcome-icon"
                />
                <p>Leveraging the leading cloud platforms from AWS to Azure</p>
              </div>
              <div className="learning-col__detail">
                <img
                  src={learningOutcome4}
                  alt=""
                  className="learning-outcome-icon"
                />
                <p>Setting up a streaming and batch data pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job-offer-premium-payment">
        <div className="premium-payment">
          <h3>Job Offer Premium Guarantee Payment Options</h3>
          <p>
            The full programme fee is £ 12,750. If you pay upfront, you get 10%
            off the total fees. In addition, you pay sign-off fee only when you
            get the job offer. This will cover your CoS issuance and job offer
            processing formalities including deferred course fees, referencing
            and 12-month job support.
          </p>
          <PricingTable />
          <div className="pay-fee">PAY ENROLMENT FEES ONLINE</div>
        </div>
      </section>
      <section className="eligibility">
        <div className="eligibility_description">
          <h3>
            Are You Eligible for AI Engineer Job Offer Premium Guarantee
            Program?
          </h3>
          <p>
            Our Job Offer Premium Guarantee Program offers live virtual
            classroom training and guided learning from industry experts to help
            you develop AI Engineering skills for guaranteed high-paying jobs.
          </p>
          <h2>Prerequisites</h2>
          <ul className="prerequisites">
            <li>
              An academic background in Science, Technology, Engineering or
              Mathematics (STEM) is preferred.
            </li>
            <li>
              A background in numerical, technical, accounting, finance,
              marketing, or business management.
            </li>
            <li>Graduate with a minimum of 2.2 GPA</li>
            <li>
              Experience in using Windows operating systems (or equivalent) and
              basic Microsoft office software such as Word, Excel and PowerPoint
              (or equivalent)
            </li>
          </ul>

          <button onClick={() => showModal()} className="talk-to-consultant">
            TALK TO OUR CAREER CONSULTANT TO KNOW MORE
          </button>
        </div>
      </section>
      <section className="how-to-get-started__section">
        <div className="how-to-get-started__content">
          <h2>How to Get Started</h2>
          <div className="how-to-get-started">
            <img src={stepsImg} alt="" />
            <div className="steps-description-section">
              {howToGetStartedData.map((step, index) => (
                // const { title, description } = step;
                <div key={index} className="description__section">
                  <p className="step-count">Step {index + 1}</p>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="ai-ready">
        <div className="ai_ready__section">
          <h1>Enrol for AI Engineer Job Offer Premium Guarantee</h1>
          <p>Secure your spot now. Seats are filling up fast.</p>
          <button onClick={() => showModal()}>I&apos;M READY!</button>
        </div>
      </section>

      <div className="modal">
        <div className="form-class">
          <div onClick={() => closeModal()} className="close-modal">
            <h2>X</h2>
          </div>
          <h1>Get More Details </h1>
          <p>AI Engineer Premium Job offer Guaranteed</p>
          <form action="#" className="form-form">
            <div className="input-names">
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
            </div>
            <input className="email-input" type="text" placeholder="Email" />
            <div className="job-title-company">
              <input type="text" placeholder="Job Title" />
              <input type="text" placeholder="Company" />
            </div>
            <div className="country-phone">
              <select
                name="country"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">Choose a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.callingCode}>
                    {country.name} ({country.callingCode})
                  </option>
                ))}
              </select>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="any-message">
              <textarea placeholder="Message" rows="5"></textarea>
            </div>
            <select className="notice" name="" id="">
              {mediums.map((medium, index) => (
                <option key={index} value={`${medium}`}>
                  {medium}
                </option>
              ))}
            </select>
            <div className="newsletter">
              <input type="checkbox" name="newsletter" id="newsletter" />
              <p>
                I want to hear about exciting jobs and events in DataTech, free
                tutorials, solutions and insights that may benefit my career
              </p>
            </div>
            <div className="submit-btn-div">
              <button className="submit-btn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AIEngineer;
