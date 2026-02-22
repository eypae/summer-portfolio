import React from "react";
import Image from "next/image";
import star from "@/public/images/star.png";
import quoteIcon from "@/public/images/quote-icon.png";
import { testimonials } from "@/constants/constants";

const StarRating = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-[3.938px]">
          <div className="w-[15.75px] h-[15.75px] relative overflow-hidden">
            <Image src={star} alt="star rating" />
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  return (
    <div className="bg-[#f5f5f5] border border-[#ccc] p-5 md:p-7 flex flex-col gap-3 h-full">
      <Image src={quoteIcon} alt="quote icon" />
      <p className="testimonial-card-text mt-4 md:mt-[22px] font-normal">
        {testimonial.text}
      </p>
      <div className="mt-2">
        <StarRating count={testimonial.rating} />
        <p className="testimonial-card-text mt-1 ml-[9px] font-bold">
          {testimonial.name}
        </p>
        <p className="testimonial-card-text ml-[9px] font-normal">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
