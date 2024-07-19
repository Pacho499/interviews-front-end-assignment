import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Comment, Recipe } from "../types/apiResponse";
import Spinner from "../components/Spinner";
import { getRecipe } from "../utils/api";
import "../styles/RecipeDetail.css";

import {
  faChartSimple,
  faGlobe,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import IconInfo from "../components/IconInfo";
import CommentBox from "../components/CommentBox.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const context = useContext(Context);
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState<boolean>(true);
  const [avarageRating, setAvarageRating] = useState(0);

  useEffect(() => {
    const getRecipeData = async () => {
      if (recipeId) {
        const recipe = await getRecipe(recipeId);
        calculateAvarageRating(recipe.comments);
        setRecipe(recipe);
        setLoading(false);
      }
    };

    getRecipeData();
  }, []);

  console.log("avarage", avarageRating);

  const calculateAvarageRating = (comments: Comment[]) => {
    let totalRating = 0;
    for (let comment in comments) {
      totalRating = totalRating + comments[comment].rating;
      setAvarageRating(Math.round((totalRating / comments.length) * 10) / 10);
    }
  };

  console.log(recipe);
  return (
    <>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <div className="recipeDetail-container">
          <article className="recipeDetail-recipe-container">
            <h1>{recipe?.name}</h1>
            <img
              className="recipeDetail-img"
              src={`http://localhost:8080${recipe?.image}`}
              alt=""
            />
            <div className="recipeDetail-ingredients-container">
              <h3>Ingredients</h3>
              <ul>
                {recipe?.ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Instructions</h3>
              <p>{recipe?.instructions}</p>
            </div>
            <div>
              <h3>Other Info</h3>
              {recipe?.cuisineId && (
                <IconInfo
                  icon={faGlobe}
                  infoId={recipe?.cuisineId}
                  infoArray={context.cuisines}
                />
              )}
              {recipe?.dietId && (
                <IconInfo
                  icon={faUtensils}
                  infoId={recipe?.dietId}
                  infoArray={context.diets}
                />
              )}
              {recipe?.difficultyId && (
                <IconInfo
                  icon={faChartSimple}
                  infoId={recipe?.difficultyId}
                  infoArray={context.difficulties}
                />
              )}
              <div>
                <FontAwesomeIcon icon={faStar} className="star" />
                {avarageRating}
              </div>
            </div>
          </article>
          <div className="RecipeDetail-comments-container">
            <article>
              <h3>Comments</h3>

              {recipe?.comments?.map((comment) => {
                return <CommentBox commentData={comment} />;
              })}
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
