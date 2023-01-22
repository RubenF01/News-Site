import SearchIcon from "../public/icons/magnifying-glass-solid.svg";
import Image from "next/image";
import TransparentLogo from "../public/ASAP NEWS-logos_transparent.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="relative flex justify-center py-3">
      <SearchIcon className="absolute top-0 bottom-0 w-5 pt-3 my-auto left-10" />
      <div className="flex items-center gap-x-5">
        <nav className="flex uppercase gap-x-5">
          <Link href="/">business</Link>
          <Link href="/">entertainment</Link>
          <Link href="/">politics</Link>
        </nav>
        <Image src={TransparentLogo} alt="logo" className="w-44" />
        <nav className="flex uppercase gap-x-5">
          <Link href="/">science</Link>
          <Link href="/">technology</Link>
          <Link href="/">world</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
