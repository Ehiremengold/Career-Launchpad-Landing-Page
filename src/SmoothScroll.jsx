// SmoothScroll.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up smooth scrolling
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
      },
      yPercent: -100,
      ease: "none"
    });
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', height: '100vh' }}>
      <div style={{ position: 'relative', height: '200vh' }}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
