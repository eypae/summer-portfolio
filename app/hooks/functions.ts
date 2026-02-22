import React, { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
};

/** Responsive carousel config based on viewport width */
export const getCarouselConfig = (windowWidth: number) => {
  // Desktop xl (≥ 1280px): 2 visible cards + asymmetric left gap
  if (windowWidth >= 1280) {
    const leftOffset = 158;
    const cardWidth = 500;
    const gap = 32;
    const leftExtra = 40; // extra px so left-peek is 36px left of decorative line
    return { leftOffset, cardWidth, gap, leftExtra, containerHeight: 400 };
  }
  // Tablet lg (≥ 1024px): 2 cards visible, no asymmetric gap
  if (windowWidth >= 1024) {
    const leftOffset = 113;
    const cardWidth = 500;
    const gap = 32;
    const leftExtra = 32;
    // const cardWidth = Math.floor((windowWidth - leftOffset * 2 - gap) / 2);
    return { leftOffset, cardWidth, gap, leftExtra, containerHeight: 380 };
  }
  // Tablet md (≥ 768px): 2 cards visible
  if (windowWidth >= 768) {
    const leftOffset = 48;
    const gap = 24;
    const cardWidth = Math.floor((windowWidth - leftOffset * 2 - gap) / 2);
    return { leftOffset, cardWidth, gap, leftExtra: 0, containerHeight: 360 };
  }
  // Mobile (≥ 640px): 1 card, small right peek
  if (windowWidth >= 640) {
    const leftOffset = 32;
    const peek = 40;
    const cardWidth = windowWidth - leftOffset * 2 - peek;
    return {
      leftOffset,
      cardWidth,
      gap: 16,
      leftExtra: 0,
      containerHeight: 360,
    };
  }
  // Small mobile: 1 card, no peek
  const leftOffset = 16;
  const cardWidth = windowWidth - leftOffset * 2;
  return { leftOffset, cardWidth, gap: 16, leftExtra: 0, containerHeight: 360 };
};

export const getCardX = (
  i: number,
  viewIndex: number,
  leftOffset: number,
  cardWidth: number,
  gap: number,
  leftExtra: number,
): number => {
  const offset = i - viewIndex;
  const step = cardWidth + gap;
  return leftOffset + offset * step + (offset < 0 ? -leftExtra : 0);
};
