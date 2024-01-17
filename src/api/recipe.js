import { axiosClient } from "./axios";

export const getRecipes = async ({ params }) => {
  return axiosClient.get(`/recipes`, {
    params: {
      ...params,
    },
  });
};

export const searchRecipe = async ({ params }) => {
  return axiosClient.get("/recipes/search", {
    params: {
      ...params,
    },
  });
};
