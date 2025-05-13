const FormInput = ({ label }) => {
  return (
    <>
      <label className="font-medium block">{label}</label>
      <input
        className="w-95 h-7 p-1 mb-1.5 bg-white border-2 border-solid border-[#F9EFE0] rounded-md focus:outline-none focus-within:border-[#418050]"
        placeholder=""
      />
    </>
  );
};

export default FormInput;
