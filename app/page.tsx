"use client";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-emerald-500/30">
      {/* Custom cursor effect */}
      <div
        className="pointer-events-none fixed w-6 h-6 rounded-full border-2 border-emerald-600/60 z-50 mix-blend-screen transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
        }}
      />
      <div
        className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-emerald-600 z-50 mix-blend-screen transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
        }}
      />

      <Header setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Button
          variant="ghost"
          className="justify-start text-base font-semibold hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 rounded-lg"
          asChild
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base font-semibold hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 rounded-lg"
          asChild
        >
          <a href="#tools-and-techstacks" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base font-semibold hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 rounded-lg"
          asChild
        >
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base font-semibold hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 rounded-lg"
          asChild
        >
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base font-semibold hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 rounded-lg"
          asChild
        >
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </Button>
      </Drawer>

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/10 bg-background/50 backdrop-blur-md">
        <p>
          &copy; {new Date().getFullYear()} Reymart Militante. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
