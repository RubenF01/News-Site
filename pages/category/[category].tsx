import { useRouter } from "next/router";
import { useQuery } from "react-query";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <div></div>
    </div>
  );
};

export default CategoryPage;
