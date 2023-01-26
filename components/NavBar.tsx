import SearchIcon from "../public/icons/magnifying-glass-solid.svg";
import Image from "next/image";
import TransparentLogo from "../public/ASAP NEWS-logos_transparent.png";
import Link from "next/link";
import { categories } from "@/utils";

const NavBar = () => {
  return (
    <div className="relative flex justify-center py-3">
      <SearchIcon className="absolute top-0 bottom-0 w-5 pt-3 my-auto left-10" />
      <div className="flex items-center gap-x-5">
        <nav className="flex uppercase gap-x-5">
          {categories.slice(0, 3).map((category, index) => (
            <Link href={`/category/${category}`} key={index}>
              {category}
            </Link>
          ))}
        </nav>
        <Link href="/">
          <Image src={TransparentLogo} alt="logo" className="w-44" />
        </Link>
        <nav className="flex uppercase gap-x-5">
          {categories.slice(3).map((category, index) => (
            <Link href={`/category/${category}`} key={index}>
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
