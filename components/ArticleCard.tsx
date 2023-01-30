import type { Article } from "@/types";
import { randomImgSrc } from "@/utils";
import Separator from "@/components/Separator";
import Dot from "../public/icons/circle-solid.svg";
import { formatDate } from "@/utils";
import Link from "next/link";

interface Props {
  article: Article;
  index: number;
  articleArr: Article[];
}

const ArticleCard = ({ article, index, articleArr }: Props) => {
  return (
    <div>
      <div className="flex pt-5 gap-x-4 pb-36">
        <div className="flex-shrink-0 h-64 w-96">
          <img
            src={
              article && article?.image_url
                ? article?.image_url
                : randomImgSrc()
            }
            alt="image"
            className="object-cover w-full h-full rounded-lg border-[1px] border-black"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center font-light gap-x-2">
            <p>{article?.creator}</p>
            <Dot className="w-1" />
            <p>{formatDate(article?.pubDate)}</p>
          </div>
          <Link href={article?.link} target="_blank">
            <h1 className="pt-2 text-2xl font-bold">{article?.title}</h1>
          </Link>
          <p>{article?.description}</p>
        </div>
      </div>
      {index !== articleArr.length - 1 && <Separator />}
    </div>
  );
};

export default ArticleCard;
