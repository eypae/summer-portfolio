"use client";

import React from "react";
import { services } from "@/constants/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  href?: string; // optional link
}

const ServiceCard = ({ service, index, href }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className={`relative overflow-hidden border border-[#ccc] flex flex-col group min-h-[350px] ${
        href ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Optional link overlay */}
      {href && (
        <Link
          href={href}
          target="_blank"
          className="absolute inset-0 text-[0px] z-20"
        >
          {service.title} Link
        </Link>
      )}

      {/* Default background */}
      <div className="absolute inset-0 bg-[#f5f5f5]" />

      {/* Hover / Mobile background image */}
      <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-[0.25,0.1,0.25,1]">
        <Image
          src={service.hoverImage}
          alt={service.title}
          fill
          className="object-cover scale-100 md:scale-[1.06] md:group-hover:scale-100 transition-transform duration-500 ease-[0.25,0.1,0.25,1]"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + hover text */}
        <div className="p-7 pb-0 flex items-center gap-3">
          <Image
            src={service.icon}
            alt={service.iconAlt}
            width={32}
            height={32}
            className="transition duration-300
              invert brightness-200
              md:invert-0 md:brightness-100
              md:group-hover:invert md:group-hover:brightness-200"
          />
          {href && (
            <p className="md:opacity-0 md:group-hover:opacity-100 transition duration-300 font-display font-medium tracking-wider text-[16px] text-white">
              View my Home Tour Series!
            </p>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[80px]" />

        {/* Title + Description */}
        <div className="px-7 pb-7">
          <p
            className="
              text-[22px] leading-[130%] whitespace-pre-line mb-3 font-medium font-display
              text-white
              md:text-black md:group-hover:text-white
              transition-colors duration-300
            "
          >
            {service.title}
          </p>

          <p
            className="
              text-[14px] leading-[1.4] font-normal
              text-white
              md:text-black md:group-hover:text-white
              transition-colors duration-300
            "
          >
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
