import Hero from "../../components/Hero/Hero";
import heroBg from "../../../public/assets/hero-video/hero-career.jpg";
import arrowDown from "/assets/svg/arrow_down_white.svg";
import "./CareerPath.css";
import { careers } from "./careers.js";
import { useRef } from "react";
import WhyChooseStackwisr from "../../components/WhyChooseStackwisr/WhyChooseStackwisr.jsx";

const CareerPath = () => {
  const careerPathRef = useRef(null);

  const scrollToSection = () => {
    careerPathRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-scroll">
        <Hero
          heroBg={heroBg}
          heroText={"Explore Your Future"}
          heroSubtitle={
            "Our flexible programs are designed to fit your work schedule and provide you with the skills needed to excel in today's job market."
          }
        />
        <div className="scroll-down" onClick={scrollToSection}>
          <p>SCROLL DOWN</p>
          <img src={arrowDown} alt="" />
        </div>
      </div>

      <section className="career-cards" ref={careerPathRef}>
        <h1> Explore Our Career Paths</h1>
        <p>
          Unlock new career opportunities in the most in-demand fields with our
          expert led programs
        </p>
        <div className="career-wrapper">
          {careers.map((career, index) => (
            <div key={index} className="career-card">
              <img src={career.imgPath} alt="" />
              <div className="children">
                <h3>{career.title}</h3>
                <p>{career.description}</p>
                <a href="#">
                  <button>Learn more</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseStackwisr />

      <section className="keyword-search">
        <input type="text" placeholder="Search Courses" />
      </section>
    </>
  );
};
export default CareerPath;
