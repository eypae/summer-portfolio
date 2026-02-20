import React from "react";
import { awardsBase } from "@/constants/constants";
import era from "@/public/images/era-award-logo.png";
import siea from "@/public/images/siea-logo.png";
import Image from "next/image";

const AwardCard = ({ award }: { award: (typeof awardsBase)[0] }) => {
  return (
    <div className="bg-[#f5f5f5] border border-[#ccc] px-6 py-6 flex items-center gap-6 flex-shrink-0">
      {award.logo === "era" ? (
        <Image
          src={era}
          alt="ERA Real Estate"
          className="w-[51px] h-[62px] object-contain flex-shrink-0"
        />
      ) : (
        <Image
          src={siea}
          alt="Award"
          className="w-[62px] h-[62px] object-contain flex-shrink-0"
        />
      )}
      <div className="flex flex-col justify-center gap-0.5">
        <p className="text-black text-[20px] whitespace-pre-line leading-tight font-bold">
          {award.title}
        </p>
        <p className="text-black text-[16px] whitespace-nowrap">{award.date}</p>
      </div>
    </div>
  );
};

export default AwardCard;
