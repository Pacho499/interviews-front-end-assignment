import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import { createContext } from "react";
import {
  getAllCuisines,
  getAlldiets,
  getAllDifficulties,
} from "./utils/api.ts";

const fetchAppCommonContants = async () => {
  const difficulties = await getAllDifficulties();
  const diets = await getAlldiets();
  const cuisines = await getAllCuisines();

  return {
    difficulties: difficulties,
    diets: diets,
    cuisines: cuisines,
  };
};
const appConstants = await fetchAppCommonContants();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
]);

export const Context = createContext(appConstants);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider value={appConstants}>
      <RouterProvider router={router} />
    </Context.Provider>
  </React.StrictMode>
);
