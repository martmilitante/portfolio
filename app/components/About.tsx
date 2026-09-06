"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, FolderGit2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Briefcase className="h-6 w-6 text-emerald-500" />,
      title: "6+ Years",
      description: "Experience",
    },
    {
      icon: <FolderGit2 className="h-6 w-6 text-slate-500" />,
      title: "6+ Projects",
      description: "Completed",
    },
    {
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      title: "Fullstack",
      description: "Specialization",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-600">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto font-light">
            Experienced fullstack developer with a passion for building scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
              I am a passionate Fullstack Developer based in Tacloban City,
              Leyte, Philippines, with a strong foundation in modern web
              technologies. My journey in software development started with a
              curiosity for how things work on the internet, which quickly
              evolved into a career building robust and scalable applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
              I specialize in the React ecosystem, particularly ReactJs and
              Next.js, and have extensive experience with Node.js, PHP, Laravel,
              and various database technologies like MySQL and Prisma. I believe
              in writing clean, maintainable code and creating intuitive user
              experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-emerald-600/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-600/10 to-slate-600/10 group-hover:from-emerald-600/20 group-hover:to-slate-600/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground/80 text-sm font-light">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
