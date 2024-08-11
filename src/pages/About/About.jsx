import "./About.css";
import * as images from "../../../public/assets/about/aboututils.js";
import StackwisRDifference from "../../components/StackwisRDifference/StackwisRDifference";
import CareerPaths from "../../components/CareerPaths/CareerPaths";

const About = () => {
  return (
    <>
      <div className="about-relation">
        <section className="about-hero">
          <div className="about-hero-info">
            <h1>About Us</h1>
            <p>
              Our belief is “Knowledge is Power”. Knowledge and insight can
              change lives, transform careers, and drive profitable and
              sustainable businesses.
            </p>
          </div>
          <img src={images.heroBg} alt="" />
        </section>
        <img className="team-img" src={images.teamImg} alt="" />
      </div>

      <section className="wwa">
        <div className="section__wrapper">
          <div className="wwa__description">
            <h2>What We Are</h2>
            <p>
              StackwisR was established as a premier technology training and
              consultancy firm, headquartered in London and expanding rapidly
              across the EMEA region. We specialise in data science, AI, and
              technology-driven career development, empowering individuals and
              organisations to achieve their full potential.
            </p>
          </div>
          <div className="wwa__img">
            <img src={images.wwaImg} alt="" />
          </div>
        </div>
      </section>

      <section className="wwd">
        <div className="section__wrapper">
          <div className="wwd__img">
            <img src={images.wwdImg} alt="" />
          </div>
          <div className="wwd__description">
            <h2>What We Do</h2>
            <p>
              We transform careers by equipping professionals with essential
              tech skills to thrive in the digital age. Through our immersive
              programs and strategic partnerships, we foster innovation and
              business growth. With over 2000 professionals trained and success
              delivered to 500+ businesses, we are redefining the future of
              work.
            </p>
          </div>
        </div>
      </section>

      <StackwisRDifference heading={"Our Impact"} />

      <section className="wcs">
        <h1>Why Choose StackwisR</h1>
        <div className="section__wrapper">
          <div className="container-1">
            <img src={images.expertImg} alt="" />
            <h3>Expert-led Training</h3>
            <p>
              At StackwisR, we offer training led by industry veterans and
              provide real-world projects to ensure you gain the practical
              skills that employers demand. Our programs include one-on-one
              expert mentorship and continuous on-the-job support to help you
              thrive in your new career.
            </p>
          </div>
          <div className="container-2">
            <img src={images.provenImg} alt="" />
            <h3>Proven Track Record</h3>
            <p>
              Our results speak for themselves with over 2000+ professionals
              developed, 500+ businesses benefited, and a 4.7+ customer
              satisfaction score. Our programs boast a 98% job placement rate,
              ensuring that our delegates not only learn but also secure
              employment in their desired fields.
            </p>
          </div>
          <div className="container-3">
            <img src={images.flexibleImg} alt="" />
            <h3>Flexible Payment and Support</h3>
            <p>
              We understand that financial flexibility is crucial, which is why
              we offer instalment payment plans. Our support doesn’t end at
              training; we provide continuous guidance and job placement
              assistance to ensure your success.
            </p>
          </div>
        </div>
      </section>

      <section className="hwd">
        <h1>How We Differ</h1>
        <div className="section__wrapper">
          <div className="differ-container">
            <div className="differ-icon">
              <img src={images.proofed} alt="" />
            </div>
            <div>
              <h3>Future-Proofed Curriculum</h3>
              <p>
                Our programs are designed to anticipate industry shifts and
                equip learners with skills for the future.{" "}
              </p>
            </div>
          </div>

          <div className="differ-container">
            <div className="differ-icon">
              <img src={images.holi} alt="" />
            </div>
            <div>
              <h3>Holistic Talent Development</h3>
              <p>
                We nurture not just technical proficiency, but also essential
                soft skills and leadership qualities.{" "}
              </p>
            </div>
          </div>

          <div className="differ-container">
            <div className="differ-icon">
              <img src={images.returnSvg} alt="" />
            </div>
            <div>
              <h3>Return on Investment</h3>
              <p>
                Achieve career progression within months of program completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="oa">
        <h1>Our Approach</h1>
        <div className="section__wrapper">
          <div className="oa-container">
            <div className="oa-icon">
              <img src={images.focus} alt="" />
            </div>
            <h3>Focus on the Future:</h3>
            <p>
              Our programs are meticulously designed to equip you with the
              skills needed for the jobs of tomorrow.
            </p>
          </div>

          <div className="oa-container">
            <div className="oa-icon">
              <img src={images.deliver} alt="" />
            </div>
            <h3>We Deliver and</h3>
            <p>
              Provide continuous training, mentoring, and recruitment coaching
              until program completion.
            </p>
          </div>

          <div className="oa-container">
            <div className="oa-icon">
              <img src={images.experiential} alt="" />
            </div>
            <h3>Experiential Focus:</h3>
            <p>
              You&apos;ll gain hands-on experience through real-world projects,
              ensuring you&apos;re job-ready.
            </p>
          </div>
        </div>
      </section>

      <CareerPaths />

      <section className="git">
        <h1>Get in Touch</h1>
        <p>We&apos;d love to hear from you. Here&apos;s how you can reach us</p>
        <div className="section__wrapper">
          <div className="git-container">
            <img src={images.phone} alt="" />
            <h4>Talk to support</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="git-container">
            <img src={images.email} alt="" />
            <h4>Send us an Email</h4>
            <a href="mailto:info@stckwisr.co.uk">info@stckwisr.co.uk</a>
          </div>
          <div className="git-container">
            <img src={images.location} alt="" />
            <h4>Visit our office</h4>
            <p>
              Solent Business Park, Steel House, Plot 4300, Fareham Hampshire
              PO15 7FP
            </p>
          </div>
        </div>
        <div className="git__cta">
          <h2>Any Questions?</h2>
          <p>Click the button below and we will get back to you</p>
          <button className="git__cta-btn">Contact us</button>
        </div>
      </section>
    </>
  );
};
export default About;
