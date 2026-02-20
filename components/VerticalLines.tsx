import React from "react";

type SectionGuidesProps = {
  color?: "white" | "black";
};

const VerticalLines = ({ color = "white" }: SectionGuidesProps) => {
  const borderColor = color === "white" ? "border-white/30" : "border-black/20";

  return (
    <div className="hidden lg:block absolute inset-0 max-w-360 mx-auto pointer-events-none">
      <div
        className={`absolute xl:left-30.5 lg:left-20 top-0 bottom-0 border-l ${borderColor}`}
      />
      <div
        className={`absolute xl:right-30.5 lg:right-20 top-0 bottom-0 border-l ${borderColor}`}
      />
    </div>
  );
};

export default VerticalLines;
