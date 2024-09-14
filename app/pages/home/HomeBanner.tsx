import React from "react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative md:h-[70vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div className="relative col-span-1 lg:col-span-2">
        <Image
          src="/img/home/home-1.jpg"
          alt="banner"
          fill
          className="absolute h-full inset-0 object-cover"
          priority
        />
      </div>
      <div className="col-span-1  flex flex-col justify-center items-start p-8 bg-black ">
        <h1 className="text-3xl font-bold text-white mb-4">
          Reframing Sculpture Workshop
        </h1>
        <p className="text-white">
          Participants are invited to engage with our exhibition, Phyllida
          Barlow. unscripted, by exploring approaches to navigating, recording
          and responding to the artists sculptural work.
        </p>
        <button className="border hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-white px-4 py-2 text-white mt-8 items-center">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
