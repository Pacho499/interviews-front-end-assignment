import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import LinkButton from "./LinkButton";
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [onCloseAnimation, setOnCloseAnimation] = useState(false);

  const closeMobileMenu = () => {
    setOnCloseAnimation(true);
    setTimeout(() => {
      setIsMobileOpen(false);
      setOnCloseAnimation(false);
    }, 250);
  };

  return (
    <header>
      {isMobileOpen && (
        <MobileMenu
          closeMenu={() => closeMobileMenu()}
          onClose={onCloseAnimation}
        />
      )}
      <div className="header-container">
        <h1>Recipe Book app</h1>
        <FontAwesomeIcon
          icon={faBars}
          className="header-menu-icon"
          onClick={() => setIsMobileOpen(true)}
        />
      </div>
      <div className="header-container header-laptop-nav">
        <LinkButton text="Add Recipe" linkTo="/newRecipe" />
        <div className="header-profileImgContainer">
          <FontAwesomeIcon icon={faUser} color="black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
