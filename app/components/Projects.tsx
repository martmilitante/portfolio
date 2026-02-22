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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
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
            >
              <Card className="glass-card border-white/10 hover-lift h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="glass rounded-full"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                    {project.heading}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-muted-foreground">
                    {project.body}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Tailwind"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-foreground/5 hover:bg-foreground/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-white/5 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-indigo-400"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-purple-400"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
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
