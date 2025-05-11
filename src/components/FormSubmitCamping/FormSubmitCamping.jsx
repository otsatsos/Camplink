import { useState } from "react";
import { REGIONS } from "../../Data.js";

const FormSubmitCamping = () => {
  const [newCamping, setNewCamping] = useState("");

  return (
    <div className="mt-25 flex flex-col items-center">
      <h1 className="text-5xl font-semibold mb-5">Sugget a camping</h1>
      <form className="w-[50%] flex flex-col items-center">
        <div className="text-left">
          <label className="font-medium block">Camping name</label>
          <input
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />

          <label className="font-medium block">Location</label>
          <input
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />

          <label className="font-medium block">Region</label>
          <select
            className="w-95 pl-1 py-1.75 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          >
            <option>Choose a region</option>
            {REGIONS.map((region) => {
              return <option>{region}</option>;
            })}
          </select>
          <label className="font-medium block">Amenities</label>
          <input
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />
          <label className="font-medium block">Description</label>
          <textarea
            rows={2}
            minLength={50}
            maxLength={200}
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md resize-none focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />
          <label className="font-medium block">Telephone</label>
          <input
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />
          <label className="font-medium block">Email</label>
          <input
            className="w-95 p-1 mb-3 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
            placeholder=""
          />
        </div>

        <button>BUTTON</button>
      </form>
    </div>
  );
};

export default FormSubmitCamping;
