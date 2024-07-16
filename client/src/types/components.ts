import { Recipe } from "./apiResponse";

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
