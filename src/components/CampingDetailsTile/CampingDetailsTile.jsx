const CampingDetailsTile = ({
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
}) => {
  return (
    <div
      className="w-[30%] h-110 mb-5 pt-4 pl-4 pb-2 bg-[#FAAA48] rounded-md transition-transform hover:-translate-y-0.25 cursor-pointer text-[#28282B]"
      onClick={() => setTileClicked(!tileClicked)}
    >
      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="pt-2">{description}</p>
        <p className="pt-2 font-bold">Amenities</p>
      </div>
      <ul className="flex flex-col gap-0.25 pt-1">
        {amenities.map((amenity) => {
          return <li className="text-sm">- {amenity}</li>;
        })}
      </ul>
      <ul>
        <li className="pt-2 font-bold">Info</li>
        <li className="italic pt-1">📍 {location}</li>
        <li>{telephone}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default CampingDetailsTile;
