// Slider.tsx
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const min = 0;
const max = 100;

const RangeSlider: React.FC = () => {
  const [rangeMin, setRangeMin] = useState(min);
  const [rangeMax, setRangeMax] = useState(max);

  const handleSliderChange = (newRange: number | number[]) => {
      if (typeof newRange === 'number') {
        // Handle the case when a single thumb is moved
        setRangeMin(newRange);
      } else {
        // Handle the case when both thumbs are moved
        setRangeMin(newRange[0]);
        setRangeMax(newRange[1]);
      }
    };


  return (
    <div style={{ width: '400px' }}>
      <label id="sliderSelectedRange">Selected Range: {rangeMin} - {rangeMax}</label>
      <div style = {{ marginLeft: '20px'}}>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[min, max]}
        value={[rangeMin, rangeMax]}
        onChange={handleSliderChange}
      />
      </div>
    </div>
  );
};

export {RangeSlider};
