"use client";
import { getRecipes, searchRecipe } from "@/api/recipe";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import { Waypoint } from "react-waypoint";
import { Spinner } from "./spinner";

const RecipeCard = ({ inputData }) => {
  const [searchData, setSearchData] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItem, setTotalItem] = useState(0);
  const [limitCount, setLimitCount] = useState(1);

  const getRecipesList = async (count) => {
    if (!inputData) {
      setLoading(true);
      await getRecipes({
        params: {
          limit: 12 * count,
          search: inputData ? inputData : "",
        },
      })
        .then(({ data }) => {
          setRecipeList(data?.recipes);
          setTotalItem(data?.total);
        })
        .catch((error) => {})
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      await searchRecipe({
        params: {
          q: inputData,
        },
      })
        .then(({ data }) => {
          setRecipeList(data?.recipes);
          setTotalItem(data?.total);
        })
        .catch((error) => {})
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    getRecipesList(limitCount);
  }, [inputData]);
  return (
    <>
      <div className="mt-20 grid gap-3 grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipeList &&
          recipeList.map((recipe) => {
            return (
              <div
                className="border border-gray-200 p-2 rounded-2xl bg-gray-50"
                key={recipe.id}
              >
                <div className="w-full">
                  <Image
                    src={recipe.image}
                    alt=".."
                    width={289}
                    height={200}
                    className="rounded-2xl w-full cursor-pointer"
                  />
                </div>
                <div className="px-3 py-2">
                  <p className="text-neutral-400 text-xs font-medium">
                    {recipe?.cuisine ?? "-"}
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-neutral-800 overflow-hidden whitespace-nowrap text-ellipsis">
                      {recipe?.name ?? "-"}
                    </h4>
                    <p className="flex items-center">
                      <Image
                        src="/star.png"
                        width={16}
                        height={16}
                        alt="star"
                      />
                      <span className="text-neutral-400 text-xs font-medium inline-block ml-1">
                        {recipe?.rating ?? "-"}
                      </span>
                    </p>
                  </div>
                  <p className="text-orange-600 font-semibold text-xl">
                    {recipe?.cookTimeMinutes ?? "-"} min
                  </p>
                </div>
              </div>
            );
          })}

        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}

        {recipeList.length < totalItem && !loading && (
          <>
            <Waypoint
              onEnter={() => {
                if (recipeList.length) {
                  setLimitCount((prestate) => prestate + 1);
                  getRecipesList(limitCount);
                }
              }}
            />
            <div className="mt-20 grid gap-3 grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RecipeCard;
