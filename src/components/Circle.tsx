import React from "react";
import Point from "./Point";
import { timeLineData } from "../timeLineData";
import "./Circle.scss";

interface CircleProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Circle: React.FC<CircleProps> = ({ activeIndex, setActiveIndex }) => {
  return (
    <div
      className="circle"
      style={{
        transform: `rotate(${30 + (-360 / timeLineData.length) * activeIndex}deg)`,
      }}
    >
      {timeLineData.map((range, index) => (
        <Point
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};
export default Circle;
