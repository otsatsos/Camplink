import { useState } from "react";
import CampingDetailsTile from "../CampingDetailsTile/CampingDetailsTile.jsx";

const CampingOverviewTile = ({
  id,
  name,
  location,
  amenities,
  description,
  telephone,
  email,
  img,
}) => {
  const [overviewVisible, setOverviewVisible] = useState(true);

  const handleTileClick = () => {
    setOverviewVisible(!overviewVisible);
    return;
  };

  return overviewVisible ? (
    <div
      id={id}
      className="w-[30%] h-110 mb-5 flex rounded-md transition-transform hover:-translate-y-0.25 cursor-pointer"
      onClick={() => handleTileClick()}
    >
      <div>
        <img src={img} className="w-full object-fill rounded-md" />
        <div className="pt-2.5">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="w-fit italic font-medium rounded-md">📍 {location}</p>
          <ul className="flex flex-col gap-0.25 pt-1">
            {amenities.map((amenity) => {
              return <li className="text-sm">- {amenity}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <CampingDetailsTile
      {...{ id, name, location, amenities, description, telephone, email, img }}
    />
  );
};

export default CampingOverviewTile;
