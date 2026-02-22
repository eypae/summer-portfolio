"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "motion/react";
import MiniHeader from "./MiniHeader";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  alignRight?: boolean; // aligns description to right on xl
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  dark = false,
  alignRight = false,
  className = "",
}: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        flex flex-col 
        xl:grid 
        gap-4 xl:gap-0 
        mb-8 xl:mb-[60px] 
        xl:grid-cols-[33%_39%_298px]
        ${className}
      `}
    >
      {/* Mini Label */}
      <div className="xl:pt-2">
        <MiniHeader label={label} dark={dark} />
      </div>

      {/* Title */}
      <div>
        <h2
          className={`
            leading-none tracking-tight font-black
            text-[clamp(36px,5vw,56px)]
            ${dark ? "text-white" : "text-black"}
          `}
        >
          {title}
        </h2>
      </div>

      {/* Description */}
      {description && (
        <div
          className={`
            flex flex-col gap-4 xl:gap-7 h-full
            ${alignRight ? "xl:items-end text-left xl:text-right" : ""}
          `}
        >
          <div
            className={`
              text-[14px] leading-[1.4] tracking-[-0.1px] font-normal
              ${dark ? "text-white" : "text-[#0c0407]"}
            `}
          >
            {description}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
