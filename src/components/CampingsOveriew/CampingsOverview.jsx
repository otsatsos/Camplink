import { CAMPINGS } from "../../Data";
import AllCampingsOverview from "../AllCampingsOverview/AllCampingsOverview";
import FilteredCampingTiles from "../FilteredCampingTiles/FilteredCampingTiles";

const CampingsOverview = ({ region }) => {
  return (
    <>{region === "All regions" ? <AllCampingsOverview /> : <FilteredCampingTiles region={region} />}</>
  );
};

export default CampingsOverview;
