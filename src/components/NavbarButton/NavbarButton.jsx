const NavbarButton = ({ children, ...props }) => {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
};

export default NavbarButton;
