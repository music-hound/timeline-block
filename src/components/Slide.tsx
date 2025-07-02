import React from "react";
import "./Slide.scss";

interface SlideProps {
  year: number;
  description: string;
}

export const Slide: React.FC<SlideProps> = ({ year, description }) => {
  return (
    <div className="slide">
      <h2>{year}</h2>
      <span>{description}</span>
    </div>
  );
};
