import "./Home.css";
import videoFile from "../../../public/assets/hero-video/hero.mp4";
import BlogSection from "../../components/BlogCard/BlogSection.jsx";
import Alumni from "../../components/Alumni/Alumni.jsx";
import certified from "../../../public/assets/lottie/certified.json";
import gotJob from "../../../public/assets/lottie/got-job.json";
import fourStars from "../../../public/assets/lottie/four-star.json";
import Lottie from "react-lottie";
import { Helmet } from "react-helmet";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const Home = () => {
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

  return (
    <>
      <Helmet>
        <title>Home | StackwisR</title>
      </Helmet>
      <section className="hero-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="hero___content-container">
            <div className="hero__content">
              <h1>Redefine possibilities with StackwisR.</h1>
              <p>
                Future-proof your career with our AI-driven training and career
                development
              </p>
              <div className="hero__cta-btns">
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

      <section className="explore-paths">
        <div className="wrapper">
          <div>
            <h2>Explore Our Career Paths</h2>
            <p>
              Unlock new career opportunities in the most in-demand fields with
              our expert-led programs
            </p>
          </div>
          <div className="explore-paths__cards">
            <div className="explore-path__card card">
              <h3>Data Analyst</h3>
              <p>
                Master the art of data analysis and drive business decisions
                with our comprehensive training. Gain hands-on experience with
                industry-standard tools and techniques
              </p>
              <a href="">Learn more</a>
            </div>
            <div className="explore-path__card card">
              <h3>Business Analyst</h3>
              <p>
                Become a key player in business strategy and operations. Learn
                to bridge the gap between IT and business with our export-led
                Business Analyst program.
              </p>
              <a href="">Learn more</a>
            </div>
            <div className="explore-path__card card">
              <h3>CyberSecurity</h3>
              <p>
                Protect and secure digital environments. Our Cybersecurity
                program equips you with the skills to defend against cyber
                threats and ensure data integrity
              </p>
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      {/* <Lottie
              options={defaultOptions(certified)}
              height={200}
              width={200}
            /> */}
      <section className="wwd__content">
        <h1>Experience the StackwisR Difference</h1>
        <div className="wwd-d-flex">
          <div className="difference-card"></div>
          <div className="difference-card"></div>
          <div className="difference-card"></div>
        </div>
      </section>

      <Alumni />

      <BlogSection />

      <section className="cta__section">
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
    </>
  );
};
export default Home;
