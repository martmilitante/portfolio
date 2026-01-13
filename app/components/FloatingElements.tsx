"use client";
import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 glass-card p-4 rounded-full hover-lift group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-foreground group-hover:text-cyan-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Decorative floating shapes */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-pulse pointer-events-none" />
      <div className="fixed bottom-40 right-20 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="fixed top-1/2 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
    </>
  );
}
