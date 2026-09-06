"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projectArr } from "../staticData/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-600">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto font-light">
            A selection of recent work and personal projects showcasing my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectArr.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="glass-card border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-emerald-600/10 transition-all duration-300 h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-emerald-600/20 via-slate-600/20 to-emerald-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="glass rounded-lg font-semibold"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                    {project.heading}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-muted-foreground/80 text-sm">
                    {project.body}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Tailwind"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-emerald-600/10 text-emerald-400/80 hover:bg-emerald-600/20 border-emerald-600/20 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-white/5 pt-4 gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300 flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-slate-400 hover:bg-slate-600/10 transition-all duration-300 flex-1"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
