import { Cuisine, Diet, Difficulty } from "./apiResponse";

export interface GetDifficultyParams {
  difficultyId: string;
  allDifficulties: Difficulty[];
}

export interface GetDietParams {
  dietId: string;
  allDiets: Diet[];
}

export interface GetCuisineParams {
  cuisineId: string;
  allCuisines: Cuisine[];
}
