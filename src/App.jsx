import "./App.css";
import Base from "./Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
// import About from "./pages/About/About.jsx";
import CareerPath from "./pages/CareerPath/CareerPath.jsx";
import WildCard from "./WildCard.jsx";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/career-paths" element={<CareerPath />} />
          <Route path="*" element={<WildCard />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
