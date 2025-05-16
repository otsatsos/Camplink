const FormFieldset = ({ label, items,name }) => {
  return (
    <>
      <label className="font-medium block">{label}</label>
      <fieldset className="grid grid-cols-2 w-95 h-50 p-1 mb-1.5 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]">
        {items.map((item, index) => {
          return (
            <div className="flex flex-row gap-0.5">
              <input type="checkbox" value={item} name={name} key={index} />
              <label key={index}>{item}</label>
            </div>
          );
        })}
      </fieldset>
    </>
  );
};

export default FormFieldset;
