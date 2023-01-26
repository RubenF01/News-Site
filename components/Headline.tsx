import type { Article } from "@/types";
import Dot from "../public/icons/circle-solid.svg";
import { formatDate } from "@/utils";
import Link from "next/link";

interface Props {
  headlineArticle: Article;
}

const Headline = ({ headlineArticle }: Props) => {
  return (
    <div className="sticky top-0 h-[92vh] bg-red-500">
      <div className="w-full h-full bg-black/50" />
      <div className="absolute flex flex-col text-white bottom-10 left-16 gap-y-4">
        <div className="flex items-center text-xs cursor-default gap-x-8">
          <div className="p-2 bg-red-500">
            <p className="uppercase">{headlineArticle?.category[0]}</p>
          </div>
          <div className="flex gap-x-3">
            <p className="whitespace-nowrap">{headlineArticle?.creator[0]}</p>
            <Dot className="w-1 fill-white" />
            {/* <p className="whitespace-nowrap">September 23, 2021</p> */}
            <p className="whitespace-nowrap">
              {formatDate(headlineArticle?.pubDate)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <Link href={headlineArticle?.link || "#"} target="_blank">
            <h1 className="max-w-3xl text-4xl cursor-pointer">
              {headlineArticle?.title}
            </h1>
          </Link>
          <p className="max-w-[600px]">{headlineArticle?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
