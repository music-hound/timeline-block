import React from 'react'
import './SliderArrow.scss'
import { timeLineData } from '../timeLineData';

type SliderArrowProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onClick?: () => void;
};

const SliderArrow : React.FC<SliderArrowProps> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const totalSlides = timeLineData.length-1;

  return (
      <div className="button-block">
        <button
          className={`arrow left ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={ () => { 
            if (activeIndex > 0){
            setActiveIndex(activeIndex - 1)
            }
          }}
        />
      </div>
  )
}

export default SliderArrow;