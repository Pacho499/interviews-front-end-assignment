import { useContext } from "react";
import "../styles/RecipeCard.css";
import { RecipeCardProps } from "../types/components";
import { Context } from "../main";
import { getAppConstants } from "../utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGlobe,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const appConstants = useContext(Context);

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
              <FontAwesomeIcon icon={faGlobe} />{" "}
              {getAppConstants(recipe.cuisineId, appConstants.cuisines)}
            </p>
            <p>
              <FontAwesomeIcon icon={faUtensils} />{" "}
              {getAppConstants(recipe.dietId, appConstants.diets)}
            </p>
            <p>
              <FontAwesomeIcon icon={faChartSimple} />{" "}
              {getAppConstants(recipe.difficultyId, appConstants.difficulties)}
            </p>
          </div>
          <div className="recipeCard-detailContainer ingredients">
            <h5>Ingredients</h5>
            <ul>{renderIngredients()}</ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
