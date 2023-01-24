import Separator from "./Separator";
import Link from "next/link";
import LinkIcon from "../public/icons/link-icon.svg";
import Image from "next/image";
import useCategoryQuery from "@/hooks/useCategoryQuery";

interface Props {
  category: string;
  index: number;
  categoryArray: string[];
}

const CategorySection = ({ category, index, categoryArray }: Props) => {
  return (
    <>
      <div className="flex justify-between pt-5 mb-36">
        <div className="flex flex-col max-w-sm gap-y-4">
          <h1 className="font-bold cursor-default text-7xl">Investigations</h1>
          <Link
            href="/"
            className="flex uppercase w-min whitespace-nowrap gap-x-2"
          >
            see all <LinkIcon className="w-3" />
          </Link>
        </div>
        <div className="flex gap-x-8">
          <div className="max-w-[280px] flex flex-col justify-between">
            <h1 className="text-xl font-bold">
              Suspects in alleged Markham illegal casino mansion linked to B.C.
              casino suspects
            </h1>
            <p className="text-lg font-light">
              Alleged criminal activities in Richmond, B.C., and Markham,
              Ontario have come into focus in recent weeks.
            </p>
            <Link
              href="/"
              className="flex text-sm font-medium uppercase w-min gap-x-2 whitespace-nowrap"
            >
              read article <LinkIcon className="w-3" />
            </Link>
          </div>
          <div className="relative h-64 w-96">
            <Image
              src="/test-image.png"
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default CategorySection;
