"use client";

import React, { useRef, useState, useEffect } from "react";
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

const N = testimonials.length;
const extended = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const windowWidth = useWindowWidth();

  // 🔒 Always compute safely
  const config = windowWidth
    ? getCarouselConfig(windowWidth)
    : {
        leftOffset: 0,
        cardWidth: 0,
        gap: 0,
        leftExtra: 0,
        containerHeight: 0,
      };

  const { leftOffset, cardWidth, gap, leftExtra, containerHeight } = config;

  const [viewIndex, setViewIndex] = useState(N);
  const viewIndexRef = useRef(N);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isTransitioning = useRef(false);

  const prevConfigKey = useRef(`${cardWidth}-${leftOffset}`);

  useEffect(() => {
    if (!windowWidth) return;

    const key = `${cardWidth}-${leftOffset}`;
    if (key !== prevConfigKey.current) {
      prevConfigKey.current = key;

      setShouldAnimate(false);
      viewIndexRef.current = N;
      setViewIndex(N);
      isTransitioning.current = false;
    }
  }, [cardWidth, leftOffset, windowWidth]);

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

        <div className="flex items-center gap-3 justify-end xl:-mt-10">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
          >
            <FaAngleLeft size={24} className="text-black"/>
          </button>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
          >
            <FaAngleRight size={24} className="text-black"/>
          </button>
        </div>
      </div>

      {/* Only render carousel when width is ready */}
      {windowWidth && (
        <div
          className="max-w-[1440px] mt-8 mx-auto relative overflow-visible"
          style={{ height: containerHeight }}
        >
          {extended.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: getCardX(
                  i,
                  viewIndex,
                  leftOffset,
                  cardWidth,
                  gap,
                  leftExtra,
                ),
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
      )}
    </section>
  );
};

export default Testimonials;
