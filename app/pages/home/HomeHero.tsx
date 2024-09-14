"use client";
import React from "react";
import Image from "next/image";
import { dataHome } from "../../datas/home";
import LogoIcon from "../../components/LogoIcon";
import { useState } from "react";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIconClick = (direction: string) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? dataHome.length - 1 : prevIndex - 1;
      } else if (direction === "right") {
        return prevIndex === dataHome.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex;
    });
  };
  return (
    <>
      <div className="relative md:px-8 py-4 w-full">
        <div className="h-screen relative">
          <Image
            src={dataHome[currentIndex].image}
            alt={`${dataHome[currentIndex].title} Image`}
            fill
            className="object-cover md:rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center text-white bg-black bg-opacity-40 p-6 md:rounded-2xl overflow-hidden">
            <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">
              {dataHome[currentIndex].title}
            </h1>
            <p className="max-w-md md:max-w-lg mx-auto mb-4 text-lg md:text-sm">
              {dataHome[currentIndex].detail}
            </p>
            <div className="flex space-x-6 items-center">
              <button
                onClick={() => handleIconClick("left")}
                aria-label="Previous"
                className="p-2 rounded-full bg-white transition-colors duration-300"
              >
                <LogoIcon name="arrow-left" />
              </button>
              <span className="text-sm md:text-base text-white">
                {currentIndex + 1} / {dataHome.length}
              </span>
              <button
                onClick={() => handleIconClick("right")}
                aria-label="Next"
                className="p-2 rounded-full bg-white transition-colors duration-300"
              >
                <LogoIcon name="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
