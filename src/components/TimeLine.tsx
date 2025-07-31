import React, { useEffect, useState } from "react";
import "./TimeLine.scss";
import YearsRange from "./YearsRange";
import { timeLineData } from "../timeLineData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import NavigationArrows from "./NavigationArrows";
import Circle from "./Circle";

const width = typeof window !== "undefined" ? window.innerWidth : 0;
const isMobile = width < 768;

const TimelineBlock = () => {
  const [activeIndex, setActiveIndexRaw] = useState(0);
  const [visible, setVisible] = useState(false);
  const [delayedIndex, setDelayedIndex] = useState(0);

  const setActiveIndex = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setVisible(false);
    setTimeout(() => {
      setDelayedIndex(newIndex);
      setVisible(true);
      setActiveIndexRaw(newIndex);
    }, 400);
  };

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="timeline-block">
      <h1>
        Historical <br /> events
      </h1>

      <YearsRange activeIndex={activeIndex} />

      <div className="circle-axis-Y" />
      <div className="circle-axis-X" />

      <Circle activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <div className="timeline-slider-wrapper">
        <button className="swiper-button-prev" />

        <div
          className={`timeline-swiper swiper-fade ${visible ? "visible" : ""}`}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={isMobile ? 2 : 3}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {timeLineData[activeIndex].events.map((event, index) => (
              <SwiperSlide key={index}>
                <Slide year={event.year} description={event.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="swiper-button-next" />
      </div>
      <NavigationArrows
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default TimelineBlock;
