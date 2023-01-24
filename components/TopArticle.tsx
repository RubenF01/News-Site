import type { Article } from "@/types";

interface Props {
  article: Article;
}

const TopArticle = ({ article }: Props) => {
  return (
    <div className="flex flex-col max-w-xs gap-y-3">
      <div className="p-2 text-xs text-white uppercase w-min bg-slate-600">
        <p>politics</p>
      </div>
      <h1 className="text-xl font-bold">
        Why is the World Health Organization accused of mishandling the
        coronavirus
      </h1>
      <p className="font-light">
        Teresa Tam is hopeful Canada's advance order deals from leading American
        COVID-19 vaccine candidates will meet Canada's vaccine supply...
      </p>
    </div>
  );
};

export default TopArticle;
