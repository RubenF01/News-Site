import WhiteLogo from "../public/ASAP NEWS-logos_white.png";
import Image from "next/image";
import { categories } from "@/utils";
import Link from "next/link";
import Heart from "../public/icons/heart-solid.svg";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-between w-full pt-10 pb-8 text-white bg-black 2xl:static px-7 2xl:px-16 2xl:flex-row min-h-80">
      <div className="flex flex-col justify-between order-last pb-8 text-center 2xl:text-left 2xl:pb-0 2xl:max-w-md 2xl:order-first gap-y-3 2xl:gap-y-0">
        <div>
          <Image
            src={WhiteLogo}
            alt="logo"
            className="mx-auto 2xl:-ml-2 w-44"
          />
          <p>
            ASAP News provides innovative and essential investigative
            journalism, opinions, and analysis from some of the major news
            sources. Articles provided by{" "}
            <a href="https://newsdata.io/" target="_blank">
              NEWSDATA.IO
            </a>
          </p>
        </div>
        <p className="text-center 2xl:text-left">
          2023 ASAP News - All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col items-center justify-between 2xl:items-start">
        <div>
          <h3 className="pb-2 text-xl font-bold text-center 2xl:text-left 2xl:text-base">
            Categories
          </h3>
          <ul className="flex flex-col items-center pb-5 2xl:pb-0 2xl:items-start gap-y-2 2xl:gap-y-0">
            {categories.map((category, index) => (
              <Link
                href={`/category/${category.label}`}
                key={index}
                className="capitalize cursor-pointer"
              >
                {category.label}
              </Link>
            ))}
          </ul>
        </div>
        <p className="absolute flex text-white bottom-2 gap-x-1 2xl:static 2xl:pt-5">
          Created with <Heart className="w-4 fill-red-500" /> by{" "}
          <Link
            href="https://rubenfrias.com/"
            target="_blank"
            className="block"
          >
            Rubén
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
