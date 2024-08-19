import Hero from "../../components/Hero/Hero";
import heroBg from "../../../src/assets/hero-video/hero-career.jpg";
import arrowDown from "/src/assets/svg/arrow_down_white.svg";
import "./CareerPath.css";
import { useRef, useEffect, useState } from "react";
import WhyChooseStackwisr from "../../components/WhyChooseStackwisr/WhyChooseStackwisr.jsx";
import axios from "axios";
import Loading from "../../components/LoadingSpinner/Loading.jsx";
import { Link } from "react-router-dom";

const CareerPath = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState(null);

  const careerPathRef = useRef(null);

  const scrollToSection = () => {
    careerPathRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const rootUrl = import.meta.env.VITE_API_ROOT;

    const fetchPaths = async () => {
      try {
        const response = await axios.get(`${rootUrl}careerpaths/`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };
    fetchPaths();
  });

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <h4>Error Loading Blog posts</h4>
      </div>
    );
  }

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
          {data.map((career) => {
            const { id, image_display, career_name, description, slug } =
              career;
            return (
              <div key={id} className="career-card">
                <img src={image_display} alt="" />
                <div className="children">
                  <h3>{career_name}</h3>
                  <p>{description}</p>
                  <Link to={`/career-detail/${slug}`}>
                    <button>Learn more</button>
                  </Link>
                </div>
              </div>
            );
          })}
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
