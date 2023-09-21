import { IDrawer } from "../interfaces";

const Drawer = ({ children, isOpen, setIsOpen }: IDrawer) => {
  return (
    <div
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <button
            className="p-4 font-bold text-lg px-10"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </article>
      </div>
      <button
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></button>
    </div>
  );
};

export default Drawer;
