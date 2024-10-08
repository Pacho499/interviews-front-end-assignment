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
  const [onCloseBtnFilter, setOnCloseBtnFilter] = useState<boolean>(false);
  const [onCloseMenuFilter, setOnCloseMenuFilter] = useState<boolean>(false);
  const context = useContext(Context);

  //handle animations

  const handleFilterAnimation = (isView: boolean) => {
    //if isView trigger filterbutton close animation else trigger menu close animation
    if (isView) {
      setOnCloseBtnFilter(true);
      setTimeout(() => {
        setIsOpen(isView);
        setOnCloseBtnFilter(false);
      }, 250);
    } else {
      setOnCloseMenuFilter(true);
      setTimeout(() => {
        setIsOpen(isView);
        setOnCloseMenuFilter(false);
      }, 250);
    }
  };

  // handle all filters

  const handleCheckboxes = (valueFromChild: string, key: string) => {
    setFilters((oldFilters) => ({ ...oldFilters, [key]: valueFromChild }));
  };

  // call for filterRecipe

  const getFilterRecipe = async () => {
    const recipes = await getFilteredRecipes(filters);
    handleRecipeToRender({ recipesFromChild: recipes, isFilterd: true });
    handleFilterAnimation(false);
  };

  const clearFilters = async () => {
    setFilters({
      q: "",
      dietId: "",
      cuisineId: "",
      difficultyId: "",
    });

    handleRecipeToRender({
      recipesFromChild: firstCallRecipes,
      isFilterd: false,
    });
    handleFilterAnimation(false);
  };

  return (
    <>
      {isOpen ? (
        <div
          className={`filters-container ${
            onCloseMenuFilter ? "slideOutLeft" : "slideInLeft"
          }`}
        >
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
            setFilter={handleCheckboxes}
            inputName="cuisine"
            value={filters.cuisineId}
          />
          <Dropdown
            label="Type of Diet"
            options={context.diets}
            setFilter={handleCheckboxes}
            inputName="diet"
            value={filters.dietId}
          />
          <Dropdown
            label="Difficulty"
            options={context.difficulties}
            setFilter={handleCheckboxes}
            inputName="difficulty"
            value={filters.difficultyId}
          />
          <div className="filters-buttons-container">
            <button onClick={() => clearFilters()} className="primaryButton">
              <p>Clear Filters</p>
              <FontAwesomeIcon icon={faFilterCircleXmark} />
            </button>
            <button className="primaryButton" onClick={() => getFilterRecipe()}>
              <p>Search</p>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              onClick={() => handleFilterAnimation(false)}
              className="primaryButton"
            >
              <p>Close</p>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        </div>
      ) : (
        <button
          className={`filters-button-openFilters ${
            onCloseBtnFilter ? "slideOutLeft" : "slideInLeft"
          } `}
          onClick={() => handleFilterAnimation(true)}
        >
          <p>open filters</p>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      )}
    </>
  );
};

export default Filters;
