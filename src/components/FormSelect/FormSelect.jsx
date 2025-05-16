const FormSelect = ({ label, defaultOption, items, name }) => {
  return (
    <>
      <label className="font-medium block">{label}</label>
      <select
        className="w-95 pl-1 py-1 mb-1.5 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
        name={name}
        placeholder=""
      >
        <option>{defaultOption}</option>
        {items.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default FormSelect;
