import { Link } from "react-router-dom";
import "../styles/LinkButton.css";
import { LinkButtonProps } from "../types/components";

const LinkButton = ({ text, linkTo }: LinkButtonProps) => {
  return (
    <Link to={linkTo} className={`linkButton`}>
      <p>{text}</p>
    </Link>
  );
};

export default LinkButton;
