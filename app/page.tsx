"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { ToolsAndTechStacks, Projects, Contact } from "./pages";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-gray pb-60">
      <Header setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <a href="#" className="text-sm font-semibold leading-6 text-gray px-10">
          Who Am I?
        </a>
        <a
          href="#tools-and-techstacks"
          className="text-sm font-semibold leading-6 text-gray px-10"
        >
          Tools & Tech Stacks
        </a>
        <a
          href="#projects"
          className="text-sm font-semibold leading-6 text-gray px-10"
        >
          Projects
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
            <h1 className="text-4xl dark:text-white font-bold tracking-tight text-gray-900 sm:text-6xl">{`Hi, I'm Reymart`}</h1>

            <p>{`An aspiring Frontend Engineer, Software Developer with a passion for crafting exceptional digital experiences. With a keen eye for design and a love for coding, I thrive on bringing creativity and functionality to the web. Whether it's building responsive websites or creating innovative software solutions, I'm dedicated to pushing the boundaries of what's possible in the digital world.`}</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/martmilitante"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/github-mark.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/reymartmilitante/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/linkedin.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </Link>
              <Link
                href="mailto:martmorbos@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/images/gmail.png" width={30} height={30} alt="" />
              </Link>
              <Link href="tel:+639278571060" target="_blank" rel="noreferrer">
                <Image src="/images/phone.png" width={30} height={30} alt="" />
              </Link>
            </div>
            <a
              href="/Reymart-Resume.pdf"
              className="rounded py-3 px-8 font-normal text-white bg-slate-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <ToolsAndTechStacks />
      <Projects />
    </main>
  );
}
