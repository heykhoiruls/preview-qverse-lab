import React from "react";
import Image from "next/image";

const LogoIcon = ({ name }: { name: string }) => {
  const src = `/img/${name}.svg`;
  const alt = `${name} icon`;

  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      priority
      className="cursor-pointer"
    />
  );
};

export default LogoIcon;
