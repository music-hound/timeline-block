import React, { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  color?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 500, color }) => {
  const [displayedValue, setDisplayedValue] = useState(value);
  const startValueRef = useRef(value);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startValue = displayedValue;
    startValueRef.current = startValue;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const interpolatedValue = Math.round(
        startValue + (value - startValue) * progress
      );
      setDisplayedValue(interpolatedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span style={{ color : `${color}`}}>{displayedValue}</span>;
};

export default AnimatedNumber;
