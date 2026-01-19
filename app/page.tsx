"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import FloatingElements from "./components/FloatingElements";
import AnimatedBackground from "./components/AnimatedBackground";
import { ToolsAndTechStacks, Projects } from "./pages";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

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
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Custom cursor effect */}
      <div
        className="pointer-events-none fixed w-6 h-6 rounded-full border-2 border-cyan-500 z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}

      <Header setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Button
          variant="ghost"
          className="justify-start text-base"
          asChild
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base"
          asChild
        >
          <a href="#tools-and-techstacks" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base"
          asChild
        >
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start text-base"
          asChild
        >
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </Button>
      </Drawer>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="fade-in-up">
            {/* Profile Image with glow effect */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <Avatar className="relative w-[200px] h-[200px] border-4 border-border shadow-2xl hover:scale-105 transition-transform duration-300">
                <AvatarImage src="/portfolio/profile.png" alt="Reymart Militante" />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                  RM
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text">Reymart</span>
            </h1>

            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                  Frontend Engineer & Software Developer
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="glass">
                  Available for hire
                </Badge>
                <Badge variant="outline" className="glass">
                  Remote
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Passionate about crafting exceptional digital experiences with a keen eye for design
                and a love for coding. I thrive on bringing creativity and functionality to the web,
                building responsive websites and creating innovative software solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-10">
              {[
                { href: "https://github.com/martmilitante", icon: Github, alt: "GitHub" },
                { href: "https://www.linkedin.com/in/reymartmilitante/", icon: Linkedin, alt: "LinkedIn" },
                { href: "mailto:martmorbos@gmail.com", icon: Mail, alt: "Email" },
                { href: "tel:+639278571060", icon: Phone, alt: "Phone" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={idx}
                    variant="outline"
                    size="icon"
                    className="glass-card rounded-full hover-lift"
                    asChild
                  >
                    <Link href={social.href} target="_blank" rel="noreferrer">
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 shadow-lg hover:shadow-cyan-500/50 transition-all"
              asChild
            >
              <a href="/Reymart-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <ToolsAndTechStacks />
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="glass-card hover-lift"
            asChild
          >
            <a href="mailto:martmorbos@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2026 Reymart Militante. All rights reserved.</p>
      </footer>
    </div>
  );
}
