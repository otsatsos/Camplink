const CampingDetailsTile = ({ tile }) => {

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">{tile.name}</h2>
        <p className="pt-2">{tile.description}</p>
        <p className="pt-2 font-bold">Amenities</p>
      </div>
      <ul className="flex flex-col gap-0.25 pt-1">
        {tile.amenities.map((amenity) => {
          return <li className="text-sm">- {amenity}</li>;
        })}
      </ul>
      <ul>
        <li className="pt-2 font-bold">Info</li>
        <li className="italic pt-1">📍 {tile.location}</li>
        <li>{tile.telephone}</li>
        <li>{tile.email}</li>
      </ul>
    </>
  );
};

export default CampingDetailsTile;
