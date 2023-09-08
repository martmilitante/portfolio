import React from "react";
import Drawer from "./Drawer";
import { IHeader } from "../interfaces";
import Image from "next/image";

const Header = ({ setIsOpen }: IHeader) => {
  return (
    <header className="absolute inset-x-0 sticky top-0 z-40 bg-slate-900">
      <nav
        className="flex items-center justify-between lg:justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Who Am I?
          </a>
          <a
            href="#tools-and-techstacks"
            className="text-sm font-semibold leading-6 text-white"
          >
            Tools & Tech Stacks
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Projects
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
