import type { Article } from "@/types";
import Headline from "@/components/Headline";
import TopArticle from "@/components/TopArticle";
import Separator from "@/components/Separator";
import CategorySection from "@/components/CategorySection";
import { useQuery } from "react-query";
import { getTopArticles } from "@/api";

export default function Home() {
  const { data, status } = useQuery("topArticles", getTopArticles, {
    initialData: { results: [] },
    staleTime: 60 * 60 * 1000,
  });

  return (
    <>
      <main className="relative h-[192vh]">
        <Headline />
      </main>
      <section className="relative z-40 -mt-[100vh] bg-blue-500 px-16 pt-14">
        <div className="grid grid-cols-4 -space-x-10 bg-yellow-600 mb-36">
          {data.results.slice(0, 4).map((article: Article, index: number) => (
            <TopArticle key={index} />
          ))}
        </div>
        <Separator />
        <CategorySection />
        <CategorySection />
        <CategorySection />
        <CategorySection />
        <CategorySection />
        <CategorySection />
      </section>
    </>
  );
}
