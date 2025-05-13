import CampingOverviewTile from "../CampingOverviewTile/CampingOverviewTile";
import CampingDetailsTile from "../CampingDetailsTile/CampingDetailsTile";
import { useState } from "react";

const CampingTile = ({ camping }) => {
  const [tileClicked, setTileClicked] = useState(false);

  const handleClick = () => {
    setTileClicked((clicked) => !clicked);
  };
  
  return (
    <>
      <div
        className={`${
          tileClicked
            ? "pt-4 pl-4 pb-2 bg-[#FAAA48] transition-transform text-[#28282B]"
            : "flex"
        } w-[30%] h-110 mb-5 rounded-md transition-transform hover:-translate-y-0.25 cursor-pointer`}
        onClick={handleClick}
      >
        {tileClicked ? (
          <CampingDetailsTile camping={camping} />
        ) : (
          <CampingOverviewTile camping={camping} />
        )}
      </div>
    </>
  );
};

export default CampingTile;
