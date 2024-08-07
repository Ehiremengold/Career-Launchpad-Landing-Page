import "./Home.css";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import videoFile from "../../../public/assets/hero-video/hero.mp4";
import BlogSection from "../../components/BlogCard/BlogSection.jsx";
import Alumni from "../../components/Alumni/Alumni.jsx";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import CareerPaths from "../../components/CareerPaths/CareerPaths.jsx";
import StackwisRDifference from "../../components/StackwisRDifference/StackwisRDifference.jsx";
import CTASection from "../../components/CTA/CTASection.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#title-1", {
        opacity: "0",
        duration: 1,
        delay: 0.8,
      }).from(["#subtitle-1", "#animate-btns"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Home | StackwisR</title>
      </Helmet>
      <section className="hero-container" ref={sectionRef}>
        <video className="hero-video" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="hero___content-container">
            <div className="hero__content">
              <h1 id="title-1">Redefine possibilities with StackwisR.</h1>
              <p id="subtitle-1">
                Future-proof your career with our AI-driven training and career
                development
              </p>
              <div className="hero__cta-btns" id="animate-btns">
                <button className="get-started">
                  Get Started
                  {/* <img src={arrowIcon} alt="" /> */}
                </button>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareerPaths mounted={isMounted} />

      <StackwisRDifference mounted={isMounted} />

      <Alumni />

      <BlogSection mounted={isMounted} />
      <CTASection mounted={isMounted} />
    </main>
  );
};
export default Home;
