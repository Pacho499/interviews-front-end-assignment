import { Comment, Cuisine, Diet, Difficulty, Recipe } from "./apiResponse";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
  error?: boolean;
  value: string;
}

export interface IconInfoProps {
  icon: IconProp;
  infoId: string;
  infoArray: Cuisine[] | Difficulty[] | Diet[];
}

export interface CommentBoxProps {
  commentData: Comment;
}

export interface RatingInputProps {
  setRating: (ratingFromChild: number) => void;
  rating: number;
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
  error?: boolean;
}
