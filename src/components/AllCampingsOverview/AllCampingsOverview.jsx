import { CAMPINGS } from "../../Data";
import CampingOverviewTile from "../CampingOverviewTile/CampingOverviewTile.jsx"

const AllCampingsOverview = () => {
    return (
      <div className="w-[80%] m-auto mt-10 flex flex-wrap gap-4 items-center justify-evenly text-[#28282B]">
        {CAMPINGS.map((camping) => {
          return <CampingOverviewTile {...camping} />;
        })}
      </div>
    );
}

export default AllCampingsOverview;