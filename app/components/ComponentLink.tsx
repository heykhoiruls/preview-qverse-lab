import React from "react";
import Link from "next/link";

const ComponentLink = ({ name }: { name: string }) => {
  return (
    <div className="relative mb-2 group">
      <Link
        href={"/"}
        className="relative z-10 text-white uppercase block pb-2"
      >
        {name}
      </Link>
      <div className="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full rounded-2xl"></div>
    </div>
  );
};

export default ComponentLink;
