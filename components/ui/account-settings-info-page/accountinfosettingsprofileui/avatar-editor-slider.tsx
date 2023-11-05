import React, { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";

interface IAvatarEditorSlider {
  avatarScale: number;
  setScale: (value: number) => void;
}
const AvatarEditorSlider = ({ avatarScale, setScale }: IAvatarEditorSlider) => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setSliderValue(Math.round(avatarScale * 100));
  }, [avatarScale]);

  const handleSliderChange = (value: number[]) => {
    const newScale = value[0] / 100;
    setScale(newScale);
    setSliderValue(value[0]);
  };
  console.log(sliderValue);

  return (
    <div>
      <form className="flex items-center justify-center">
        <Slider.Root
          className="relative flex h-5 w-[347px] select-none items-center"
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          min={0}
          max={200}
          step={2}
        >
          <Slider.Track className="relative h-[8px] flex-grow rounded-full bg-gray-200">
            <Slider.Range className="absolute h-full rounded-full " />
          </Slider.Track>
          {/* Thumb = Circle */}
          <Slider.Thumb
            className="block h-5 w-5 rounded-full border-[1px] border-solid border-gray-400 bg-white shadow-md focus:outline-none focus:ring-0"
            aria-label="Volume"
          />
        </Slider.Root>
      </form>
    </div>
  );
};

export default AvatarEditorSlider;
