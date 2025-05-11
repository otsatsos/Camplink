import HomePage from "./components/HomePage/HomePage.jsx";
import SubmitCamping from "./components/SubmitCamping/SubmitCamping.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/submit-camping" element={<SubmitCamping />} />
    </Routes>
  );
}

export default App;
