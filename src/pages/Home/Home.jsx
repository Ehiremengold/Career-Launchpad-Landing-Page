import "./Home.css";
import videoFile from "../../../public/assets/hero-video/hero.mp4";
import searchIcon from "../../../public/assets/svg/search_brown.svg";
import * as images from "../../../public/assets/companies/imgutil.js";
import navRightArrow from "../../../public/assets/svg/nav-right-arrow.svg";
import navLeftArrow from "../../../public/assets/svg/nav-left-arrow.svg";
import branchimg from "../../../public/assets/execsponsorprog/branch.png";
import diagram from "../../../public/assets/execsponsorprog/diagram-3.png";
import regularnews from "../../../public/assets/execsponsorprog/regularnews.png";
import globalImg from "../../../public/assets/svg/global.svg";
import Lottie from "react-lottie";
import confetti from "../../../public/assets/lottie/confetti.json";
import computerScreen from "../../../public/assets/lottie/computerscreen.json";
import emailSend from "../../../public/assets/lottie/emailSend.json";
import consult from "../../../public/assets/lottie/consult.json";
import layers from "../../../public/assets/lottie/layers.json";
import whyJoinImg from "../../../public/assets/bg/whyJoin.png";
import whyJoinGirlImg from "../../../public/assets/bg/whyJoin-girl.png";
import { testimonials } from "./testimonialData.js";
import { useState } from "react";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const countries = [
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 4",
    "Country 5",
    "Country 6",
    "Country 7",
    "Country 8",
    "Country 9",
    "Country 10",
  ];

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <div className="because-of-sponsor-container">
        <section className="hero-container">
          <video className="hero-video" autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <div className="hero__content">
              <div className="hero__text">
                <h3>EXECUTIVE TALENT SPONSORSHIP - 80% deferred payment</h3>
                <div className="hero__main__text">
                  <h2>Build a Career in fast growing fields.</h2>
                  <h2>
                    We work with you till you get placed with the right company
                    at the right salary.
                  </h2>
                </div>
                <div className="btn-and-input">
                  <input
                    type="text"
                    placeholder="What digital tech training do you want to learn?"
                  />
                  <button className="search-btn">
                    <img className="search-btn" src={searchIcon} alt="" />
                  </button>
                </div>

                <div className="tech-fields">
                  <div className="tech-field">
                    <p>AI ENGINEER</p>
                  </div>
                  <div className="tech-field">
                    <p>CYBERSECURITY ENGINEER</p>
                  </div>
                  <div className="tech-field">
                    <p>DATA ENGINEER</p>
                  </div>
                  <div className="tech-field">
                    <p>EXPERT DATA SCIENTIST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sponsors">
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
      <div className="explore-section__header">
        <h3>Explore our Executive Talent Sponsorship Programs</h3>
        <div className="brown-line"></div>
      </div>

      <section className="executive-sponsorshipPrograms-section">
        <div className="program-cards">
          <div className="card">
            <div className="card__explain">
              <img src={regularnews} alt="" />
              <h3>AI Engineer</h3>
            </div>

            <p>
              Work with machine learning techniques to build models for powering
              AI-based applications...
            </p>
          </div>
          <div className="card">
            <div className="card__explain">
              <img src={regularnews} alt="" />
              <h3>Cybersecurity Engineer</h3>
            </div>

            <p>
              Develop and implement high-tech solutions to counter cyber threats
              and implement security protocols...
            </p>
          </div>
          <div className="card">
            <div className="card__explain">
              <img src={branchimg} alt="" />
              <h3>Data Engineer</h3>
            </div>
            <p>
              Design and build systems for collecting, storing, and analyzing
              data at scale...
            </p>
          </div>
          <div className="card">
            <div className="card__explain">
              <img src={diagram} alt="" />
              <h3>Expert Data Scientist</h3>
            </div>
            <p>
              Analyse data with statistical and visualization techniques to
              derive forward looking insights...
            </p>
          </div>
        </div>
      </section>
      <div className="global-why-join">
        <section className="why-join">
          <div className="why-join-content">
            <h2>Why Join Executive Talent Sponsorship Programs</h2>

            <div className="row">
              <div className="col">
                <div className="text-lottie-col">
                  <div className="lottie">
                    <Lottie
                      options={defaultOptions(confetti)}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text">
                    <h3>100% Job Guarantee</h3>
                    <p>
                      Acquire high-paying job anytime within 12 months of
                      completing the program
                    </p>
                  </div>
                </div>

                <div className="text-lottie-col">
                  <div className="lottie">
                    <Lottie
                      options={defaultOptions(layers)}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text">
                    <h3>Immersive Project Mastery</h3>
                    <p>
                      Concrete, authentic project-based learning to help
                      learners solve real-world problems
                    </p>
                  </div>
                </div>

                <div className="text-lottie-col">
                  <div className="lottie">
                    <Lottie
                      options={defaultOptions(computerScreen)}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text">
                    <h3>Live Virtual Classes</h3>
                    <p>
                      Develop comprehensive knowledge with a full tutor-led
                      curriculum combined with mini, major and group projects
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-img">
                <img src={whyJoinImg} className="why-join-img" alt="" />
              </div>
            </div>
          </div>
        </section>
        <img src={globalImg} className="global-img" alt="" />
        <section className="why-join-girl">
          <div className="why-join-girl-row">
            <div className="whyJoinGirlImg">
              <img src={whyJoinGirlImg} alt="" />
            </div>
            <div className="column">
              <div className="column-single">
                <div className="lottie">
                  <Lottie
                    options={defaultOptions(emailSend)}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="text-to-lottie">
                  <h4>Premium Job Placement</h4>
                  <p>
                    Successful delegates will get placed with leading global
                    companies.
                  </p>
                </div>
              </div>
              <div className="column-single">
                <div className="lottie">
                  <Lottie
                    options={defaultOptions(consult)}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="text-to-lottie">
                  <h4>End-to-End Recruitment Support</h4>
                  <p>
                    Prepare for interview and enhance your leadership skills
                    with our VIP booster classes. Get Pairview’s Letter of
                    Recommendation and exclusive upgrade of LinkedIn and GIT
                    profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="difference-section">
        <div className="difference-overlay">
          <div className="difference-section__content">
            <div className="brown-line"></div>
            <h2>The Difference is in Our DNA</h2>
            <p>
              Transformative training services for accelerated career growth
            </p>
            <div className="difference-data">
              <div className="difference-data__number_description">
                <h1>10000+</h1>
                <p>Professionals and Specialists Developed</p>
              </div>

              <div className="difference-data__number_description">
                <h1>98%+</h1>
                <p>
                  of Delegates Got Jobs or Progressed Their Career Upon
                  Completion
                </p>
              </div>

              <div className="difference-data__number_description">
                <h1>4.7+</h1>
                <p>Service Excellence Score</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="alumni">
        <div className="testimonial-section">
          <h2>What Our Alumni are Saying About Job Offer Premium Guarantee</h2>
          <div className="testimonial-container">
            <button
              className={`testimonial-nav left ${
                currentIndex === 0 ? "disabled" : ""
              }`}
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
            >
              <img src={navLeftArrow} alt="Previous" />
            </button>
            <div className="testimonial-content">
              <div className="testimonial-text">
                <h3>{testimonials[currentIndex].name}</h3>
                <p>
                  <strong>Company: {testimonials[currentIndex].company}</strong>
                </p>
                <p>`{testimonials[currentIndex].feedback}`</p>
              </div>
              <div className="testimonial-image">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                />
              </div>
            </div>
            <button
              className={`testimonial-nav right ${
                currentIndex === testimonials.length - 1 ? "disabled" : ""
              }`}
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
            >
              <img src={navRightArrow} alt="Next" />
            </button>
          </div>
        </div>
      </section>
      <section className="cta__section">
        <div className="cta__section_content">
          <div className="text-section">
            <h2>Speak with our career consultant</h2>
            <p>Secure your spot now! Seats are filling up fast.</p>
          </div>
          <div className="form-section">
            <form action="">
              <div className="name">
                <input type="text" placeholder="Firstname" />
                <input type="text" placeholder="Lastname" />
              </div>
              <input type="text" placeholder="Email" />
              <select name="Country" id="" placeholder="Choose a Country">
                {countries.map((country, index) => (
                  <option key={index} value={`${country}`}>
                    {country}
                  </option>
                ))}
              </select>
              <input type="text" placeholder="Phone" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
