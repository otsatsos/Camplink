import { CAMPINGS } from "../../Data.js";
import CampingOverviewTile from "../CampingOverviewTile/CampingOverviewTile";

const FilteredCampingTiles = ({ region }) => {
  const filteredCampings = CAMPINGS.filter((camping) => {
    return camping.region === region;
  });

  return (
    <>
      {region === "All regions" ? (
        <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
          {CAMPINGS.map((camping) => {
            return <CampingOverviewTile {...camping} />;
          })}
        </div>
      ) : (
        <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
          {filteredCampings.map((camping) => (
            <CampingOverviewTile key={camping.id} {...camping} />
          ))}
        </div>
      )}
    </>
  );
};

export default FilteredCampingTiles;
