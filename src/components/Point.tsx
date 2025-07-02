import React from "react";
import "./Point.scss";
import { timeLineData } from "../timeLineData";
import CategoryLabel from "./CategoryLabel";

interface PointProps {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Point: React.FC<PointProps> = ({
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const angle = (360 / timeLineData.length) * index;
  const rotationOffset = 30 + (-360 / timeLineData.length) * activeIndex;

  return (
    <div
      className={`point ${activeIndex === index ? "active" : ""}`}
      style={{
        transform: `
          translate(-50%, -50%)
            rotate(${angle}deg) 
            translate(0, -265px) 
            rotate(${-angle - rotationOffset}deg)
          `,
      }}
      onClick={() => setActiveIndex(index)}
    >
      {index + 1}
      <CategoryLabel index={index} activeIndex={activeIndex} />
    </div>
  );
};
export default Point;
