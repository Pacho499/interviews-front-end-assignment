import { useContext, useState } from "react";
import "../styles/Filters.css";
import Dropdown from "./Dropdown";
import { Context } from "../main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(Context);
  return (
    <>
      {isOpen ? (
        <div className="filters-container">
          <div className="filters-searchbar-container">
            <label className="filters-searchbar-label" htmlFor="searchbar">
              SearchBar
            </label>
            <input className="filters-searchbar" type="text" id="searchbar" />
          </div>
          <Dropdown
            label="Type of Cuisine"
            id="Cuisine"
            name="Cuisine"
            options={context.cuisines}
          />
          <Dropdown
            label="Type of Diet"
            id="Diet"
            name="Diet"
            options={context.diets}
          />
          <Dropdown
            label="Difficulty"
            id="Difficulty"
            name="Difficulty"
            options={context.difficulties}
          />
          <div className="filters-buttons-container">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="primaryButton"
            >
              <p>Close</p>
            </button>
            <button className="primaryButton">
              <p>Search</p>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      ) : (
        <button className="primaryButton" onClick={() => setIsOpen(true)}>
          <p>open filters</p>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      )}
    </>
  );
};

export default Filters;
