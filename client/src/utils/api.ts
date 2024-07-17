import axios from "axios";
import { Filters } from "../types/functionsParams";

const defaultApiURL = "http://localhost:8080/";

export const getRecipes = async ({ page }: { page: number }) => {
  const res = await axios.get(`${defaultApiURL}recipes?_page=${page}&_limit=5`);
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
