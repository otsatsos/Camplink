import { CAMPINGS } from "../../Data.js";
import NAMessage from "../NAMessage/NAMessage.jsx";
import CampingTile from "../CampingTile/CampingTile.jsx";

const FilteredCampingTiles = ({ region }) => {

  const regionHasCamping = (region) => {
    return CAMPINGS.filter((camping) => camping.region === region).length>0;
  }

  const filteredCampings = CAMPINGS.filter((camping) => {
    return camping.region === region;
  });

  return (
    <>
      {region === "All regions" ? (
        <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
          {CAMPINGS.map((camping) => {
            return <CampingTile {...camping} />;
          })}
        </div>
      ) : regionHasCamping(region) ? (
        <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
          {filteredCampings.map((camping) => {
            return <CampingTile {...camping} />;
          })}
        </div>
      ) : (
            <NAMessage title="There are no camping inputs yet" message="Do you have a suggestion?" cta={"Submit a camping"} link="/submit-camping" />
      )}
    </>
  );
};

export default FilteredCampingTiles;
