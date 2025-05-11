import logo from "../../assets/navbar-logo.png";
import NavbarButton from "../NavbarButton/NavbarButton";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 fixed z-10 top-0 right-0 left-0 flex items-center justify-between bg-[#FFFBF5] border-b-1 border-b-solid border-b-[#F9EFE0] shadow-xs shadow-[#F9EFE0] text-[#28282B]">
        <img
          src={logo}
          alt="Camplink Logo"
          className="ml-7 h-20 hover:cursor-pointer"
        />
        <div>
          <ul className="flex gap-6 mr-12.5 text-lg">
            <NavbarButton className="bg-[#41804F] text-[#FFFDFF] p-2 cursor-pointer rounded-md hover:bg-[#226933]">
              Explore
            </NavbarButton>
            <NavbarButton className="p-2 cursor-pointer transform hover:-translate-y-0.25 duration-200 hover:text-[#2C2F23]">
              Saved
            </NavbarButton>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
