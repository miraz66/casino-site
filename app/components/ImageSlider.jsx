"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideImage1 from "@/app/assets/image.png";
import slideImage2 from "@/app/assets/image (1).png";
import Image from "next/image";

const properties = [
  {
    id: 1,
    image: [slideImage1, slideImage2],
  },
  {
    id: 2,
    image: [slideImage2, slideImage1],
  },
  {
    id: 3,
    image: [slideImage2, slideImage1],
  },
  {
    id: 4,
    image: [slideImage2, slideImage1],
  },
];

const ImageSlider = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <Slide
        ref={slideRef}
        indicators={false}
        arrows={false}
        className="w-full"
        duration={6000}
        autoplay={false}
        onChange={(_, next) => setCurrentSlide(next)}
      >
        {properties.map((property, index) => (
          <div
            key={index}
            className="relative flex h-full w-full gap-2 select-none md:gap-4"
          >
            {/* First image (always visible) */}
            <div className="flex w-full md:w-1/2">
              <Image
                src={property.image[0]}
                alt={`Image 1 - Slide ${index + 1}`}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Second image (only visible on md and up) */}
            <div className="hidden w-1/2 md:flex">
              <Image
                src={property.image[1]}
                alt={`Image 2 - Slide ${index + 1}`}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slide>

      {/* Indicators */}
      <div className="flex justify-center space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => slideRef.current.goTo(index)}
            className={clsx(
              "my-3 h-2 w-4 cursor-pointer rounded-full border transition-all duration-300",
              currentSlide === index
                ? "bg-accent border-accent scale-110"
                : "bg-tertiary border-accent",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
