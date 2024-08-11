import morePaths from "../../../public/assets/icons/right-arrow.png";
const CareerPaths = ({ isHome }) => {
  return (
    <section
      className={`explore-paths ${isHome ? "hidden" : ""}`}
      id="career-paths"
    >
      <div className="wrapper">
        <div className="explore-header">
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
              Master the art of data analysis and drive business decisions with
              our comprehensive training. Gain hands-on experience with
              industry-standard tools and techniques
            </p>
            <a href="">Learn more</a>
          </div>
          <div className="explore-path__card card">
            <h3>Business Analyst</h3>
            <p>
              Become a key player in business strategy and operations. Learn to
              bridge the gap between IT and business with our export-led
              Business Analyst program.
            </p>
            <a href="">Learn more</a>
          </div>
          <div className="explore-path__card card">
            <h3>CyberSecurity</h3>
            <p>
              Protect and secure digital environments. Our Cybersecurity program
              equips you with the skills to defend against cyber threats and
              ensure data integrity
            </p>
            <a href="">Learn more</a>
          </div>
        </div>
      </div>
      <a href="/explore-paths">
        <div className="more-paths">
          <img src={morePaths} alt="" />
        </div>
      </a>
    </section>
  );
};
export default CareerPaths;
