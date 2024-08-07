import Lottie from "react-lottie";
import certified from "../../../public/assets/lottie/certified.json";
import gotJob from "../../../public/assets/lottie/got-job.json";
import fourStars from "../../../public/assets/lottie/four-star.json";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

gsap.registerPlugin(ScrollTrigger);

const StackwisRDifference = ({ isMounted }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!isMounted) return;
    const ctx = gsap.context(() => {
      gsap.from(".difference-card", {
        scrollTrigger: {
          trigger: ".wwd__content",
          start: "top 80%", // Adjust this to control when the animation starts
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wwd__content" ref={sectionRef}>
      <h1>Experience the StackwisR Difference</h1>
      <div className="wwd-d-flex">
        <div className="difference-card">
          <Lottie
            options={defaultOptions(certified)}
            height={"40%"}
            width={"40%"}
          />
          <h1>2000+</h1>
          <p>Professionals and Specialists Developed</p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(gotJob)}
            height={"40%"}
            width={"40%"}
          />
          <h1>98%</h1>
          <p>
            of Delegates Got Jobs or Progressed Their Career Upon Completion
          </p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(fourStars)}
            height={"40%"}
            width={"40%"}
          />
          <h1>4.7+</h1>
          <p>Service Excellence Score</p>
        </div>
      </div>
    </section>
  );
};

export default StackwisRDifference;
