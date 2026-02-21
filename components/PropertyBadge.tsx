import React from "react";
import { PiBathtubDuotone } from "react-icons/pi";
import { PiBedDuotone } from "react-icons/pi";
import bedroomIcon from "@/public/icons/bedroom-icon.svg";

const PropertyBadge = ({
  icon,
  label,
}: {
  icon: "bed" | "bath";
  label: string;
}) => {
  return (
    <div className="bg-[#f4f4f4] border border-[#ccc] flex items-center gap-2.5 px-2.5 py-1.5">
      {icon === "bed" ? <PiBedDuotone /> : <PiBathtubDuotone />}
      <span className="text-black text-[12px] font-normal">{label}</span>
    </div>
  );
};

export default PropertyBadge;
