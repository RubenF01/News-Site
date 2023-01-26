import type { CategoryQueryResult } from "@/types";
import { useQuery } from "react-query";
import { getArticlesByCategory } from "@/api";
import { useContext } from "react";
import CountryContext from "@/context/countryCountext";

export const useCategoryQuery = (category: string): CategoryQueryResult => {
  const { country } = useContext(CountryContext);
  const { data, status } = useQuery(
    `${category + "-" + country}`,
    () => getArticlesByCategory(category, country),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    }
  );

  return { data, status };
};

export default useCategoryQuery;
