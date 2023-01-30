import WhiteLogo from "../public/ASAP NEWS-logos_white.png";
import Image from "next/image";
import { categories } from "@/utils";
import Link from "next/link";
import Heart from "../public/icons/heart-solid.svg";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-16 pt-10 pb-8 text-white bg-black h-80">
      <div className="flex flex-col justify-between max-w-md">
        <div>
          <Image src={WhiteLogo} alt="logo" className="-ml-2 w-44" />
          <p>
            ASAP News provides innovative and essential investigative
            journalism, opinions, and analysis from some of the major news
            sources. Articles provided by{" "}
            <a href="https://newsdata.io/" target="_blank">
              NEWSDATA.IO
            </a>
          </p>
        </div>
        <p>2023 ASAP News - All Rights Reserved</p>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="pb-2 font-bold">Categories</h3>
          <ul className="flex flex-col">
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
        <p className="flex text-white gap-x-1">
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
