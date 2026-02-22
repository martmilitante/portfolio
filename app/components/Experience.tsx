"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer III",
      company: "Full Scale Teams PH, Inc.",
      date: "2025 - Present",
      description:
        "Working closely with the team to develop new features and improvements for both frontend and backend. Collaborating with UX/UI designers and Product Managers to implement designs and ensure seamless integration. Working closely with tech leads to ensure high quality code standard for functionality and data flow throughout the application. Building RESTful APIs and integrating them with the front-end to handle data communication efficiently.",
    },
    {
      title: "Software Engineer",
      company: "smartIT - Freelance",
      date: "2024 - Present",
      description:
        "Leading the development of new features and improvements for both frontend and backend. Collaborating with UX/UI designers and Product Managers to implement designs and ensure seamless integration. Working closely with tech leads to ensure high quality code standard for functionality and data flow throughout the application. Building RESTful APIs and integrating them with the front-end to handle data communication efficiently.",
    },
    {
      title: "Fullstack Developer",
      company: "NoonDalton",
      date: "2023 - 2025",
      description:
        "Developed new features for both frontend and backend. Collaborated with UX/UI designer and Product Manager to implement designs and ensure seamless integration. Worked closely with tech leads to ensure high quality code standard for functionality and data flow throughout the application. Built RESTful APIs and integrated them with the front-end to handle data communication efficiently.",
    },
    {
      title: "Frontend Engineer",
      company: "SeedTech Philippines Inc.",
      date: "2022 - 2023",
      description:
        "Developed and maintained user-friendly and responsive front-end. Collaborated with UX/UI designers to implement designs and ensure seamless integration. Built RESTful APIs and integrated them with the front-end to handle data communication efficiently. Worked closely with the back-end team to ensure smooth functionality and data flow throughout the application.",
    },
    {
      title: "Software Developer",
      company: "Intechsive Software Development",
      date: "2020 - 2022",
      description:
        "Developed and maintained user-friendly and responsive front-end. Collaborated with UX/UI designers to implement designs and ensure seamless integration. Built RESTful APIs and integrated them with the front-end to handle data communication efficiently.",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      date: "2019 - 2020",
      description:
        "Creating, Designing, Debugging, Troubleshooting, Fixing, Maintaining, Updating and Developing functions and processes on web applications and websites. In charge of connecting the website to server and hosting.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-12 relative bg-foreground/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career highlights.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-1/2 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-background border-4 border-indigo-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Briefcase className="w-3 h-3 text-indigo-500" />
              </div>

              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
              >
                <Card className="glass-card border-white/10 hover-lift relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {exp.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-indigo-400 transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
