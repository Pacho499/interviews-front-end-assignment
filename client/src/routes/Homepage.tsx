import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Recipe } from "../types/apiResponse";
import { getRecipes } from "../utils/api.ts";
import RecipeCard from "../components/RecipeCard.tsx";
import "../styles/Homepage.css";
import Spinner from "../components/Spinner.tsx";
import Filters from "../components/Filters.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
const Homepage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipesToRender, setRecipeToRender] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  const [fetchedAll, setFetchedAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let recipesFound = recipesToRender.length !== 0;

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const newRecipes = await getRecipes({ page });
      if (newRecipes.length > 0) {
        setRecipes([...recipes, ...newRecipes]);
      } else {
        setFetchedAll(true);
      }
      setIsLoading(false);
    };

    fetchRecipes();
  }, [page]);

  useEffect(() => {
    setRecipeToRender(recipes);
  }, [recipes]);

  const handleRecipeToRender = (recipesFromChild: Recipe[]) => {
    setRecipeToRender(recipesFromChild);
  };

  //renderFunction

  const RenderRecipeCards = () => {
    return recipesToRender.map((recipe, id) => {
      return <RecipeCard key={id} recipe={recipe} />;
    });
  };

  return (
    <>
      <Header />
      <div className="homePage-container">
        <div>
          <h1>Welcome to Recipe Book app</h1>
          {recipesFound ? (
            <h4>Here you can find all types of recipe</h4>
          ) : (
            <div className="homepage-error-container">
              <h5>We didn't find any recipes, try changing the filters.</h5>
              <FontAwesomeIcon icon={faFaceFrown} size="2x" />
            </div>
          )}
        </div>
        <Filters
          handleRecipeToRender={handleRecipeToRender}
          firstCallRecipes={recipes}
        />
        <section className="homePage-cards-Container">
          {RenderRecipeCards()}
        </section>
        {isLoading ? (
          <Spinner />
        ) : fetchedAll ? (
          <h5>You have fetched all the recipes of the application</h5>
        ) : (
          recipesFound && (
            <button className="primaryButton" onClick={() => setPage(page + 1)}>
              <p>Find new Recipes</p>
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Homepage;
