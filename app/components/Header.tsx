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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass backdrop-blur-2xl py-3 border-b border-white/5 shadow-lg shadow-black/5"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-600 hover:from-emerald-500 hover:to-slate-500 transition-all duration-300">
            RM
          </span>
          <Badge
            variant="secondary"
            className="hidden sm:inline-flex glass border-white/20 bg-white/5 backdrop-blur-sm text-xs font-semibold"
          >
            PORTFOLIO
          </Badge>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex lg:gap-x-10 lg:mr-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold leading-6 text-foreground/70 hover:text-foreground transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-slate-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <ModeToggle />

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="glass border-white/10 hover:bg-white/10 transition-colors"
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
