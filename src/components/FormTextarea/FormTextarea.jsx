const FormTextarea = ({label,name}) => {
  return (
    <>
      <label className="font-medium block">{label}</label>
      <textarea
        rows={3}
        minLength={50}
        maxLength={200}
        name={name}
        className="w-95 p-1 mb-1.5 bg-white border-2 border-solid border-[#F9EFE0] rounded-md resize-none focus:outline-none focus-within:border-[#418050]"
        placeholder=""
      />
    </>
  );
};

export default FormTextarea;
