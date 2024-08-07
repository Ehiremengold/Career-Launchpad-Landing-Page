import Lottie from "react-lottie";
import certified from "../../../public/assets/lottie/certified.json";
import gotJob from "../../../public/assets/lottie/got-job.json";
import fourStars from "../../../public/assets/lottie/four-star.json";

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});


const StackwisRDifference = () => {
  
  return (
    <section className="wwd__content hidden">
      <h1>Experience the StackwisR Difference</h1>
      <div className="wwd-d-flex">
        <div className="difference-card">
          <Lottie
            options={defaultOptions(certified)}
            height={"60%"}
            width={"80%"}
          />
          <h1>2000+</h1>
          <p>Professionals and Specialists Developed</p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(gotJob)}
            height={"60%"}
            width={"80%"}
          />
          <h1>98%</h1>
          <p>
            of Delegates Got Jobs or Progressed Their Career Upon Completion
          </p>
        </div>
        <div className="difference-card">
          <Lottie
            options={defaultOptions(fourStars)}
            height={"60%"}
            width={window.innerWidth <= 768 ? "60%" : "65%"}
          />
          <h1>4.7+</h1>
          <p>Service Excellence Score</p>
        </div>
      </div>
    </section>
  );
};

export default StackwisRDifference;
