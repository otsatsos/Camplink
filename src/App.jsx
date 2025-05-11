import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import SelectBar from "./components/SelectBar/SelectBar.jsx";
import CampingsOverview from "./components/CampingsOveriew/CampingsOverview.jsx";
import { CAMPINGS } from "./Data.js";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SelectBar placeholder="Search for an area" />
      <CampingsOverview />
      <p className="mt-40 text-red-600 text-center">in progress</p>
    </>
  );
}

export default App;
