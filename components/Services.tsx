"use client";
import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/constants";
import VerticalLines from "./VerticalLines";
import SectionHeader from "./SectionHeader";
import { useInView } from "motion/react";

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-white section-settings scroll-mt-16 md:scroll-mt-20">
      <VerticalLines color="black" />
      <div className="global-padding relative">
        <SectionHeader
          label="SERVICES"
          title={
            <>
              HOW I CAN <br />
              HELP YOU
            </>
          }
          description="Complete marketing solutions—professional visuals, virtual tours, digital advertising and agent networks - all working together to get the best price for your property."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => {
            // If videography icon, pass Instagram href
            const href =
              service.iconAlt === "videography-icon"
                ? "https://www.instagram.com/summerxia.23/"
                : undefined;

            return (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                href={href}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
