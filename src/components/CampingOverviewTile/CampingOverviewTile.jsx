const CampingOverviewTile = ({ camping }) => {
  return (
    <>
      <div>
        <img src={camping.img} className="w-full h-64 object-cover rounded-md" />
        <div className="pt-2.5">
          <h3 className="text-2xl font-semibold">{camping.name}</h3>
          <p className="w-fit italic font-medium rounded-md">📍 {camping.location}</p>
          <ul className="flex flex-col gap-0.25 pt-1">
            {camping.amenities.map((amenity) => {
              return <li className="text-sm">- {amenity}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CampingOverviewTile;
