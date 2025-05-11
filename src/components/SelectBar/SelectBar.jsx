import { useState } from "react";
import imgSearch from "../../assets/search-icon.png";
import { CAMPINGS } from "../../Data.js";
import { REGIONS } from "../../Data.js";
import CampingsOverview from "../CampingsOveriew/CampingsOverview.jsx";


const SelectBar = ({ ...props }) => {
  const [select, setSelect] = useState("All regions");
  
  return (
    <>
      <div className="w-[30%] mt-25 mx-auto">
        <h2 className="block text-center text-4xl pb-2.5 text-[#28282B]">
          Find a camping
        </h2>
        <label
          htmlFor="inputCamping"
          className="block text-center text-md pb-2.5 text-[#28282B]"
        >
          Choose a region
        </label>
        <select value={select} onChange={(e) => setSelect(e.target.value)} className="w-full h-7 text-center flex bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]">
          <option>All regions</option>
          {REGIONS.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </div>
      <CampingsOverview region={select}/>
    </>
  );
};

export default SelectBar;
