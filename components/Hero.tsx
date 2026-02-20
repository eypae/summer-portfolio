"use client";
import React from "react";
import { motion } from "motion/react";
import heroBackground from "@/public/images/hero-background.jpeg";
import Image from "next/image";
import VerticalLines from "./VerticalLines";

const Hero = () => {
  return (
    <section className="relative w-full h-125 sm:h-150 md:h-175 xl:h-198.5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Hero Section Background Image"
          className="w-full h-full object-cover"
        />
        <div className="bg-black/50 inset-0 absolute"></div>
      </div>

      <VerticalLines color="white" />

      {/* Horizontal line — full section width, not capped by max-w */}
      <div className="absolute left-0 right-0 top-77.5 border-t border-white/30 pointer-events-none" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end max-w-360 mx-auto w-full left-1/2 -translate-x-1/2">
        {/* Main hero text block */}
        <div className="px-8 md:px-12 lg:px-16 xl:px-0 absolute lg:left-10 xl:left-39.5 sm:top-79.75 top-57.5 pb-10 sm:pb-12 xl:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white leading-none font-bold"
            style={{
              fontSize: "clamp(42px, 7.6vw, 110px)",
            }}
          >
            SUMMER XIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="text-[#e4e4e4] text-[14px] sm:text-[16px] md:text-[18px]"
          >
            Your personal property consultant
          </motion.p>
        </div>

        {/* [Singapore, 2026] — desktop absolute position */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="hidden lg:block absolute lg:right-26 xl:right-36 text-[#e4e4e4] text-right top-81 display-small-text"
        >
          [Singapore, 2026]
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
