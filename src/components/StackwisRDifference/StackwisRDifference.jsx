import Lottie from "react-lottie";
import certified from "../../../src/assets/lottie/certified.json";
import gotJob from "../../../src/assets/lottie/got-job.json";
import fourStars from "../../../src/assets/lottie/four-star.json";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const StackwisRDifference = ({ heading, isHomePage }) => {
  return (
    <section className={`wwd__content ${isHomePage ? "hidden" : ""} `}>
      <h1>{heading}</h1>
      <div className="wwd-d-flex">
        <div className="difference-card">
          <Lottie
            options={defaultOptions(certified)}
            height={"60%"}
            width={"50%"}
          />
          <h1>2000+</h1>
          <p>Professionals and Specialists Developed</p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(gotJob)}
            height={"50%"}
            width={"50%"}
          />
          <h1>98%</h1>
          <p>
            of Delegates Got Jobs or Progressed Their Career Upon Completion
          </p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(fourStars)}
            height={"50%"}
            width={window.innerWidth < 768 ? "60%" : "40%"}
          />
          <h1>4.7+</h1>
          <p>Service Excellence Score</p>
        </div>
      </div>
    </section>
  );
};

export default StackwisRDifference;
