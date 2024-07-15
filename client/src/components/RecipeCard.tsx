import { useContext } from "react";
import "../styles/RecipeCard.css";
import { RecipeCardProps } from "../types/components";
import { Context } from "../main";
import { getCuisine, getDiet, getDifficulty } from "../utils/common";
import {
  GetDifficultyParams,
  GetDietParams,
  GetCuisineParams,
} from "../types/commonfunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGlobe,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const appConstants = useContext(Context);

  //Create variables to get all appConstant names
  const difficultyParams: GetDifficultyParams = {
    difficultyId: recipe.difficultyId,
    allDifficulties: appConstants.difficulties,
  };

  const dietParams: GetDietParams = {
    allDiets: appConstants.diets,
    dietId: recipe.dietId,
  };

  const cuisineParams: GetCuisineParams = {
    allCuisines: appConstants.cuisines,
    cuisineId: recipe.cuisineId,
  };

  //render function

  const renderIngredients = () => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
  };

  return (
    <article className="recipeCard-container">
      <img
        src={`http://localhost:8080${recipe.image}`}
        alt=""
        className="recipeCard-img"
      />
      <div>
        <h3 className="recipeCard-title">{recipe.name}</h3>
        <div className="recipeCard-infoContainer">
          <div className="recipeCard-detailContainer">
            <h5>Information</h5>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> {getCuisine(cuisineParams)}
            </p>
            <p>
              <FontAwesomeIcon icon={faUtensils} /> {getDiet(dietParams)}
            </p>
            <p>
              <FontAwesomeIcon icon={faChartSimple} />{" "}
              {getDifficulty(difficultyParams)}
            </p>
          </div>
          <div className="recipeCard-detailContainer">
            <h5>Ingredients</h5>
            <ul>{renderIngredients()}</ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
