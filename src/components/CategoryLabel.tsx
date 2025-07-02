import React from "react";
import "./CategoryLabel.scss";
import { timeLineData } from "../timeLineData";

interface CategoryLabelProps {
  index: number;
  activeIndex: number;
}
const CategoryLabel: React.FC<CategoryLabelProps> = ({
  index,
  activeIndex,
}) => {
  const category = timeLineData[index].category;
  const isActive = activeIndex === index;
  return (
    <div className={"category-label fade-in" + (!isActive ? " fade-out" : "")}>
      {category}
    </div>
  );
};
export default CategoryLabel;
