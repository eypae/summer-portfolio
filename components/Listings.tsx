"use client";
import React, { useEffect, useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion, useInView } from "motion/react";
import PropertyCard from "./PropertyCard";
import VerticalLines from "./VerticalLines";
import { properties } from "@/constants/constants";
import MiniHeader from "./MiniHeader";
import Link from "next/link";

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
    <section
      id="listings"
      className="relative bg-white pt-[32px] lg:pt-[96px] pb-[72px]"
    >
      <VerticalLines color="black" />
      <div className="max-w-360 mx-auto global-padding relative mb-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col xl:grid gap-4 xl:gap-0 mb-8 xl:mb-[60px] xl:grid-cols-[33%_39%_298px]"
        >
          {/* Mini Label */}
          <div className="xl:pt-2">
            <MiniHeader label="PROPERTIES" />
          </div>

          {/* Main Title */}
          <div>
            <h2 className="text-black leading-none tracking-tight font-black text-[clamp(36px,5vw,56px)]">
              FEATURED
              <br />
              LISTINGS
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4 xl:gap-7 h-full xl:items-end">
            <p className="text-[#0c0407] text-[14px] leading-[1.4] tracking-[-0.1px] font-normal">
              Explore available properties that showcase quality and
              potential—making your search for the ideal home or investment
              seamless.
            </p>
            <Link
              href={
                "https://www.propertyguru.com.sg/property-for-sale?listedById=14203520&isCommercial=false&listingType=sale&locale=en&_gl=1*p8klyu*_ga4_au*MTA3NjI4MDI0OC4xNzcxMjE5ODcx*_ga4_ga*NTMyMDc3NTM2LjE3NzEyMTk4NzE.*_ga4_ga_0HGK3QZS7D*czE3NzE2NjE0NTgkbzckZzEkdDE3NzE2NjIzMjIkajYwJGwwJGgw"
              }
              target="_blank"
              className="relative w-fit text-[#3366CC] cursor-pointer group text-[14px] font-medium flex items-center gap-1"
            >
              View All Listings
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3366CC] duration-300 transition-all group-hover:w-full" />
              <GoArrowRight className="text-[#3366CC]" size={16} />
            </Link>
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
