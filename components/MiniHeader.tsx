import React from "react";
import { MdSubdirectoryArrowLeft } from "react-icons/md";

interface MiniHeaderProps {
  label: string;
  dark?: boolean;
}

const MiniHeader = ({ label, dark = false }: MiniHeaderProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={`text-[16px] tracking-[-0.5px] font-bold ${dark ? "text-white" : "text-black"}`}
      >
        {label}
      </span>
      <div>
        <MdSubdirectoryArrowLeft
          className={`-rotate-90 shrink-0 translate-y-0.5 ${dark ? "text-white" : "text-black"}`}
        />
      </div>
    </div>
  );
};

export default MiniHeader;
