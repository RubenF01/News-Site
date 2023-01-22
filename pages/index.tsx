import Headline from "@/components/Headline";
import TopArticle from "@/components/TopArticle";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <>
      <main className="relative h-[192vh]">
        <Headline />
      </main>
      <section className="relative z-40 -mt-[100vh] bg-blue-500 h-[300vh] px-16 pt-14">
        <div className="grid grid-cols-4 -space-x-10 bg-yellow-600 mb-36">
          <TopArticle />
          <TopArticle />
          <TopArticle />
          <TopArticle />
        </div>
        <Separator />
      </section>
    </>
  );
}
