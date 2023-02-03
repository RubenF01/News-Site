/* eslint-disable @next/next/no-img-element */
import Separator from "./Separator";
import Link from "next/link";
import LinkIcon from "../public/icons/link-icon.svg";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import { truncateString, randomImgSrc } from "@/utils";
import type { Category } from "@/types";
import { motion } from "framer-motion";

interface Props {
  category: Category;
  index: number;
  categoryArray: Category[];
}

const CategorySection = ({ category, index, categoryArray }: Props) => {
  const { data } = useCategoryQuery(category.label);
  const mainArticle = data?.results[0];

  return (
    <motion.div
      transition={{ delay: 0.3, duration: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`${!data?.results.length && "hidden"}`}
    >
      <div className="flex flex-col justify-between pt-5 lg:flex-row pb-36">
        <div className="flex justify-between pb-5 lg:max-w-sm lg:pb-0 lg:justify-start lg:flex-col gap-y-4">
          <h1 className="text-4xl font-bold capitalize cursor-default lg:text-5xl 2xl:text-7xl">
            {category.label}
          </h1>
          <Link
            href={`/category/${category.label}`}
            className="flex items-center uppercase bottom-5 w-min whitespace-nowrap gap-x-2"
          >
            see all <LinkIcon className="w-3" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-8 lg:gap-x-2 2xl:gap-x-8 gap-y-5 lg:gap-y-0">
          <div className="lg:max-w-[280px] flex flex-col gap-y-3 lg:gap-y-0 justify-between">
            <h1 className="text-xl font-bold lg:text-lg 2xl:text-xl">
              {mainArticle?.title}
            </h1>
            <p className="text-lg font-light lg:text-base 2xl:text-lg">
              {truncateString(mainArticle?.description, "short")}
            </p>
            <Link
              href={mainArticle?.link || "#"}
              target="_blank"
              className="flex text-sm font-medium uppercase w-min gap-x-2 whitespace-nowrap"
            >
              read article <LinkIcon className="w-3" />
            </Link>
          </div>
          <img
            src={
              mainArticle && mainArticle.image_url
                ? mainArticle.image_url
                : randomImgSrc()
            }
            alt="image"
            className="object-cover rounded-lg border-[1px] border-black h-64 w-96 sm:w-full sm:h-96 lg:w-80 lg:h-64 2xl:h-80 2xl:w-[450px] order-first lg:order-last"
          />
        </div>
      </div>
      {index !== categoryArray.length - 1 && <Separator />}
    </motion.div>
  );
};

export default CategorySection;
