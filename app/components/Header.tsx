"use client";
import { useState, useEffect } from "react";
import { IHeader } from "../interfaces";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";

const Header = ({ setIsOpen }: IHeader) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tools-and-techstacks", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-xl py-3 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            RM
          </span>
          <Badge
            variant="secondary"
            className="hidden sm:inline-flex glass border-white/10"
          >
            Portfolio
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex lg:gap-x-8 lg:mr-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium leading-6 text-foreground/80 hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ModeToggle />

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="glass border-white/10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
