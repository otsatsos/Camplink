import { useNavigate } from "react-router-dom";

const Button = ({ children, style, link }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <li className="list-none">
      <button onClick={handleClick} className={style}>{children}</button>
    </li>
  );
};

export default Button;
