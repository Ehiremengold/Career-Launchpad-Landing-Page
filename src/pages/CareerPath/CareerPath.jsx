import Hero from "../../components/Hero/Hero";
import heroBg from "../../../public/assets/hero-video/hero-career.jpg";
import "./CareerPath.css";
import CareerPaths from "../../components/CareerPaths/CareerPaths";

const CareerPath = () => {
  return (
    <>
      <Hero
        heroBg={heroBg}
        heroText={"Explore Your Future"}
        heroSubtitle={
          "Our flexible programs are designed to fit your work schedule and provide you with the skills needed to excel in today's job market."
        }
      />

      <section className="our-career-paths">
        <div className="wrapper">
          <h1>Our Career Paths</h1>
          <div className="our-career-paths__cards">
            <div className="our-career-path__card card">
              <h3>Data Analyst</h3>
              <p>
                <strong>Role:</strong> Data analysts are responsible for
                collecting, processing, and performing statistical analyses on
                large datasets. They help organizations make data-driven
                decisions by interpreting complex data and presenting insights
                in a clear, actionable way.
              </p>
              <p>
                <strong>Skills:</strong> Proficiency in statistical tools and
                software (e.g., Excel, SQL, R, Python), data visualization,
                analytical thinking, and attention to detail.
              </p>
              <p>
                <strong>Career Path:</strong> Junior Data Analyst → Data Analyst
                → Senior Data Analyst → Data Scientist/Data Engineer
              </p>
            </div>
            <div className="our-career-path__card card">
              <h3>Business Analyst</h3>
              Business Analyst
Role: Business analysts bridge the gap between IT and business units. They analyze business processes, identify needs, and recommend solutions to improve efficiency, productivity, and profitability.
Skills: Strong analytical and problem-solving skills, proficiency in business process modeling, excellent communication, and familiarity with project management methodologies.
Career Path: Junior Business Analyst → Business Analyst → Senior Business Analyst → Business Analysis Manager/Consultant
            </div>
            <div className="our-career-path__card card">
              <h3>CyberSecurity</h3>
              <p>
                Protect and secure digital environments. Our Cybersecurity
                program equips you with the skills to defend against cyber
                threats and ensure data integrity
              </p>
            </div>
            <div className="our-career-path__card card">
              <h3>CyberSecurity</h3>
              <p>
                <strong>Role:</strong> Cybersecurity analysts protect an
                organization&apos;s computer systems and networks from cyber
                threats. They monitor for security breaches, investigate
                incidents, and implement security measures to prevent future
                attacks.
              </p>
              <p>
                <strong> Skills:</strong> Knowledge of security frameworks and
                protocols, ethical hacking, risk management, incident response,
                and familiarity with security tools and technologies.
              </p>
              <p>
                <strong> Career Path:</strong> Junior Cybersecurity Analyst →
                Cybersecurity Analyst → Senior Cybersecurity Analyst →
                Cybersecurity Manager/Consultant
              </p>
            </div>
            <div className="our-career-path__card card">
              <h3>CyberSecurity</h3>
              <p>
                Protect and secure digital environments. Our Cybersecurity
                program equips you with the skills to defend against cyber
                threats and ensure data integrity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="keyword-search">
        <input type="text" placeholder="Search Keyword" />
      </section>
    </>
  );
};
export default CareerPath;
