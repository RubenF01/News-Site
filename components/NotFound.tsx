import { motion } from "framer-motion";
import Image from "next/image";
import Clumsy from "../public/clumsy.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="flex flex-col 2xl:flex-row items-center justify-center min-h-[80vh] px-16 pt-14 gap-x-10"
    >
      <div className="flex flex-col items-center justify-center leading-none">
        <h1 className="font-bold text-[150px] 2xl:text-[300px]">404</h1>
        <h2 className="pb-4 text-xl text-center 2xl:text-left 2xl:text-4xl">
          No articles were found in this category!
        </h2>
        <Link href="/">
          <button className="px-2 py-2 border-2 border-black rounded hover:bg-black hover:text-white w-min whitespace-nowrap">
            Back to Homepage
          </button>
        </Link>
      </div>
      <div className="order-first 2xl:order-last">
        <Image src={Clumsy} alt="404 image" className="2xl:w-[700px]" />
      </div>
    </motion.div>
  );
};

export default NotFound;
