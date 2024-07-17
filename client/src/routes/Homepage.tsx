import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Recipe } from "../types/apiResponse";
import { getRecipes } from "../utils/api.ts";
import RecipeCard from "../components/RecipeCard.tsx";
import "../styles/Homepage.css";
import Spinner from "../components/Spinner.tsx";
import Filters from "../components/Filters.tsx";
const Homepage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  const [fetchedAll, setFetchedAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const newRecipes = await getRecipes({ page });
      if (newRecipes.length > 0) {
        setRecipes([...recipes, ...newRecipes]);
        setIsLoading(false);
      } else {
        setFetchedAll(true);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [page]);

  //renderFunction

  const RenderRecipeCards = () => {
    return recipes.map((recipe, id) => {
      return <RecipeCard key={id} recipe={recipe} />;
    });
  };

  return (
    <>
      <Header />
      <div className="homePage-container">
        <div>
          <h1>Welcome to Recipe Book app</h1>
          <h4>Here you can find all types of recipe</h4>
        </div>
        <Filters />
        <section className="homePage-cards-Container">
          {RenderRecipeCards()}
        </section>
        {isLoading ? (
          <Spinner />
        ) : fetchedAll ? (
          <h5>You have fetched all the recipes of the application</h5>
        ) : (
          <button className="primaryButton" onClick={() => setPage(page + 1)}>
            <p>Find new Recipes</p>
          </button>
        )}
      </div>
    </>
  );
};

export default Homepage;
