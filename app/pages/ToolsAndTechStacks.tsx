import Image from "next/image";
import { CircularProgress } from "@nextui-org/progress";
import { Tooltip } from "@nextui-org/tooltip";

import { toolsAndTechStacksData } from "../staticData/data";
import styles from "../styles/style.module.scss";

const ToolsAndTechStacks = () => {
  return (
    <div className=" px-12">
      <h1 className="text-center text-xl font-bold pb-24">
        Tools & Tech Stacks
      </h1>
      <div
        id="tools-and-techstacks"
        className="flex flex-wrap justify-center gap-5"
      >
        {toolsAndTechStacksData.map((item, idx) => {
          return (
            <Tooltip content={item.title} placement="bottom" key={idx}>
              <CircularProgress
                classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: item.strokeColor,
                  track: "dark:stroke-white/10",
                  value: "text-3xl font-semibold dark:text-white",
                }}
                value={item.value}
                strokeWidth={4}
                showValueLabel={true}
                valueLabel={
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src={item.src}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                    <span className="text-xs dark:text-white">
                      {item.txtValue}
                    </span>
                  </div>
                }
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsAndTechStacks;
