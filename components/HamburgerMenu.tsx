import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import TransparentLogo from "../public/ASAP NEWS-logos_transparent.png";
import XMark from "../public/icons/xmark-solid.svg";
import { useState, useEffect, useContext } from "react";
import { categories } from "@/utils";
import Link from "next/link";
import Select, { SingleValue } from "react-select";
import { countries } from "@/utils";
import CountryContext from "@/context/countryCountext";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const HamburgerMenu = ({ setIsOpen }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { country, setCountry } = useContext(CountryContext);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    selected: SingleValue<{
      label: string;
      value: string;
    }>
  ) => {
    selected && setCountry(selected);
    handleClose();
  };

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
        transition: { delay: 0 },
      }}
      transition={{ duration: 0.5 }}
      key="hamburger-menu"
      className="fixed inset-0 bg-butterIcing"
    >
      <div className="relative flex justify-center py-3">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              key="logo"
            >
              <Link href="/">
                <Image src={TransparentLogo} alt="logo" className="w-44" />
              </Link>
            </motion.div>
          )}

          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              key="close-button"
              className="absolute top-0 bottom-0 w-4 my-auto right-7 h-min"
            >
              <XMark className="fill-red-500" onClick={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-center pt-16 text-4xl capitalize gap-y-7">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              className="z-50 pb-4 w-min h-min"
            >
              <Select
                options={countries}
                defaultValue={country}
                className="right-0 w-48 text-sm"
                onChange={handleChange}
                instanceId="country-select"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisible &&
            categories.map((category, index) => (
              <motion.div
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
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
