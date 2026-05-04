import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<Inscription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
