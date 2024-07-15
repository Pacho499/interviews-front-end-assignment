import axios from "axios";

const defaultApiURL = "http://localhost:8080";

export const getRecipes = async ({ page }: { page: number }) => {
  const res = await axios.get(
    `${defaultApiURL}/recipes?_page=${page}&_limit=5`
  );
  return res.data;
};

export const getAllDifficulties = async () => {
  const res = await axios.get(`${defaultApiURL}/difficulties`);
  return res.data;
};

export const getAlldiets = async () => {
  const res = await axios.get(`${defaultApiURL}/diets`);
  return res.data;
};

export const getAllCuisines = async () => {
  const res = await axios.get(`${defaultApiURL}/cuisines`);
  return res.data;
};
