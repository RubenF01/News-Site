import SearchIcon from "../../public/icons/magnifying-glass-solid.svg";
import Image from "next/image";
import TransparentLogo from "../../public/ASAP NEWS-logos_transparent.png";
import Link from "next/link";
import { categories } from "@/utils";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";
import Select, { SingleValue } from "react-select";
import { countries } from "@/utils";
import CountryContext from "@/context/countryCountext";

const NavBar = () => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>();
  const { category } = router.query;
  const { setCountry } = useContext(CountryContext);

  useEffect(() => {
    setCurrentRoute(category as string);
  }, [category]);

  const handleChange = (
    selected: SingleValue<{
      label: string;
      value: string;
    }>
  ) => {
    selected && setCountry(selected.value);
  };

  return (
    <div className="relative flex items-center justify-center py-3">
      <SearchIcon className="absolute top-0 bottom-0 w-5 pt-2 my-auto left-10" />
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
      <div className="absolute top-0 bottom-0 my-auto right-10 w-min h-min">
        <Select
          options={countries}
          defaultValue={countries[3]}
          className="right-0 w-48"
          onChange={handleChange}
          instanceId="country-select"
        />
      </div>
    </div>
  );
};

export default NavBar;
