"use client";
import React from "react";
import { motion } from "motion/react";
import heroBackground from "@/public/images/hero-background.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] xl:h-[794px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Hero Section Background Image"
          className="w-full h-full object-cover"
        />
        <div className="bg-black/50 inset-0 absolute"></div>
      </div>

      {/* Decorative vertical lines — desktop only */}
      <div className="hidden xl:block absolute inset-0 max-w-360 mx-auto pointer-events-none">
        <div className="absolute left-30.5 top-0 bottom-0 border-l border-white/30" />
        <div className="absolute right-30.5 top-0 bottom-0 border-l border-white/30" />
      </div>

      {/* Horizontal line — full section width, not capped by max-w */}
      <div className="absolute left-0 right-0 top-77.5 border-t border-white/30 pointer-events-none" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end max-w-[1440px] mx-auto w-full left-1/2 -translate-x-1/2">
        {/* Main hero text block */}
        <div
          className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:absolute xl:left-[158px] 
        xl:top-[319px] pb-10 sm:pb-12 xl:pb-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white leading-none font-bold"
            style={{
              fontSize: "clamp(56px, 7.6vw, 110px)",
            }}
          >
            SUMMER XIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="text-[#e4e4e4] display-small-text"
          >
            Your personal property consultant
          </motion.p>
        </div>

        {/* [Singapore, 2026] — desktop absolute position */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="hidden xl:block absolute right-39.5 text-[#e4e4e4] text-right top-86 display-small-text"
        >
          [Singapore, 2026]
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
