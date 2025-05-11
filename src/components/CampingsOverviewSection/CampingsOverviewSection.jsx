import { useState } from "react";
import FilteredCampingTiles from "../FilteredCampingTiles/FilteredCampingTiles.jsx";
import SelectBar from "../SelectBar/SelectBar.jsx";

const CampingsOverviewSection = () => {
  const [selectedRegion, setSelectedRegion] = useState("All regions");

  return (
    <>
      <SelectBar
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <FilteredCampingTiles
        region={selectedRegion}
      />
    </>
  );
};

export default CampingsOverviewSection;
