import Lottie from "react-lottie";
import animationData from "../public/assets/lottie/page-construction.json";

const Wildcard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Page Under Construction</h2>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginInline: "auto",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
};

export default Wildcard;
