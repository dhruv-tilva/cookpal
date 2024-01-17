"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import clsx from "clsx";
import { PrevButton } from "../common/prev-button";
import { NextButton } from "../common/next-button";

const images = [
  "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg",
];

const imageByIndex = (index) => images[index % images.length];

const Carousel = () => {
  const slides = images;
  const option = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(option);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="relative px-4 mt-16">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex touch-pan-y">
            {slides.map((url, index) => (
              <div
                className="flex justify-center flex-grow-0 flex-shrink-0 h-80 w-full basis-full"
                key={index}
              >
                <img
                  key={index}
                  src={url}
                  alt="Images"
                  className={clsx(
                    "relative h-full cursor-move rounded-2xl transition-all w-full flex-shrink-0",
                    {
                      "opacity-100": index === selectedIndex,
                    }
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center absolute top-1/2 -translate-y-1/2 left-6">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div> */}
    </>
  );
};

export default Carousel;
