import { useQuery } from "react-query";
import { getArticlesByCategory } from "@/api";

export const useCategoryQuery = (category: string) => {
  const { data, status } = useQuery(
    category,
    () => getArticlesByCategory(category),
    {
      initialData: { results: [] },
      staleTime: 60 * 60 * 1000,
    }
  );

  return { data, status };
};

export default useCategoryQuery;
