
import NavbarButton from "../NavbarButton/NavbarButton";

const Navbar = ({ img, altText, imgLink, buttonsText, buttonStyle, buttonsLinks }) => {
  return (
    <>
      <nav className="w-full h-20 fixed z-10 top-0 right-0 left-0 flex items-center justify-between bg-[#FFFBF5] border-b-1 border-b-solid border-b-[#F9EFE0] shadow-xs shadow-[#F9EFE0] text-[#28282B]">
        <a href={imgLink} className="ml-2 hover:cursor-pointer">
          <img src={img} alt={altText} className="h-20" />
        </a>
        <div>
          <ul className="flex gap-6 mr-12.5 text-lg">
            <NavbarButton className={buttonStyle[0]}>
              {buttonsText[0]}  
            </NavbarButton>
            <NavbarButton className={buttonStyle[1]}>
              {buttonsText[1]}
            </NavbarButton>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
