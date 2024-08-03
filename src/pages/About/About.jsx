import "./About.css";
import officeImg from "../../../public/assets/about/office.jpg";
import globalImg from "../../../public/assets/about/map.png";
import teamImg from "../../../public/assets/about/team.jpg";
import ceoImg from "../../../public/assets/about/leader.jpg";
import arrowRight from "../../../public/assets/svg/arrow_right.svg";
import consultImg from "../../../public/assets/svg/consult.svg";
import deliverImg from "../../../public/assets/svg/deliver.svg";
import designImg from "../../../public/assets/svg/design.svg";
import ibmImg from "../../../public/assets/partners/ibm.png";
import microsoftImg from "../../../public/assets/partners/microsoft.png";

import { Helmet } from "react-helmet";
import { coreValues } from "./core-values";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Pairview Training</title>
      </Helmet>
      <section className="about-pairview">
        <div className="content">
          <div className="image-container">
            <img src={officeImg} alt="About Pairview" />
          </div>
          <div className="text-container">
            <h2>About Pairview</h2>
            <p>
              Our belief is “Knowledge is Power”. Knowledge and insight can
              change lives, transform careers, and drive profitable and
              sustainable businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="who-we-are">
        <div className="who-we-are__content">
          <h1>WHO WE ARE</h1>
          <p>
            Pairview was established in 2009 as a business analytics consultancy
            and technology training company. Pairview is headquartered in London
            and rapidly expanding across the EMEA region. Pairview drives big
            data, analytics, and performance innovation within organisations
            through its range of products and services. Pairview works alongside
            businesses as a trusted partner, enhancing expertise, closing skills
            gaps and developing their Analytics Centre of Excellence to drive
            improvements to productivity, profitability and business growth. We
            also work with ambitious individuals to transform their careers by
            offering highly specialised training programmes and recruitment
            services in data and analytics.
          </p>
          <p>
            Pairview was established in 2009 as a business analytics consultancy
            and technology training company. Pairview is headquartered in London
            and rapidly expanding across the EMEA region. Pairview drives big
            data, analytics, and performance innovation within organisations
            through its range of products and services. Pairview works alongside
            businesses as a trusted partner, enhancing expertise, closing skills
            gaps and developing their Analytics Centre of Excellence to drive
            improvements to productivity, profitability and business growth. We
            also work with ambitious individuals to transform their careers by
            offering highly specialised training programmes and recruitment
            services in data and analytics.
          </p>
        </div>
      </section>

      <section className="what-we-do">
        <img src={globalImg} alt="" />
        <div className="what-we-do__content">
          <h1>WHAT WE DO</h1>
          <p>
            We power the success of tomorrow – by enabling the next generation
            of data and analytics specialists, technologies, leaders and
            innovators, and helping our clients to build analytics-driven
            organisations and achieve better performance through data. We
            develop strong partnerships with our clients and partners,
            consistently delivering measurable value through talent enablement
            and service support. Since inception, we have touched over 500 large
            to medium businesses and more than 2000 talents in the UK and
            globally, delivering more than 1 billion pound sterling in savings
            and revenue.
          </p>
        </div>
      </section>

      <section className="how-we-differ">
        <div className="how-we-differ__content">
          <h1>HOW WE DIFFER</h1>
          <div className="cards">
            <div className="card">
              <h2>Service Excellence</h2>
              <p>
                Be Passionate About Excellence is our number one core value. We
                are committed to ensuring the highest standards of training and
                learning experience and delivering on your expectation.
              </p>
            </div>
            <div className="card">
              <h2>Expert Tuition</h2>
              <p>
                Our certified trainers have extensive industry experience and
                passion for impacting knowledge. They will take a hands-on,
                problem-solving approach to training and mentorship to enable
                you to learn actively, practise confidently, and work
                effectively independently or as part of a team.
              </p>
            </div>
            <div className="card">
              <h2>Zero-to-Hero Approach</h2>
              <p>
                Our unique Zero-to-Hero training model will take you from
                foundation level in a given technology or skill through to
                mastery level. Our end-to-end career development process will
                give you the maximum leverage to aim for the best career
                achievement.
              </p>
            </div>
            <div className="card">
              <h2>Return on Investment</h2>
              <p>
                Start to get return on your career investment within months of
                completing your programme and project a substantial progression
                in your career on the long run.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-in-numbers">
        <div className="strength-in-numbers__content">
          <h1>STRENGTH IN NUMBERS</h1>
          <div className="company-stats">
            <div className="stat-card">
              <h2>2000+</h2>
              <p>Professionals and Specialists Developed</p>
            </div>
            <div className="stat-card-red">
              <h2>98%+</h2>
              <p>
                of Delegates Got Jobs or Progressed Their Career Upon Completion{" "}
              </p>
            </div>
            <div className="stat-card">
              <h2>4.7+</h2>
              <p>Service Excellence Score</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pairview">
        <div className="content">
          <div className="image-container">
            <img src={ceoImg} alt="About Pairview" />
          </div>
          <div className="text-container">
            <h2>HOW WE LEAD</h2>
            <p>
              “If there is one thing that all of us at Pairview have in common,
              it is our passion for excellence and our devotion to making a real
              difference for our clients and the wider society. It is ingrained
              in our DNA.”
            </p>
            <p className="ceo-title">Frank Abu - Chief Executive Officer</p>
            <div className="meet-arrow-right">
              <p>Meet Our Team</p>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-core-values">
        <div className="our-core-values__content">
          <h2>OUR CORE VALUES</h2>
          <div className="core-value-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-grid-col">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          <img className="team-img" src={teamImg} alt="" />
        </div>
      </section>

      <section className="how-we-work">
        <div className="how-we-work__content">
          <h2>HOW WE WORK</h2>
          <div className="hww-d-flex">
            <div className="card">
              <img src={consultImg} alt="" />
              <h4>Consult</h4>
              <p>
                We talk with you to understand your background, experience, and
                current abilities. We discuss your desires for career
                development, job preferences, and short to long term goals. We
                pre-qualify you for a programme that can help you achieve the
                next milestone in your career.
              </p>
            </div>
            <div className="card">
              <img src={designImg} alt="" />
              <h4>Design</h4>
              <p>
                We handpick and customise an optimal career programme that can
                help you achieve your career goals. We design a timetable and
                payment plan that suit your schedule and budget as much as
                possible.
              </p>
            </div>
            <div className="card">
              <img src={deliverImg} alt="" />
              <h4>Deliver</h4>
              <p>
                We give you the target objectives that matter so you know your
                programme is making the real difference you need for your
                career. We work with you every step of the way, from the
                one-to-one career consultancy at the beginning right through to
                continuous training and mentoring and recruitment coaching until
                completing your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-partners">
        <div className="partners__content">
          <img src={ibmImg} alt="" />
          <img src={microsoftImg} alt="" />
        </div>
      </section>
    </>
  );
};
export default About;
