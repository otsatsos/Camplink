import { useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import FormSelect from "../FormSelect/FormSelect.jsx";
import FormTextarea from "../FormTextarea/FormTextarea.jsx";
import Button from "../NavButton/NavButton.jsx";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton.jsx";

const FormSubmitCamping = () => {
  const [newCamping, setNewCamping] = useState("");

  return (
    <div className="mt-25 flex flex-col items-center">
      <h1 className="text-5xl font-semibold mb-5">Sugget a camping</h1>
      <form className="w-[50%] flex flex-col items-center">
        <div className="text-left">
          <FormInput label="Camping name" />
          <FormInput label="Location" />
          <FormSelect label="Region" />
          <FormInput label="Amenities" />
          <FormTextarea label="Description" />
          <FormInput label="Telephone" />
          <FormInput label="Email" />
        </div>
        <SubmitFormButton style="bg-[#e4ac67] mt-5 p-2 rounded-md hover:bg-[#FAAA48] cursor-pointer">Submit a camping</SubmitFormButton>
      </form>
    </div>
  );
};

export default FormSubmitCamping;
