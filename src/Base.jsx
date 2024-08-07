import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Base = ({ children }) => {
  return (
    // <ScrollProvider>
      // <SmoothScroll>
      <>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
        <Footer />
        </>
      // </SmoothScroll>
    // </ScrollProvider>
  );
};
export default Base;
