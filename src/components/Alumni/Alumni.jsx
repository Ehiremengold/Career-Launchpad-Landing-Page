import { useState } from "react";
import { testimonials } from "./testimonialData.js";
import navRightArrow from "../../../src/assets/svg/nav-right-arrow.svg";
import navLeftArrow from "../../../src/assets/svg/nav-left-arrow.svg";

const Alumni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTestimonial = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (currentIndex > 0 && !isTransitioning) {
      changeTestimonial(currentIndex - 1);
    }
  };

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1 && !isTransitioning) {
      changeTestimonial(currentIndex + 1);
    }
  };

  return (
    <section className="alumni hidden" id="our-success">
      <div className="testimonial-section">
        <h2>Real stories, Real success</h2>
        <div className="testimonial-container">
          <button
            className={`testimonial-nav left ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={prevTestimonial}
            disabled={currentIndex === 0 || isTransitioning}
          >
            <img src={navLeftArrow} alt="Previous" />
          </button>

          <div
            className={`testimonial-content ${
              isTransitioning
                ? currentIndex > 0
                  ? "slide-right-exit-active"
                  : "slide-left-exit-active"
                : ""
            }`}
          >
            <div className="testimonial-text">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>
                <strong>Company: {testimonials[currentIndex].company}</strong>
              </p>
              <p>{testimonials[currentIndex].feedback}</p>
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
            disabled={
              currentIndex === testimonials.length - 1 || isTransitioning
            }
          >
            <img src={navRightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
