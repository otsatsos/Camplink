import { CAMPINGS } from "../../Data.js";
import NAMessage from "../NAMessage/NAMessage.jsx";
import CampingTile from "../CampingTile/CampingTile.jsx";

const FilteredCampingTiles = ({ region }) => {

  let camps = "";
  if (region === "All regions") {
    camps = CAMPINGS;
  } else {
    camps = CAMPINGS.filter((camping) => {
      return camping.region === region;
    });
  }

  return (
    <>
      {camps.length > 0 ? (
        <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
          {camps.map((camping) => {
            return <CampingTile key={camping.id} camping={camping} />;
          })}
        </div>
      ) : (
        <NAMessage
          title="There are no camping inputs yet"
          message="Do you have a suggestion?"
          cta={"Submit a camping"}
          link="/submit-camping"
        />
      )}
    </>
  );
};

export default FilteredCampingTiles;
