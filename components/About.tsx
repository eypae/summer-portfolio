"use client";
import React, { useRef } from "react";
import summerHeadshot from "@/public/images/summer-headshot.png";
import prguBlack from "@/public/images/prgu-black.png";
import prguWhite from "@/public/images/prgu-white.png";
import Image from "next/image";
import { awardsBase, stats } from "@/constants/constants";
import { motion, useInView } from "motion/react";
import MiniHeader from "./MiniHeader";
import VerticalLines from "./VerticalLines";
import Link from "next/link";
import AwardCard from "./AwardCard";

// Duplicate for seamless infinite scroll
const awards = [...awardsBase, ...awardsBase];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-8">
      <VerticalLines color="black" />
      {/* Main About Content */}
      <div
        ref={ref}
        className="max-w-360 mx-auto global-padding relative mb-8"
      >
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-12">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 sm:mb-0"
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

            <Link
              href="https://www.propertyguru.com.sg/agent/summer-xia-14203520"
              target="_blank"
              className="group button-container border border-[#CCCCCC] hover:bg-black transition-colors duration-200 gap-3 mt-[24px]"
            >
              <div>
                {/* Black Logo (default) */}
                <Image
                  src={prguBlack}
                  alt="PropertyGuru Logo"
                  className="block group-hover:hidden"
                />

                {/* White Logo (hover) */}
                <Image
                  src={prguWhite}
                  alt="PropertyGuru Logo"
                  className="hidden group-hover:block"
                />
              </div>
              <span className="text-black group-hover:text-white text-[16px] transition-colors duration-200">
                View Profile
              </span>
            </Link>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 md:gap-8 mt-6 lg:mt-10 xl:mt-16 sm:min-w-[428px] lg:min-w-[486px]"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <p className="text-[28px] lg:text-[32px] text-black tracking-[-0.5px] font-bold">
                    {stat.value}
                  </p>
                  <p className="text-[14px] lg:text-[16px] text-black -tracking-[0.5px] whitespace-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 relative overflow-hidden bg-[#bfcacf] z-10 
            min-[1352px]:-mt-40 min-[1198px]:-mt-35 min-[1136px]:-mt-20
            w-[320px] h-[361px] sm:w-[275px] sm:h-[311px] min-[1136px]:w-[363px] min-[1136px]:h-[410px] 
            min-[1198px]:w-[425px] min-[1198px]:h-[480px] xl:w-[442px] xl:h-[499px]"
          >
            <Image
              src={summerHeadshot}
              alt="Summer Xia Headshot"
            />
          </motion.div>
        </div>
      </div>

      {/* Awards Carousel – Full Width, seamless loop */}
      <div className="w-full overflow-hidden relative h-[130px]">
        <motion.div
          className="flex gap-4 absolute top-0 left-0 h-full items-start"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {awards.map((award, i) => (
            <AwardCard key={i} award={award} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
