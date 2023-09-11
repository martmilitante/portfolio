import Image from "next/image";

import { toolsAndTechStacksData } from "../staticData/data";
import styles from "../styles/style.module.scss";

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
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {toolsAndTechStacksData.map((item, idx) => {
              return (
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                  key={idx}
                >
                  <Image
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    src={item.src}
                    alt={item.alternativeTxt}
                    width="90"
                    height="90"
                  />
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* <Image
              key={idx}
              src={item.src}
              alt={item.alternativeTxt}
              width="90"
              height="90"
              className="boxShadow object-contain"
            /> */}
      </div>
    </>
  );
};

export default ToolsAndTechStacks;
