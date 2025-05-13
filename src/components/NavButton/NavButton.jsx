import { useNavigate } from "react-router-dom";

const NavButton = ({ children, style, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <li className="list-none">
      <button onClick={handleClick} className={style}>
        {children}
      </button>
    </li>
  );
};

export default NavButton;
