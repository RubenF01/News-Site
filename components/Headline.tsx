import Dot from "../public/icons/circle-solid.svg";

const Headline = () => {
  return (
    <div className="sticky top-0 h-[92vh] bg-red-500">
      <div className="w-full h-full bg-black/50" />
      <div className="absolute flex flex-col text-white bottom-10 left-16 gap-y-4">
        <div className="flex items-center text-xs cursor-default gap-x-8">
          <div className="px-2 py-2 bg-red-500">
            <p className="uppercase">technology</p>
          </div>
          <div className="flex gap-x-3">
            <p className="whitespace-nowrap">Sam Cooper</p>
            <Dot className="w-1 fill-white" />
            <p className="whitespace-nowrap">September 23, 2021</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="max-w-3xl text-4xl cursor-pointer">
            Canada's cyber agency dismantling fake government coronavirus
            pandemic response websites
          </h1>
          <p className="max-w-[600px]">
            Canadian intelligence agencies are fighting against attempts to
            exploit the coronavirus pandemic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
