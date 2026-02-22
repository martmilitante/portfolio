"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge
              variant="secondary"
              className="glass px-4 py-1.5 text-sm rounded-full"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Reymart
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-muted-foreground">
              Fullstack Developer
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            I build scalable, performant, and elegant web applications.
            Passionate about crafting exceptional digital experiences with a
            keen eye for design and a love for clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/25 transition-all rounded-full"
              asChild
            >
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto glass rounded-full hover:bg-foreground/5"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          {/* Floating Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 opacity-80">
            {["ReactJs", "TypeScript", "Node.js", "Laravel", "GraphQL"].map(
              (tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Badge variant="outline" className="glass py-1.5 px-3">
                    {tech}
                  </Badge>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
