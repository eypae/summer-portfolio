"use client";
import React, { useRef } from "react";
import summerHeadshot from "@/public/images/summer-headshot.png";
import Image from "next/image";
import { awardsBase } from "@/constants/constants";
import { motion, useInView } from "motion/react";
import MiniHeader from "./MiniHeader";

// Duplicate for seamless infinite scroll
const awards = [...awardsBase, ...awardsBase];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 max-w-360 mx-auto pointer-events-none overflow-hidden">
        <div className="absolute left-30.5 top-0 bottom-0 border-l border-black/20" />
        <div className="absolute right-30.5 top-0 bottom-0 border-l border-black/20" />
      </div>

      {/* Main About Content */}
      <div ref={ref} className="max-w-360 mx-auto px-39.5 py-20 relative">
        <div className="flex items-start gap-12">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <MiniHeader label="ABOUT ME" />
            <p className="text-[#0c0407] text-[14px] leading-[1.4] tracking-[-0.1px] mt-6 font-normal">
              A client-focused property consultant dedicated to turning your
              real estate goals into reality. With proven results as a Top 25
              ERA Achiever, I combine personalized care with cutting-edge
              marketing—virtual tours, professional staging, and data-driven
              analysis—to ensure your property journey is seamless and
              rewarding.
            </p>
          </motion.div>

          {/* Right – Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 relative overflow-hidden bg-[#bfcacf] z-10 -mt-40"
            style={{ width: 516, height: 514 }}
          >
            <Image
              src={summerHeadshot}
              alt="Summer Xia Headshot"
              className="absolute"
              style={{
                width: "91.77%",
                height: "91.91%",
                left: "2.5%",
                top: "8.09%",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
