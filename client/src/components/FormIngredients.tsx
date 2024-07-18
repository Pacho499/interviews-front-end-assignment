import { FormIngredientsProps } from "../types/components";
import "../styles/FormIngredients.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface handleInputValueProps {
  e: React.ChangeEvent<HTMLInputElement>;
  index: number;
}

const FormIngredients = ({
  handleIngredients,
  ingredients,
  error,
}: FormIngredientsProps) => {
  const addIngredient = () => {
    const newIngredient = [...ingredients, ""];
    handleIngredients(newIngredient);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    handleIngredients(newIngredients);
  };

  const handleInputValue = ({ e, index }: handleInputValueProps) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = e.target.value;
    handleIngredients(newIngredients);
  };

  return (
    <div className={`input-container ${error && "input-error"}`}>
      <label className="label" htmlFor="recipeTitle">
        Ingredients *
      </label>
      <div>
        {ingredients.map((ingredient, index) => {
          return (
            <div key={index} className="formIngredient-inputs-container">
              <input
                className="input"
                type="text"
                value={ingredient}
                onChange={(e) => {
                  handleInputValue({ e, index });
                }}
                required
                placeholder={`#${index + 1} ingredient`}
              />
              <div onClick={() => removeIngredient(index)}>
                <FontAwesomeIcon
                  className="formIngredient-removebtn"
                  icon={faCircleXmark}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div onClick={() => addIngredient()} className="formIngredient-addbtn">
        <p>Add Ingredient</p>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
};

export default FormIngredients;
