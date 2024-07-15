import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Recipe } from "../types/apiResponse";
import { getRecipes } from "../utils/api.ts";
import RecipeCard from "../components/RecipeCard.tsx";

const Homepage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRecipes = async () => {
      const newRecipes = await getRecipes({ page });
      setRecipes([...recipes, ...newRecipes]);
    };

    fetchRecipes();
  }, [page]);

  const RenderRecipeCards = () => {
    return recipes.map((recipe, id) => {
      return <RecipeCard key={id} recipe={recipe} />;
    });
  };

  return (
    <div>
      <Header />
      <section>
        <h1>Our recipes</h1>
        {RenderRecipeCards()}
      </section>
      <button onClick={() => setPage(page + 1)}>cerca pagine</button>
    </div>
  );
};

export default Homepage;
