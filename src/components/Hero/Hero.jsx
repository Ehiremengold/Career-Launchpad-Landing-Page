/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ heroText, heroSubtitle, heroBg }) => {
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
      {/* <video className="hero-video" autoPlay loop muted>
      <source src={videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
      <img className="hero-bg-img" src={heroBg} alt="" />
      <div className="overlay">
        <div className="hero___content-container">
          <div className="hero__content">
            <h1 id="title-1">{heroText}</h1>
            <p id="subtitle-1">{heroSubtitle}</p>
            <div className="hero__cta-btns" id="animate-btns">
              <button className="get-started">
                Get Started
              </button>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
