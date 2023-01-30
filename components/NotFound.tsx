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
      className="flex items-center justify-center min-h-[80vh] px-16 pt-14 gap-x-10"
    >
      <div className="flex flex-col items-center justify-center leading-none">
        <h1 className="font-bold text-[300px]">404</h1>
        <h2 className="pb-4 text-4xl">
          No articles were found in this category!
        </h2>
        <Link href="/">
          <button className="px-2 py-2 border-2 border-black rounded hover:bg-black hover:text-white w-min whitespace-nowrap">
            Back to Homepage
          </button>
        </Link>
      </div>
      <div>
        <Image src={Clumsy} alt="404 image" className="w-[700px]" />
      </div>
    </motion.div>
  );
};

export default NotFound;
