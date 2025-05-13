const CampingDetailsTile = ({ camping }) => {

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">{camping.name}</h2>
        <p className="pt-2">{camping.description}</p>
        <p className="pt-2 font-bold">Amenities</p>
      </div>
      <ul className="flex flex-col gap-0.25 pt-1">
        {camping.amenities.map((amenity) => {
          return <li className="text-sm">- {amenity}</li>;
        })}
      </ul>
      <ul>
        <li className="pt-2 font-bold">Info</li>
        <li className="italic pt-1">📍 {camping.location}</li>
        <li>{camping.telephone}</li>
        <li>{camping.email}</li>
      </ul>
    </>
  );
};

export default CampingDetailsTile;
