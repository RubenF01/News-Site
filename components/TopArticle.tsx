import type { Article } from "@/types";
import { truncateString } from "@/utils";

interface Props {
  article: Article;
}

const TopArticle = ({ article }: Props) => {
  return (
    <div className="flex flex-col max-w-xs gap-y-3">
      <div className="p-2 text-xs text-white uppercase w-min bg-slate-600">
        <p>{article?.category[0]}</p>
      </div>
      <h1 className="text-xl font-bold">{article?.title}</h1>
      <p className="font-light">{truncateString(article?.description)}</p>
    </div>
  );
};

export default TopArticle;
