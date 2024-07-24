import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
export default Base;
