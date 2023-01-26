import { useRouter } from "next/router";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import Separator from "@/components/Separator";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { data } = useCategoryQuery(category as string);

  return (
    <div className="px-16 pt-14">
      <h1 className="font-bold capitalize cursor-default text-7xl">
        {category}
      </h1>
      <div>
        <div>
          <div className="bg-red-500 h-44 w-44"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
