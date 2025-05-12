import CampingOverviewTile from "../CampingOverviewTile/CampingOverviewTile";
import CampingDetailsTile from "../CampingDetailsTile/CampingDetailsTile";
import { useState } from "react";

const CampingTile = ({ tile }) => {
  const [tileClicked, setTileClicked] = useState(false);

  const handleClick = () => {
    setTileClicked(!tileClicked);
  };
  
  return (
    <>
      <div
        className={`${
          tileClicked
            ? "pt-4 pl-4 pb-2 bg-[#FAAA48] transition-transform text-[#28282B]"
            : "flex"
        } w-[30%] h-110 mb-5 rounded-md transition-transform hover:-translate-y-0.25 cursor-pointer`}
        onClick={() => handleClick()}
      >
        {tileClicked ? (
          <CampingDetailsTile tile={tile} />
        ) : (
          <CampingOverviewTile tile={tile} />
        )}
      </div>
    </>
  );
};

export default CampingTile;
