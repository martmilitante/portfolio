"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import ToolsAndTechStacks from "./pages/ToolsAndTechStacks";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-gray">
      <Header setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <a
          href="#tools-and-techstacks"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Product
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Features
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Marketplace
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Company
        </a>
      </Drawer>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-26">
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt="Reymart Militante"
              style={{
                borderRadius: "50% 50%",
                backgroundColor: "#ccc",
                textAlign: "center",
                objectFit: "contain",
              }}
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{`Hi, I'm Reymart`}</h1>

            <p>{`An aspiring Frontend Engineer, Software Developer, and WordPress Developer with a passion for crafting exceptional digital experiences. With a keen eye for design and a love for coding, I thrive on bringing creativity and functionality to the web. Whether it's building responsive websites, creating innovative software solutions, or customizing WordPress sites to perfection, I'm dedicated to pushing the boundaries of what's possible in the digital world.`}</p>
            <div className="flex">
              <Link
                href="https://github.com/martmilitante"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/github-mark.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </Link>
              <Link
                href="https://github.com/martmilitante"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/linkedin.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </Link>
            </div>
            <button>Download Resume</button>
          </div>
        </div>
      </div>
      <ToolsAndTechStacks />
      {/* <About />
      <Projects />
      <Contact /> */}
    </main>
  );
}
