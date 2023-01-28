import Separator from "./Separator";
import Link from "next/link";
import LinkIcon from "../public/icons/link-icon.svg";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import { truncateString, randomImgSrc } from "@/utils";

interface Props {
  category: string;
  index: number;
  categoryArray: string[];
}

const CategorySection = ({ category, index, categoryArray }: Props) => {
  const { data } = useCategoryQuery(category);
  const mainArticle = data?.results[0];

  return (
    <>
      <div className="flex justify-between pt-5 mb-36">
        <div className="flex flex-col max-w-sm gap-y-4">
          <h1 className="font-bold capitalize cursor-default text-7xl">
            {category}
          </h1>
          <Link
            href={`/category/${category}`}
            className="flex uppercase w-min whitespace-nowrap gap-x-2"
          >
            see all <LinkIcon className="w-3" />
          </Link>
        </div>
        <div className="flex gap-x-8">
          <div className="max-w-[280px] flex flex-col justify-between">
            <h1 className="text-xl font-bold">{mainArticle?.title}</h1>
            <p className="text-lg font-light">
              {truncateString(mainArticle?.description)}
            </p>
            <Link
              href={mainArticle?.link || "#"}
              target="_blank"
              className="flex text-sm font-medium uppercase w-min gap-x-2 whitespace-nowrap"
            >
              read article <LinkIcon className="w-3" />
            </Link>
          </div>
          <div className="h-64 w-96">
            <img
              src={
                mainArticle && mainArticle.image_url
                  ? mainArticle.image_url
                  : randomImgSrc()
              }
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {index !== categoryArray.length - 1 && <Separator />}
    </>
  );
};

export default CategorySection;
