import type { Article } from "@/types";
import Headline from "@/components/Headline";
import TopArticle from "@/components/TopArticle";
import Separator from "@/components/Separator";
import CategorySection from "@/components/CategorySection";
import { categories } from "@/utils";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import { motion } from "framer-motion";

export default function Home() {
  const { data } = useCategoryQuery("top");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="relative h-[192vh]">
        <Headline headlineArticle={data?.results[0]} />
      </main>
      <section className="relative z-50 -mt-[100vh] bg-butterIcing px-7 2xl:px-16 pt-14">
        <div className="grid grid-cols-1 gap-y-10 2xl:gap-y-0 2xl:-space-x-10 2xl:grid-cols-4 pb-36">
          {data?.results.slice(1, 5).map((article: Article, index: number) => (
            <TopArticle key={index} article={article} />
          ))}
        </div>
        <Separator />
        {categories.map((category, index, categoryArray) => (
          <CategorySection
            key={index}
            category={category}
            categoryArray={categoryArray}
            index={index}
          />
        ))}
      </section>
    </motion.div>
  );
}
