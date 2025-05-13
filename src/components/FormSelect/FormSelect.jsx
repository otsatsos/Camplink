import { REGIONS } from "../../Data.js";

const FormSelect = ({ label }) => {
  return (
    <>
      <label className="font-medium block">{label}</label>
      <select
        className="w-95 pl-1 py-1.75 mb-1.5 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
        placeholder=""
      >
        <option>Choose a region</option>
        {REGIONS.map((region) => {
          return <option>{region}</option>;
        })}
      </select>
    </>
  );
};

export default FormSelect;
