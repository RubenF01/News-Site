import type { Article } from "@/types";
import Headline from "@/components/Headline";
import TopArticle from "@/components/TopArticle";
import Separator from "@/components/Separator";
import CategorySection from "@/components/CategorySection";
import { categories } from "@/utils";
import useCategoryQuery from "@/hooks/useCategoryQuery";

export default function Home() {
  const { data } = useCategoryQuery("top");

  return (
    <>
      <main className="relative h-[192vh]">
        <Headline headlineArticle={data?.results[0]} />
      </main>
      <section className="relative z-40 -mt-[100vh] bg-blue-500 px-16 pt-14">
        <div className="grid grid-cols-4 -space-x-10 bg-yellow-600 mb-36">
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
    </>
  );
}
