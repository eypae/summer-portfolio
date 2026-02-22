"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { navItems } from "@/constants/constants";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -89 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-19.5 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-black/90 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-360 mx-auto h-full flex items-center justify-between global-padding">
          {/* Logo */}
          <span className="text-white font-display font-bold text-[24px] md:text-[32px] cursor-pointer select-none">
            {" "}
            SUMMER.X
          </span>

          {/* Centered Nav Links - desktop only*/}
          <div className="hidden md:flex flex-1 items-center justify-center gap-10.75">
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

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Contact Button — desktop */}
            <Link
              href="https://api.whatsapp.com/send?phone=6586687123&text=Hi%20Summer!%20I%20came%20across%20your%20website%20and%20I%20wish%20to%20learn%20more%20about%20your%20service.%20Thanks!"
              target="_blank"
              className="hidden md:flex"
            >
              <button className=" items-center gap-1.5 button-container bg-white/60 hover:bg-white transition-colors duration-200 cursor-pointer">
                <span className="text-black text-[16px]">Contact</span>
                <GoArrowRight className="text-black" size={22} />
              </button>
            </Link>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white text-[28px] cursor-pointer tracking-wide font-bold"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="https://api.whatsapp.com/send?phone=6586687123&text=Hi%20Summer!%20I%20came%20across%20your%20website%20and%20I%20wish%20to%20learn%20more%20about%20your%20service.%20Thanks!"
              target="_blank"
            >
              <button className="mt-4 button-container bg-white">
                <p className="text-black text-[24px] font-bold">
                  Contact
                </p>
                <GoArrowRight className="text-black" size={32} />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
