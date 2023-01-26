import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  category: string;
  currentRoute: string;
}

const NavBarItem = ({ category, currentRoute }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={`/category/${category}`}
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {category}
      <AnimatePresence>
        {(currentRoute === category || isHover) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-1 left-0 right-0 h-[2px] mx-auto bg-black w-14"
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

export default NavBarItem;
