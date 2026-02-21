"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import PropertyCard from "./PropertyCard";
import VerticalLines from "./VerticalLines";
import { properties } from "@/constants/constants";
import MiniHeader from "./MiniHeader";

interface Listing {
  title: string;
  type: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  image: string;
}

const Listings = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="listings" className="relative bg-white pt-[96px] pb-[72px]">
      <VerticalLines color="black" />
      <div className="max-w-360 mx-auto global-padding relative mb-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col xl:grid xl:items-start gap-4 xl:gap-0 mb-8 xl:mb-[60px] xl:grid-cols-[33%_39%_298px]"
        >
          {/* Mini Label */}
          <div className="xl:pt-2">
            <MiniHeader label="PROPERTIES" />
          </div>

          {/* Main Title */}
          <div>
            <h2
              className="text-black leading-none tracking-tighter"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 5vw, 56px)",
              }}
            >
              FEATURED
              <br />
              LISTINGS
            </h2>
          </div>

          {/* Description */}
          <div>
            <p
              className="text-[#0c0407] text-[14px] leading-[1.4] tracking-[-0.1px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Explore available properties that showcase quality and
              potential—making your search for the ideal home or investment
              seamless.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.name}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
