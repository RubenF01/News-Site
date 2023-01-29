import type { Article } from "@/types";
import { truncateString } from "@/utils";
import Link from "next/link";

interface Props {
  article: Article;
}

const TopArticle = ({ article }: Props) => {
  return (
    <div className="flex flex-col max-w-xs gap-y-3">
      {article && article.category && (
        <div className="p-2 text-xs text-white uppercase w-min bg-[#FFC107]">
          <p>{article?.category[0]}</p>
        </div>
      )}
      <Link href={article?.link || "#"} target="_blank">
        <h1 className="text-xl font-bold">{article?.title}</h1>
      </Link>
      <p className="font-light">{truncateString(article?.description)}</p>
    </div>
  );
};

export default TopArticle;
