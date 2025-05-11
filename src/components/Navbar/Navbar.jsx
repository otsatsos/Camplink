import NavbarButton from "../NavbarButton/NavbarButton";

const Navbar = ({
  img,
  altText,
  imgLink,
  buttonsText,
  buttonStyle,
  buttonsLinks,
}) => {
  return (
    <>
      <nav className="w-full h-20 fixed z-10 top-0 right-0 left-0 flex items-center justify-between bg-[#FFFBF5] border-b-1 border-b-solid border-b-[#F9EFE0] shadow-xs shadow-[#F9EFE0] text-[#28282B]">
        <NavbarButton style={buttonStyle[0]} link={buttonsLinks[0]}>
          <img src={img} alt={altText} className="h-30" />
        </NavbarButton>
        <div>
          <ul className="flex gap-6 mr-12.5 text-lg">
            <NavbarButton style={buttonStyle[1]} link={buttonsLinks[1]}>
              {buttonsText[1]}
            </NavbarButton>
            <NavbarButton style={buttonStyle[2]} link={buttonsLinks[2]}>
              {buttonsText[2]}
            </NavbarButton>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
