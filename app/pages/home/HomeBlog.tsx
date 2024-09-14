"use client";
import React, { useState } from "react";
import Image from "next/image";
import { dataHome } from "@/app/datas/home";
import LogoIcon from "@/app/components/LogoIcon";

const HomeBlog = () => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataHome.slice(startIndex, endIndex);

  const handleIconClick = (direction: string) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0
          ? Math.ceil(dataHome.length / itemsPerPage) - 1
          : prevIndex - 1;
      } else if (direction === "right") {
        return prevIndex === Math.ceil(dataHome.length / itemsPerPage) - 1
          ? 0
          : prevIndex + 1;
      }
      return prevIndex;
    });
  };

  return (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Academy</h2>
          <p className="mt-1">Learn from the best instructors.</p>
        </div>
        <div>
          <button className="text-sm">Explore more</button>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item, index) => (
            <div key={index}>
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="relative text-xl font-bold mt-4 truncate">
                {item.title}
              </h3>
              <p className="mt-2 text-sm line-clamp-4">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-6 items-center mt-6">
        <button
          onClick={() => handleIconClick("left")}
          aria-label="Previous"
          className="p-2 rounded-full bg-white transition-colors duration-300"
        >
          <LogoIcon name="arrow-left" />
        </button>
        <span className="text-sm md:text-base">
          {currentIndex + 1} / {Math.ceil(dataHome.length / itemsPerPage)}
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
  );
};

export default HomeBlog;
