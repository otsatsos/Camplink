import { REGIONS } from "../../Data.js";
import { CAMPINGS } from "../../Data.js";
import { AMENITIES } from "../../Data.js";
import FormInput from "../FormInput/FormInput.jsx";
import FormSelect from "../FormSelect/FormSelect.jsx";
import FormTextarea from "../FormTextarea/FormTextarea.jsx";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton.jsx";
import FormFieldset from "../FormFieldset/FormFieldset.jsx";

const FormSubmitCamping = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries);
    console.log(entries);
  }

  return (
    <div className="mt-25 flex flex-col items-center">
      <h1 className="text-5xl font-semibold mb-5">Sugget a camping</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[50%] flex flex-col items-center"
      >
        <div className="text-left">
          <FormInput label="Camping" name="campingName" />
          <FormInput label="Location" name="location" />
          <FormSelect
            label="Region"
            defaultOption="Choose a region"
            items={REGIONS}
            name="region"
          />
          <FormFieldset label="Amenities" items={AMENITIES} name="amenities" />
          <FormTextarea label="Description" name="description" />
          <FormInput label="Telephone" name="telephone" />
          <FormInput label="Email" name="email" />
        </div>
        <SubmitFormButton style="bg-[#e4ac67] mt-5 p-2 rounded-md hover:bg-[#FAAA48] cursor-pointer">
          Submit a camping
        </SubmitFormButton>
      </form>
    </div>
  );
};

export default FormSubmitCamping;
