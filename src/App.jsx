import "./App.css";
import Base from "./Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import AIEngineer from "./pages/Executive-Sponsorship/AI-Engineer/AI.jsx";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/executive-talent-sponsorship-program/ai-engineer"
            element={<AIEngineer />}
          />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
