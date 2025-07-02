import React from "react";
import "./YearsRange.scss";
import AnimatedNumber from "./AnimatedNumber";
import { timeLineData } from "../timeLineData";

interface YearsRangeProps {
  activeIndex: number;
}

const YearsRange: React.FC<YearsRangeProps> = ({ activeIndex }) => {
  const from = timeLineData[activeIndex].startYear;
  const to = timeLineData[activeIndex].endYear;

  return (
    <div className="years-range">
      <AnimatedNumber color={"#5D5FEF"} value={from} />
      <AnimatedNumber color={"#EF5DA8"} value={to} />
    </div>
  );
};
export default YearsRange;
