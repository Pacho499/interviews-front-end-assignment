import { Cuisine, Diet, Difficulty, Recipe } from "./apiResponse";

export interface MobileMenuProps {
  closeMenu: () => void;
  onClose: boolean;
}

export interface LinkButtonProps {
  text: string;
  linkTo: "/" | "/newRecipe";
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface DroprdownProps {
  label: string;
  options: Cuisine[] | Difficulty[] | Diet[];
  setFilter: (checkFromChild: string) => void;
  inputName: string;
  isForm?: boolean;
  error?: string;
  value?: string;
}

// handlers for pass values from child

export interface HandleFiltersHP {
  isFilterd: boolean;
  recipesFromChild: Recipe[];
}

export interface FiltersProps {
  handleRecipeToRender: (valuesFromChild: HandleFiltersHP) => void;
  firstCallRecipes: Recipe[];
}

export interface FormIngredientsProps {
  handleIngredients: (ingredientsFromChild: string[]) => void;
  ingredients: string[];
  error?: string;
}
