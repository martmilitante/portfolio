"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { toolsAndTechStacksData } from "../staticData/data";

const ToolsAndTechStacks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tools-and-techstacks");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getProficiencyLevel = (value: number) => {
    if (value >= 90) return { label: "Expert", color: "bg-green-500" };
    if (value >= 75) return { label: "Advanced", color: "bg-teal-500" };
    if (value >= 60) return { label: "Intermediate", color: "bg-yellow-500" };
    return { label: "Beginner", color: "bg-gray-500" };
  };

  return (
    <section id="tools-and-techstacks" className="px-6 lg:px-12 py-24 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 glass">
            Technical Expertise
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and proficiency across various technologies
          </p>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ${
            isVisible ? 'fade-in' : 'opacity-0'
          }`}
        >
          {toolsAndTechStacksData.map((item, idx) => {
            const proficiency = getProficiencyLevel(item.value);
            const isHovered = hoveredIndex === idx;
            
            return (
              <div
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative glass-card p-6 rounded-2xl hover-lift transition-all duration-300 h-full flex flex-col items-center justify-between border border-border/50 hover:border-cyan-500/50">
                  {/* Icon container */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.strokeColor.replace('stroke-', 'from-')} to-transparent rounded-full blur-md opacity-30 transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-30'}`} />
                    <div className="relative w-16 h-16 flex items-center justify-center bg-background/50 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.src}
                        width={40}
                        height={40}
                        alt={item.title}
                        className="drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-center mb-3 text-foreground group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Progress bar */}
                  <div className="w-full mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className="text-xs font-bold text-foreground">{item.txtValue}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.strokeColor.replace('stroke-', 'from-')} to-teal-500 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${item.value}%` : '0%',
                          transitionDelay: `${idx * 0.05}s`
                        }}
                      />
                    </div>
                  </div>

                  {/* Proficiency badge */}
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${proficiency.color} text-white border-0`}
                  >
                    {proficiency.label}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card p-6 rounded-xl text-center border border-border/50">
            <div className="text-3xl font-bold gradient-text mb-2">
              {toolsAndTechStacksData.length}+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center border border-border/50">
            <div className="text-3xl font-bold gradient-text mb-2">
              {toolsAndTechStacksData.filter(item => item.value >= 90).length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center border border-border/50">
            <div className="text-3xl font-bold gradient-text mb-2">
              {toolsAndTechStacksData.filter(item => item.value >= 75).length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced+</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center border border-border/50">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechStacks;
