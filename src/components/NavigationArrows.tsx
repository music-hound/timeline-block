import React from 'react'
import './NavigationArrows.scss'
import { timeLineData } from '../timeLineData';

type NavigationArrowsProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onClick?: () => void;
};

const NavigationArrows : React.FC<NavigationArrowsProps> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const totalSlides = timeLineData.length-1;

  return (
    <div className="navigation-arrows">
      <h4>0{activeIndex+1}/0{totalSlides+1}</h4>
      <div className="button-block">
        <button
          className={`arrow left ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={ () => { 
            if (activeIndex > 0){
            setActiveIndex(activeIndex - 1)
            }
          }}
        />
        <button
          className={`arrow right ${activeIndex === totalSlides ? "disabled" : ""}`}
          onClick={ () => { 
            if (activeIndex < totalSlides){
            setActiveIndex(activeIndex + 1)
            }
          }}
        />
      </div>
    </div>
  )
}

export default NavigationArrows;