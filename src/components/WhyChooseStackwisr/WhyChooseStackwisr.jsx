import * as images from "../../../public/assets/about/aboututils.js";

const WhyChooseStackwisr = () => {
  return (
    <section className="wcs">
      <h1>Why Choose StackwisR</h1>
      <div className="section__wrapper">
        <div className="container-1">
          <img src={images.expertImg} alt="" />
          <h3>Expert-led Training</h3>
          <p>
            At StackwisR, we offer training led by industry veterans and provide
            real-world projects to ensure you gain the practical skills that
            employers demand. Our programs include one-on-one expert mentorship
            and continuous on-the-job support to help you thrive in your new
            career.
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
            We understand that financial flexibility is crucial, which is why we
            offer instalment payment plans. Our support doesn’t end at training;
            we provide continuous guidance and job placement assistance to
            ensure your success.
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseStackwisr;
