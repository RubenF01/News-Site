import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import TransparentLogo from "../public/ASAP NEWS-logos_transparent.png";
import XMark from "../public/icons/xmark-solid.svg";
import { useState, useEffect } from "react";
import { categories } from "@/utils";
import Link from "next/link";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const HamburgerMenu = ({ setIsOpen }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{
        height: "30vh",
        width: "30vw",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        opacity: 0,
        top: 0,
        borderBottomLeftRadius: "80%",
        borderBottomRightRadius: "80%",
      }}
      animate={{ height: "100vh", width: "100vw", opacity: 1, borderRadius: 0 }}
      exit={{
        height: "10vh",
        width: "10vh",
        opacity: 0,
        borderBottomLeftRadius: "80%",
        borderBottomRightRadius: "80%",
      }}
      transition={{ duration: 0.5 }}
      key="hamburger-menu"
      className="fixed inset-0 bg-butterIcing"
    >
      <div className="relative flex justify-center py-3">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            exit={{ opacity: 0 }}
            key="logo"
          >
            <Image src={TransparentLogo} alt="logo" className="w-44" />
          </motion.div>
        )}

        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            exit={{ opacity: 0 }}
            key="close-button"
            className="absolute top-0 bottom-0 w-4 my-auto right-7 h-min"
          >
            <XMark className="fill-red-500" onClick={handleClose} />
          </motion.div>
        )}
      </div>
      <div className="flex flex-col items-center pt-16 text-4xl capitalize gap-y-7">
        <AnimatePresence>
          {isVisible &&
            categories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  isVisible ? { delay: index * 0.2 } : { delay: 0, duration: 0 }
                }
                exit={{ opacity: 0 }}
                key={index}
              >
                <Link href={`/category/${category.label}`}>
                  <p>{category.label}</p>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
