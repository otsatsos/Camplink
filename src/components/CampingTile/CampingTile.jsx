import CampingOverviewTile from "../CampingOverviewTile/CampingOverviewTile";
import CampingDetailsTile from "../CampingDetailsTile/CampingDetailsTile";
import { useState } from "react";

const CampingTile = ({
  id,
  name,
  location,
  amenities,
  description,
  telephone,
  email,
  img,
}) => {
  const [tileClicked, setTileClicked] = useState(false);

  return (
    <>
      {tileClicked ? (
        <CampingDetailsTile
          {...{
            id,
            name,
            location,
            amenities,
            description,
            telephone,
            email,
            img,
            tileClicked,
            setTileClicked,
          }}
        />
      ) : (
        <CampingOverviewTile
          {...{
            id,
            name,
            location,
            amenities,
            description,
            telephone,
            email,
            img,
            tileClicked,
            setTileClicked,
          }}
        />
      )}
    </>
  );
};

export default CampingTile;
