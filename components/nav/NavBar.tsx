import SearchIcon from "../../public/icons/magnifying-glass-solid.svg";
import Image from "next/image";
import TransparentLogo from "../../public/ASAP NEWS-logos_transparent.png";
import Link from "next/link";
import { categories } from "@/utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>();
  const { category } = router.query;

  useEffect(() => {
    setCurrentRoute(category as string);
  }, [category]);

  return (
    <div className="relative flex justify-center py-3">
      <SearchIcon className="absolute top-0 bottom-0 w-5 pt-3 my-auto left-10" />
      <div className="flex items-center gap-x-5">
        <nav className="flex uppercase gap-x-5">
          {categories.slice(0, 3).map((category, index) => (
            <NavBarItem
              category={category}
              key={index}
              currentRoute={currentRoute as string}
            />
          ))}
        </nav>
        <Link href="/">
          <Image src={TransparentLogo} alt="logo" className="w-44" />
        </Link>
        <nav className="flex uppercase gap-x-5">
          {categories.slice(3).map((category, index) => (
            <NavBarItem
              category={category}
              key={index}
              currentRoute={currentRoute as string}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
