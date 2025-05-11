import Navbar from "../Navbar/Navbar";
import logo from "../../assets/navbar-logo.png";
import FormSubmitCamping from "../FormSubmitCamping/FormSubmitCamping.jsx";

const SubmitCamping = () => {
  return (
    <>
      <Navbar
        img={logo}
        altText="Camplink logo"
        buttonsText={["", "Explore", "Sign in"]}
        buttonStyle={[
          "p-2 ml-9 hover:cursor-pointer",
          "font-medium p-2 cursor-pointer hover:text-[#226933]",
          "bg-[#357b45] text-[#FFFBF5] p-2 cursor-pointer rounded-md hover:bg-[#226933]",
        ]}
        buttonsLinks={["/", "/", ""]}
      />
      <FormSubmitCamping />
    </>
  );
};

export default SubmitCamping;
