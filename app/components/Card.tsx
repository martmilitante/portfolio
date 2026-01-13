"use client";
import { useState } from "react";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ICard {
  heading: string;
  body: string;
  index: number;
}

const Card = ({ heading, body, index }: ICard) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ShadcnCard
      className="glass-card hover-lift relative overflow-hidden group transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Glowing effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="gradient-text">{heading}</CardTitle>
          <Badge className="glass">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-1" />
            New
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <CardDescription className="text-base leading-relaxed">
          {body}
        </CardDescription>
      </CardContent>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-bl-3xl" />
    </ShadcnCard>
  );
};

export default Card;
