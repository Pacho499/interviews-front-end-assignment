import { RecipeForm } from "./apiResponse";

export interface Filters {
  q: string;
  dietId: string;
  cuisineId: string;
  difficultyId: string;
}

export interface UploadRecipeParams {
  recipe: RecipeForm;
  handleErrors: (errFromFunction: any) => void;
}

export interface FormErrors {
  [key: string]: string;
}
