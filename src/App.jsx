import "./App.css";
import Base from "./Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={AboutPage} /> */}
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
