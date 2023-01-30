import { useRouter } from "next/router";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { categories } from "@/utils";
import NotFound from "@/components/NotFound";

const CategoryPage = () => {
  const router = useRouter();
  const { category: categoryName } = router.query;
  const { data } = useCategoryQuery(categoryName as string);

  const articles = data?.results;

  if (!articles?.length) return <NotFound />;
  else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-[80vh] px-16 pt-14"
      >
        <h1
          className="font-bold capitalize cursor-default text-7xl"
          style={{
            color: `${
              categories.find((category) => category.label === categoryName)
                ?.color
            }`,
          }}
        >
          {categoryName}
        </h1>
        <div className="flex flex-col py-4 gap-y-3">
          {articles?.map((article, index, articleArr) => (
            <ArticleCard
              key={index}
              article={article}
              index={index}
              articleArr={articleArr}
            />
          ))}
        </div>
      </motion.div>
    );
  }
};

export default CategoryPage;
