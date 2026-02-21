"use client";

import React, { useRef, useState } from "react";
import { properties } from "@/constants/constants";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import PropertyBadge from "./PropertyBadge";

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="w-full cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Property Photo — square aspect ratio */}
      <div className="w-full aspect-square relative overflow-hidden">
        <Image
          src={property.photo}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges — bottom of photo */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <PropertyBadge
            icon="bed"
            label={`${property.beds} Bedroom${property.beds !== 1 ? "s" : ""}`}
          />
          <PropertyBadge
            icon="bath"
            label={`${property.baths} Bathroom${property.baths !== 1 ? "s" : ""}`}
          />
        </div>
      </div>

      {/* Address / Price slot — fixed height, no layout shift */}
      <div className="mt-2 overflow-hidden relative h-7.25">
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
    </motion.div>
  );
};

export default PropertyCard;
