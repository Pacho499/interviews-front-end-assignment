import "../styles/MobileMenu.css";
import { MobileMenuProps } from "../types/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

const MobileMenu = ({ closeMenu, onClose }: MobileMenuProps) => {
  return (
    <div>
      <div
        className={`mobileMenu_container ${
          onClose ? "slideOutLeft" : "slideInLeft"
        }`}
      >
        <LinkButton text="Home" linkTo="/" />
        <LinkButton text="Add Recipe" linkTo="/newRecipe" />
        <div className="mobileMenu_profileImgContainer">
          <FontAwesomeIcon icon={faUser} color="black" />
        </div>
      </div>
      <div
        className={`closeMenu ${onClose ? "slideOutRight" : "slideInRight"}`}
        onClick={() => closeMenu()}
      ></div>
    </div>
  );
};

export default MobileMenu;
