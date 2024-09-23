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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});
  const context = useContext(Context);

  const handleInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    key: string
  ) => {
    const { type, value } = e.target;

    if (type !== "file") {
      setRecipe((oldRecipe) => ({ ...oldRecipe, [key]: value }));
    } else {
      const { files } = e.target as HTMLInputElement;
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        [key]: files && files[0],
      }));
    }
  };

  const handleIngredients = (IngredientsFromChild: string[]) => {
    setRecipe({ ...recipe, ingredients: IngredientsFromChild });
  };

  const handleCheckboxes = (valueFromChild: string, key: string) => {
    setRecipe((oldRecipe) => ({ ...oldRecipe, [key]: valueFromChild }));
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
          <div className={`input-container ${errors?.name && "input-error"}`}>
            <label className="label" htmlFor="title">
              Name *
            </label>
            <input
              onChange={(e) => handleInputs(e, "name")}
              className="input"
              type="text"
              value={recipe.name}
              required
              id="title"
            />
          </div>
          <div
            className={`input-container ${
              errors?.instructions && "input-error"
            }`}
          >
            <label className="label" htmlFor="instructions">
              Instructions *
            </label>
            <textarea
              className="input"
              id="instructions"
              rows={10}
              required
              onChange={(e) => handleInputs(e, "instructions")}
            ></textarea>
          </div>
          <FormIngredients
            handleIngredients={handleIngredients}
            ingredients={recipe.ingredients}
            error={errors?.ingredients}
          />
          <div className="input-container">
            <p className={`label ${errors.image && "label-error"}`}>Image *</p>
            <input
              type="file"
              id="image"
              onChange={(e) => handleInputs(e, "image")}
              hidden
            />
            <label className="fileInput" htmlFor="image">
              Choose image
            </label>
          </div>
          <Dropdown
            label="Type of Cuisine *"
            options={context.cuisines}
            setFilter={handleCheckboxes}
            inputName="cuisine"
            isForm
            error={errors?.cuisineId}
            value={recipe.cuisineId}
          />
          <Dropdown
            label="Type of Diet *"
            options={context.diets}
            setFilter={handleCheckboxes}
            inputName="diet"
            isForm
            error={errors?.dietId}
            value={recipe.dietId}
          />
          <Dropdown
            label="Difficulty *"
            options={context.difficulties}
            setFilter={handleCheckboxes}
            inputName="difficulty"
            isForm
            error={errors?.difficultyId}
            value={recipe.difficultyId}
          />
          <span>All field with * are required</span>
          <button
            className="primaryButton"
            onClick={async (e) => {
              e.preventDefault();
              const recipeId = await uploadRecipe({ recipe, handleErrors });
              navigate(`/recipeDetail/${recipeId}`);
            }}
          >
            <p>Add Recipe</p>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
          {Object.keys(errors).length > 0 && (
            <h5 className="label-error">
              Check all the field, you've missed something!
            </h5>
          )}
        </form>
      </div>
    </>
  );
};

export default NewRecipe;
