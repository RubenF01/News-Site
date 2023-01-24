import type { CategoryQueryResult } from "@/types";
import { useQuery } from "react-query";
import { getArticlesByCategory } from "@/api";

export const useCategoryQuery = (category: string): CategoryQueryResult => {
  const { data, status } = useQuery(
    category,
    () => getArticlesByCategory(category),
    {
      // TODO CHANGE TO CACHED VALUE
      // initialData: { results: [] },
      staleTime: 60 * 60 * 1000,
    }
  );

  console.log(data);

  return { data, status };
};

export default useCategoryQuery;
