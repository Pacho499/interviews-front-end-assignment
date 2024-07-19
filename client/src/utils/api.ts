import axios from "axios";
import {
  Filters,
  FormErrors,
  UploadCommentParams,
  UploadRecipeParams,
} from "../types/functionsParams";

const defaultApiURL = "http://localhost:8080/";

// GET CALLS

export const getRecipes = async ({ page }: { page: number }) => {
  const res = await axios.get(`${defaultApiURL}recipes?_page=${page}&_limit=4`);
  return res.data;
};

export const getAllDifficulties = async () => {
  const res = await axios.get(`${defaultApiURL}difficulties`);
  return res.data;
};

export const getAlldiets = async () => {
  const res = await axios.get(`${defaultApiURL}diets`);
  return res.data;
};

export const getAllCuisines = async () => {
  const res = await axios.get(`${defaultApiURL}cuisines`);
  return res.data;
};

// Compose URL to make call with all filter if user need it
const getUrlForFilterCall = (filters: Filters) => {
  let url = "";
  let index = 0;
  for (let [key, value] of Object.entries(filters)) {
    if (value !== "") {
      if (index === 0) {
        url = url + `${key}=${value}`;
        index = index + 1;
      } else {
        url = url + `&${key}=${value}`;
        index = index + 1;
      }
    }
  }
  index = 0;
  return url;
};

export const getFilteredRecipes = async (filters: Filters) => {
  const url = getUrlForFilterCall(filters);
  const res = await axios.get(`${defaultApiURL}recipes?${url}`);
  return res.data;
};

export const getRecipe = async (recipeId: string) => {
  const recipe = await axios.get(`${defaultApiURL}recipes/${recipeId}`);
  const comments = await axios.get(
    `${defaultApiURL}recipes/${recipeId}/comments`
  );
  return {
    id: recipe.data.id,
    name: recipe.data.name,
    ingredients: recipe.data.ingredients,
    instructions: recipe.data.instructions,
    cuisineId: recipe.data.cuisineId,
    dietId: recipe.data.dietId,
    difficultyId: recipe.data.difficultyId,
    image: recipe.data.image,
    comments: comments.data,
  };
};

// POST CALLS

export const uploadRecipe = async ({
  recipe,
  handleErrors,
}: UploadRecipeParams) => {
  let errors: FormErrors = {};

  const isEmptyString = (str: string) => {
    return typeof str === "string" && str.trim() === "";
  };

  for (let [key, value] of Object.entries(recipe)) {
    if (isEmptyString(value) || value === null) {
      errors[key] = true;
    }

    if (key === "ingredients") {
      for (let ingredient in value) {
        if (value[ingredient] === "") errors[key] = true;
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    handleErrors(errors);
    return;
  }

  const formData = new FormData();
  formData.append("name", recipe.name);
  formData.append("ingredients", recipe.ingredients.join(","));
  formData.append("instructions", recipe.instructions);
  formData.append("cuisineId", recipe.cuisineId);
  formData.append("dietId", recipe.dietId);
  formData.append("difficultyId", recipe.difficultyId);
  if (recipe.image !== null) formData.append("image", recipe.image);

  const res = await axios.post(`${defaultApiURL}recipes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return window.location.replace(`/recipeDetail/${res.data.id}`);
};

export const uploadComment = async ({
  userComment,
  recipeId,
  handleErrors,
}: UploadCommentParams) => {
  let errors: FormErrors = {};

  for (let [key, value] of Object.entries(userComment)) {
    if (value === "" || value === 0) {
      errors[key] = true;
    }
  }

  if (Object.keys(errors).length > 0) {
    handleErrors(errors);
    return;
  }

  const res = await axios.post(
    `${defaultApiURL}recipes/${recipeId}/comments`,
    userComment
  );

  return res.status;
};
