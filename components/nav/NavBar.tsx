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
import HamburgerIcon from "../../public/icons/bars-solid.svg";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const NavBar = ({ setIsOpen }: Props) => {
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

  const handleToggle = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex items-center justify-center py-3 bg-butterIcing">
      <SearchIcon className="absolute top-0 bottom-0 hidden w-5 pt-2 my-auto left-10 2xl:block" />
      <div className="flex items-center gap-x-5">
        <nav className="hidden uppercase 2xl:flex gap-x-5">
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
        <nav className="hidden uppercase 2xl:flex gap-x-5">
          {categories.slice(3).map((category, index) => (
            <NavBarItem
              category={category}
              key={index}
              currentRoute={currentRoute as string}
            />
          ))}
        </nav>
      </div>
      <div className="absolute top-0 bottom-0 hidden my-auto right-10 w-min h-min 2xl:block">
        <Select
          options={countries}
          defaultValue={countries[3]}
          className="right-0 w-48"
          onChange={handleChange}
          instanceId="country-select"
        />
      </div>
      <HamburgerIcon className="absolute w-6 right-7" onClick={handleToggle} />
    </div>
  );
};

export default NavBar;
