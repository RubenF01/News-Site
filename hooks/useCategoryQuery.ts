import type { CategoryQueryResult } from "@/types";
import { useQuery } from "react-query";
import { getArticlesByCategory } from "@/api";

export const useCategoryQuery = (category: string): CategoryQueryResult => {
  const { data, status } = useQuery(
    category,
    () => getArticlesByCategory(category),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    }
  );

  return { data, status };
};

export default useCategoryQuery;
