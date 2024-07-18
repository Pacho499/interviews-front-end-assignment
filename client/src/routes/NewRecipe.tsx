import { useContext, useState } from "react";
import Header from "../components/Header";
import { RecipeForm } from "../types/apiResponse";
import { Context } from "../main";
import "../styles/NewRecipe.css";
import FormIngredients from "../components/FormIngredients";
import Dropdown from "../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { uploadRecipe } from "../utils/api";
import { FormErrors } from "../types/functionsParams";

const NewRecipe = () => {
  const [recipe, setRecipe] = useState<RecipeForm>({
    name: "",
    instructions: "",
    ingredients: [""],
    cuisineId: "",
    dietId: "",
    difficultyId: "",
    image: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const context = useContext(Context);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, name: e.target.value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, image: e.target.files && e.target.files[0] });
  };

  const handleIngredients = (IngredientsFromChild: string[]) => {
    setRecipe({ ...recipe, ingredients: IngredientsFromChild });
  };

  const handleDiet = (dietFromChild: string) => {
    setRecipe({ ...recipe, dietId: dietFromChild });
  };

  const handleCuisine = (cuisineFromChiled: string) => {
    setRecipe({ ...recipe, cuisineId: cuisineFromChiled });
  };

  const handleDifficulty = (difficultyFromChild: string) => {
    setRecipe({ ...recipe, difficultyId: difficultyFromChild });
  };

  const handleErrors = (errFromFunction: FormErrors) => {
    setErrors(errFromFunction);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="newRecipe-title">Add a new Recipe!</h1>
        <form className="newRecipe-form-container">
          <div className={"input-container"}>
            <label className="label" htmlFor="title">
              Name *
            </label>
            <input
              onChange={handleName}
              className="input"
              type="text"
              value={recipe.name}
              required
              id="title"
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="instructions">
              Instructions *
            </label>
            <textarea
              className="input"
              id="instructions"
              rows={10}
              required
            ></textarea>
          </div>
          <FormIngredients
            handleIngredients={handleIngredients}
            ingredients={recipe.ingredients}
          />
          <Dropdown
            label="Type of Cuisine *"
            options={context.cuisines}
            setFilter={handleCuisine}
            inputName="cuisine"
            isForm
          />
          <Dropdown
            label="Type of Diet *"
            options={context.diets}
            setFilter={handleDiet}
            inputName="diet"
            isForm
          />
          <Dropdown
            label="Difficulty *"
            options={context.difficulties}
            setFilter={handleDifficulty}
            inputName="difficulty"
            isForm
          />
          <input type="file" onChange={handleImage} />
          <button
            className="primaryButton"
            onClick={async (e) => {
              e.preventDefault();
              await uploadRecipe({ recipe, handleErrors });
            }}
          >
            <p>Add Recipe</p>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewRecipe;
