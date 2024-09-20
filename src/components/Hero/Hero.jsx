/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import videoFile from "../../assets/hero-video/hero.mp4";

const Hero = ({ heroText, heroSubtitle, heroBg, isHome }) => {
  const sectionRef = useRef(null);

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
    <section className="hero-container" ref={sectionRef}>
      {isHome && (
        <video className="hero-bg-img" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!isHome && <img className="hero-bg-img" src={heroBg} alt="" />}
      <div className="hero___content-container">
        <div className="hero__content">
          <h1 id="title-1">{heroText}</h1>
          <p id="subtitle-1">{heroSubtitle}</p>
          <div className="hero__cta-btns" id="animate-btns">
            <Link to="explore-header" smooth={true} duration={500}>
              <button className="get-started">Get Started</button>
            </Link>
            <Link to="cta__section" smooth={true} duration={500}>
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};
export default Hero;
