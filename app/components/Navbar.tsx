import React from "react";
import Image from "next/image";
import LogoIcon from "./LogoIcon";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <LogoIcon name="menu" />
        <Image
          src="/img/logo.svg"
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <LogoIcon name="search" />
      </div>
    </nav>
  );
};

export default Navbar;
