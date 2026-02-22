"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  useWindowWidth,
  getCarouselConfig,
  getCardX,
} from "@/app/hooks/functions";
import { testimonials } from "@/constants/constants";
import TestimonialCard from "./TestimonialCard";
import VerticalLines from "./VerticalLines";
import SectionHeader from "./SectionHeader";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const N = testimonials.length; // 3
const extended = [...testimonials, ...testimonials, ...testimonials]; // 9 cards

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const windowWidth = useWindowWidth();
  const config = getCarouselConfig(windowWidth);
  const { leftOffset, cardWidth, gap, leftExtra, containerHeight } = config;

  // viewIndex = which card in `extended` is currently the "first full card"
  const [viewIndex, setViewIndex] = useState(N);
  const viewIndexRef = useRef(N);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isTransitioning = useRef(false);

  // Reset carousel position when layout config changes (window resize crossing breakpoint)
  const prevConfigKey = useRef(`${cardWidth}-${leftOffset}`);
  useEffect(() => {
    const key = `${cardWidth}-${leftOffset}`;
    if (key !== prevConfigKey.current) {
      prevConfigKey.current = key;
      setShouldAnimate(false);
      viewIndexRef.current = N;
      setViewIndex(N);
      isTransitioning.current = false;
    }
  }, [cardWidth, leftOffset]);

  const go = (dir: 1 | -1) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setShouldAnimate(true);

    const newIndex = viewIndexRef.current + dir;
    viewIndexRef.current = newIndex;
    setViewIndex(newIndex);

    setTimeout(() => {
      let finalIndex = newIndex;
      if (newIndex >= N * 2) finalIndex = N;
      else if (newIndex < N) finalIndex = newIndex + N;

      if (finalIndex !== newIndex) {
        viewIndexRef.current = finalIndex;
        setShouldAnimate(false);
        setViewIndex(finalIndex);
      }
      isTransitioning.current = false;
    }, 620);
  };

  const goPrev = () => go(-1);
  const goNext = () => go(1);

  const transition = shouldAnimate
    ? { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const }
    : { duration: 0 };
  return (
    <section id="testimonials" className="bg-white section-settings relative">
      <VerticalLines color="black" />
      <div className="global-padding relative">
        <SectionHeader
          label="TESTIMONIALS"
          title={
            <>
              WHAT MY <br />
              CLIENTS SAY
            </>
          }
          description="Discover what clients have to say about my work. Their stories reflect the quality and dedication I bring to every project."
        />

        {/* Navigation arrows */}
        <div className="flex items-center gap-3 justify-end xl:-mt-10 ">
          <button
            onClick={goPrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaAngleLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaAngleRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel — absolutely positioned cards, responsive */}
      <div
        className="max-w-[1440px] mt-8 mx-auto relative overflow-visible"
        style={{ height: containerHeight }}
      >
        {extended.map((t, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              x: getCardX(i, viewIndex, leftOffset, cardWidth, gap, leftExtra),
            }}
            transition={transition}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: cardWidth,
            }}
          >
            <TestimonialCard testimonial={t} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
