const CampingOverviewTile = ({ tile, handleClick }) => {
  return (
    <>
      <div>
        <img src={tile.img} className="w-full object-fill rounded-md" />
        <div className="pt-2.5">
          <h3 className="text-2xl font-semibold">{tile.name}</h3>
          <p className="w-fit italic font-medium rounded-md">📍 {tile.location}</p>
          <ul className="flex flex-col gap-0.25 pt-1">
            {tile.amenities.map((amenity) => {
              return <li className="text-sm">- {amenity}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CampingOverviewTile;
