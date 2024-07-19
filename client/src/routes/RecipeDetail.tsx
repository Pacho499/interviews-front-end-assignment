import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Comment, Recipe } from "../types/apiResponse";
import Spinner from "../components/Spinner";
import { getRecipe, uploadComment } from "../utils/api";
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
import RatingInput from "../components/RatingInput.tsx";
import { FormErrors } from "../types/functionsParams.ts";
import { MouseEvent } from "react";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const context = useContext(Context);
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState<boolean>(true);
  const [avarageRating, setAvarageRating] = useState(0);
  const [userComment, setUserComment] = useState({
    comment: "",
    rating: 0,
    date: new Date(),
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitComment, setSubmitComment] = useState(false);

  const getRecipeData = async () => {
    if (recipeId) {
      const recipe = await getRecipe(recipeId);
      calculateAvarageRating(recipe.comments);
      setRecipe(recipe);
      setLoading(false);
    }
  };

  useEffect(() => {
    setSubmitComment(false);
    setUserComment({
      comment: "",
      rating: 0,
      date: new Date(),
    });
    getRecipeData();
  }, [submitComment]);

  const calculateAvarageRating = (comments: Comment[]) => {
    let totalRating = 0;
    for (let comment in comments) {
      totalRating = totalRating + comments[comment].rating;
      setAvarageRating(Math.round((totalRating / comments.length) * 10) / 10);
    }
  };

  const handleRating = (ratingFromChild: number) => {
    setUserComment({ ...userComment, rating: ratingFromChild });
  };

  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserComment({ ...userComment, comment: e.target.value });
  };

  const handleErrors = (errFromFunction: FormErrors) => {
    setErrors(errFromFunction);
  };

  const handleUploadComment = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (recipeId) {
      const res = await uploadComment({
        userComment,
        recipeId,
        handleErrors,
      });
      if (res === 201) {
        setSubmitComment(true);
        setErrors({});
      }
    }
  };

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
              {recipe?.comments?.map((comment, index) => {
                return <CommentBox key={index} commentData={comment} />;
              })}
            </article>
            <div className="comment-container">
              <h5>Leave your comment</h5>
              <form>
                <div className="input-container">
                  {errors?.rating && (
                    <span className="label-error">Insert rating!</span>
                  )}
                  <div>
                    <RatingInput
                      rating={userComment.rating}
                      setRating={handleRating}
                    />
                  </div>
                  {errors?.comment && (
                    <span className="label-error">Insert a comment!</span>
                  )}
                  <textarea
                    onChange={handleComment}
                    rows={4}
                    className="input recipeDetail-input"
                    value={userComment.comment}
                  />
                </div>
                <button onClick={handleUploadComment} className="primaryButton">
                  Leave comment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
