"use client";
import React from "react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-18 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-360 h-full mx-auto flex items-center px-39.5">
        {/* Logo */}
        <span className="text-white font-display font-bold text-[32px] cursor-pointer select-none">
          {" "}
          SUMMER.X
        </span>

        {/* Centered Nav Links */}
        <div className="flex flex-1 items-center justify-center gap-10.75">
          {[
            { label: "About Me", id: "about" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-[#e4e4e4] cursor-pointer group display-small-text"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white duration-300 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
