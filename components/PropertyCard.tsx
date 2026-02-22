"use client";

import React, { useRef, useState } from "react";
import { properties } from "@/constants/constants";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import PropertyBadge from "./PropertyBadge";
import Link from "next/link";

const PropertyCard = ({
  property,
  index,
}: {
  property: (typeof properties)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={property.src} target="_blank" className="block">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: (index % 3) * 0.1,
          ease: "easeOut",
        }}
        className="w-full cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Property Photo */}
        <div className="w-full aspect-square relative overflow-hidden">
          <Image
            src={property.photo}
            alt={property.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            <PropertyBadge
              icon="bed"
              label={`${property.beds} Bedroom${
                property.beds !== 1 ? "s" : ""
              }`}
            />
            <PropertyBadge
              icon="bath"
              label={`${property.baths} Bathroom${
                property.baths !== 1 ? "s" : ""
              }`}
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-2 md:hidden">
          <p className="text-black truncate font-display font-normal leading-7.25 text-[20px] md:text-[24px]">
            {property.name}
          </p>
          <p className="text-black truncate font-display font-normal leading-7.25 text-[20px] md:text-[24px]">
            {property.price}
          </p>
        </div>

        {/* Desktop hover swap */}
        <div className="mt-2 overflow-hidden relative hidden md:block h-7.25">
          <motion.p
            className="text-black font-display truncate absolute inset-x-0 font-medium text-[20px] md:text-[24px] leading-7.25"
            animate={{ opacity: hovered ? 0 : 1, y: hovered ? -29 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {property.name}
          </motion.p>

          <motion.p
            className="text-black font-display truncate absolute inset-x-0 font-medium text-[20px] md:text-[24px] leading-7.25"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 29 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {property.price}
          </motion.p>
        </div>

        {/* Property Type */}
        <p className="text-black text-[14px] md:text-[16px] font-normal">
          {property.type}
        </p>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
