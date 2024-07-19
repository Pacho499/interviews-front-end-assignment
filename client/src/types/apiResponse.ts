export interface Comment {
  id: string;
  comment: string;
  date: string;
  recipeId: string;
  rating: number;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: string;
  comments?: Comment[];
}

export interface Difficulty {
  id: string;
  name: string;
}

export interface Diet {
  id: string;
  name: string;
}

export interface Cuisine {
  id: string;
  name: string;
}

export interface RecipeForm {
  name: string;
  ingredients: string[];
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: File | null;
}
