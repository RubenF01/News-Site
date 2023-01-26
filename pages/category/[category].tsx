import { useRouter } from "next/router";
import useCategoryQuery from "@/hooks/useCategoryQuery";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { data } = useCategoryQuery(category as string);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default CategoryPage;
