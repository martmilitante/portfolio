import Image from "next/image";

import { toolsAndTechStacksData } from "../staticData/data";

const ToolsAndTechStacks = () => {
  return (
    <>
      <h1 className="text-center text-xl font-bold pb-12">
        Tools & Tech Stacks
      </h1>
      <div
        id="tools-and-techstacks"
        className="flex flex-wrap justify-center gap-6 px-56"
      >
        {toolsAndTechStacksData.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item.src}
              alt={item.alternativeTxt}
              width="80"
              height="80"
            />
          );
        })}
      </div>
    </>
  );
};

export default ToolsAndTechStacks;
