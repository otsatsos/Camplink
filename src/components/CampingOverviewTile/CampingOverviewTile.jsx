const CampingOverviewTile = ({
  id,
  name,
  location,
  amenities,
  description,
  telephone,
  email,
  img,
  tileClicked,
  setTileClicked
}) => {

  return (
    <div
      id={id}
      className="w-[30%] h-110 mb-5 flex rounded-md transition-transform hover:-translate-y-0.25 cursor-pointer"
      onClick={() => setTileClicked(!tileClicked)}
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
  );
};

export default CampingOverviewTile;
