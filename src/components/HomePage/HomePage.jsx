import Navbar from "../Navbar/Navbar";
import CampingsOverviewSection from "../CampingsOverviewSection/CampingsOverviewSection.jsx";
import logo from "../../assets/navbar-logo.png";

const HomePage = () => {
  return (
    <>
      <Navbar
        img={logo}
        altText="Camplink logo"
        buttonsText={["", "Submit a camping", "Sign in"]}
        buttonStyle={[
          "p-2 ml-9 hover:cursor-pointer",
          "font-medium p-2 cursor-pointer hover:text-[#226933]",
          "bg-[#357b45] text-[#FFFBF5] p-2 cursor-pointer rounded-md hover:bg-[#226933]",
        ]}
        buttonsLinks={["/", "/submit-camping", ""]}
      />
      <CampingsOverviewSection />
    </>
  );
};

export default HomePage;
