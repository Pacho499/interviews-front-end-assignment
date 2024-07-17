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
  id: string;
  name: string;
  label: string;
  options: Cuisine[] | Difficulty[] | Diet[];
}
