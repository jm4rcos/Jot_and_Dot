import React, { useState } from "react";
import { SliderContainer, SliderInput, SliderValue } from "./styles";

const Slider = ({ onChange, value, isDragging }) => {
  const [localValue, setLocalValue] = useState(value);

  const handleOnChange = (event) => {
    setLocalValue(event.target.value);

    if (!isDragging) {
      onChange(event);
    }
  };

  return (
    <SliderContainer>
      <SliderInput
        type="range"
        min="0"
        max="100"
        value={localValue}
        onChange={handleOnChange}
      />
      <SliderValue>{localValue}</SliderValue>
    </SliderContainer>
  );
};

export default Slider;

