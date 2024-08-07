import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = ({ isMounted }) => {
  const sectionRef = useRef(null);

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

  useLayoutEffect(() => {
    if (!isMounted) return;
    const ctx = gsap.context(() => {
      gsap.from(".text-section, .form-section", {
        scrollTrigger: {
          trigger: ".cta__section",
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
    <section className="cta__section" ref={sectionRef}>
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
            <button className="cta-btn">BOOK A CALL</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
