"use client";

import { useState, useRef, useEffect } from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

const GameCarousel = ({ data }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
  }, []);

  console.log(data);

  return (
      <div className="carousel my-12 mx-auto">
        <div className="overflow-hidden">
          {/* Navigation Controls - Right-aligned */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between gap-2">
              <Image className="w-6 h-6" src={data.icon} alt={data.name} />
              <h2 className="text-base leading-8 font-medium text-text-primary">
                {
                  data.name
                }
              </h2>
            </div>
            <div className="flex items-center h-full gap-2">
              <button
                  onClick={movePrev}
                  className="flex items-center rounded-md justify-center bg-primary text-white w-8 h-8 opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                  disabled={isDisabled('prev')}
                  aria-label="Previous"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                  onClick={moveNext}
                  className="flex items-center rounded-md justify-center bg-primary text-white w-8 h-8 opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                  disabled={isDisabled('next')}
                  aria-label="Next"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div
              ref={carousel}
              className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {data.resources.map((resource, index) => {
              return (
                  <div
                      key={index}
                      className="carousel-item text-center relative w-40 h-14 snap-start rounded-lg"
                  >
                    <a
                        href={resource.link}
                        className="h-full w-40 rounded-lg aspect-square block bg-origin-padding bg-cover bg-center bg-no-repeat z-0"
                        style={{ backgroundImage: `url(${resource.imageUrl.src || ''})` }}
                    >
                      <img
                          src={resource.imageUrl || ''}
                          alt={resource.title}
                          className="w-full aspect-square hidden"
                      />
                    </a>
                    <a
                        href={resource.link}
                        className="h-full w-full rounded-lg aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-80 bg-primary z-10"
                    >
                    </a>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default GameCarousel;