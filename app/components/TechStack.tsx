"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      items: [
        "HTML & CSS",
        "JavaScript",
        "ReactJs",
        "VueJs",
        "Angular",
        "MUI",
        "Tanstack Query",
        "Tailwind CSS",
        "Shadcn UI",
      ],
    },
    {
      name: "Backend",
      items: ["NodeJs", "ExpressJs", "PHP", "Laravel", "GraphQL", ".NET"],
    },
    { name: "Database", items: ["Mysql/MariaDB", "TypeORM", "PrismaJs"] },
    {
      name: "Tools & Testing",
      items: [
        "TypeScript",
        "Zod",
        "Git",
        "Jest",
        "React Testing Library",
        "WordPress",
      ],
    },
  ];

  return (
    <section
      id="tools-and-techstacks"
      className="py-24 px-6 lg:px-12 relative bg-foreground/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-600">
              Stack
            </span>
          </h2>
          <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto font-light">
            The tools and technologies I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-white/10 hover-lift h-full group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-slate-400">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
