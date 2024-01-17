"use client";
import Header from "@/components/common/header";
import RecipeCard from "@/components/common/recipe-card";
import { debounce } from "lodash";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = { ...Object.fromEntries(useSearchParams().entries()) };
  const [inputData, setInputData] = useState("");
  const handleInputChange = debounce((value) => {
    setInputData(value);
    if (value) {
      router.push(pathname + "?" + setSearchQueryParams({ search: value }));
    } else {
      router.push(pathname + "?" + setSearchQueryParams({ search: null }));
    }
  }, 1500);

  const setSearchQueryParams = (params = {}) => {
    let currentSearchParams = { ...searchParams, ...params };
    return new URLSearchParams(
      Object.entries(currentSearchParams).reduce((obj, [key, value]) => {
        if (value) {
          obj[key] = value;
        }
        return obj;
      }, {})
    ).toString();
  };
  return (
    <>
      <Header onInputChange={handleInputChange} />
      <RecipeCard inputData={inputData} />
    </>
  );
}
