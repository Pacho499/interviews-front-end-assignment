import { useContext, useState } from "react";
import "../styles/Filters.css";
import Dropdown from "./Dropdown";
import { Context } from "../main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { getFilteredRecipes } from "../utils/api";
import { FiltersProps } from "../types/components";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons/faFilterCircleXmark";

const Filters = ({ handleRecipeToRender, firstCallRecipes }: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    q: "",
    dietId: "",
    cuisineId: "",
    difficultyId: "",
  });
  const context = useContext(Context);

  // handle all filters

  const setCuisineFilter = (checkFromChild: string) => {
    setFilters({ ...filters, cuisineId: checkFromChild });
  };

  const setDietsFilter = (checkFromChild: string) => {
    setFilters({ ...filters, dietId: checkFromChild });
  };

  const setDifficultyFilter = (checkFromChild: string) => {
    setFilters({ ...filters, difficultyId: checkFromChild });
  };

  // call for filterRecipe

  const getFilterRecipe = async () => {
    const recipes = await getFilteredRecipes(filters);
    handleRecipeToRender(recipes);
    setIsOpen(false);
  };

  const cleanFilters = async () => {
    debugger;
    setFilters({
      q: "",
      dietId: "",
      cuisineId: "",
      difficultyId: "",
    });
    handleRecipeToRender(firstCallRecipes);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="filters-container">
          <div className="filters-searchbar-container">
            <label className="filters-searchbar-label" htmlFor="searchbar">
              SearchBar
            </label>
            <input
              value={filters.q}
              onChange={(e) => {
                setFilters({ ...filters, q: e.target.value });
              }}
              className="filters-searchbar"
              type="text"
              id="searchbar"
            />
          </div>
          <Dropdown
            label="Type of Cuisine"
            options={context.cuisines}
            setFilter={setCuisineFilter}
            inputName="cuisine"
          />
          <Dropdown
            label="Type of Diet"
            options={context.diets}
            setFilter={setDietsFilter}
            inputName="diets"
          />
          <Dropdown
            label="Difficulty"
            options={context.difficulties}
            setFilter={setDifficultyFilter}
            inputName="difficulty"
          />
          <div className="filters-buttons-container">
            <button onClick={() => cleanFilters()} className="primaryButton">
              <p>Clear Filters</p>
              <FontAwesomeIcon icon={faFilterCircleXmark} />
            </button>
            <button className="primaryButton" onClick={() => getFilterRecipe()}>
              <p>Search</p>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="primaryButton"
          >
            <p>Close</p>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
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
