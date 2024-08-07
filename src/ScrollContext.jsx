// ScrollContext.js
import React, { createContext, useContext, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollTo = useCallback((section) => {
    gsap.to(window, { duration: 1, scrollTo: section });
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
