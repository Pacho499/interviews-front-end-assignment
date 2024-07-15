import { Cuisine, Diet, Difficulty } from "../types/apiResponse";
import {
  GetDifficultyParams,
  GetDietParams,
  GetCuisineParams,
} from "../types/commonfunctions";

export const getDifficulty = ({
  difficultyId,
  allDifficulties,
}: GetDifficultyParams) =>
  allDifficulties.filter(
    (difficulty: Difficulty) => difficulty.id === difficultyId
  )[0].name;

export const getDiet = ({ dietId, allDiets }: GetDietParams) =>
  allDiets.filter((diet: Diet) => diet.id === dietId)[0].name;

export const getCuisine = ({ cuisineId, allCuisines }: GetCuisineParams) =>
  allCuisines.filter((cuisine: Cuisine) => cuisine.id === cuisineId)[0].name;
