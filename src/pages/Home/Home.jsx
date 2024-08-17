import "./Home.css";
import { useEffect } from "react";
// import videoFile from "../../../src/assets/hero-video/hero.mp4";
import "aos/dist/aos.css";
import BlogSection from "../../components/BlogCard/BlogSection.jsx";
import Alumni from "../../components/Alumni/Alumni.jsx";
import { Helmet } from "react-helmet";
import CareerPaths from "../../components/CareerPaths/CareerPaths.jsx";
import StackwisRDifference from "../../components/StackwisRDifference/StackwisRDifference.jsx";
import CTASection from "../../components/CTA/CTASection.jsx";
import heroBg from "../../../src/assets/hero-video/hero-bg.jpg";
import Hero from "../../components/Hero/Hero.jsx";

const Home = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        // } else {
        //   entry.target.classList.remove("show");
        // }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main>
      <Helmet>
        <title>Home | StackwisR</title>
      </Helmet>

      <Hero
        heroBg={heroBg}
        heroText={"Redefine possibilities with StackwisR."}
        heroSubtitle={
          " Future-proof your career with our AI-driven training and career development"
        }
      />
      <CareerPaths isHome={true} />

      <StackwisRDifference
        heading={"Experience the StackwisR Difference"}
        isHomePage={true}
      />

      <Alumni isHome={true} />

      <BlogSection />
      <CTASection />
    </main>
  );
};
export default Home;
