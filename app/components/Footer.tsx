import React from "react";
import ComponentLink from "./ComponentLink";
import { dataFooter } from "../datas/footer";
import LogoIcon from "./LogoIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" px-6 pt-12 pb-6 m-2 rounded-xl bg-gray-950 text-white space-y-6 ">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        <div className="space-y-8 col-span-2 md:col-span-3 xl:col-span-2">
          <Image
            src="/img/logo.svg"
            alt="Logo"
            width={180}
            height={38}
            className="bg-white px-6 py-3 rounded-lg"
            priority
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            reiciendis beatae consequatur iure unde magnam, laborum at excepturi
            soluta ad nisi natus consectetur, illo optio rem, officiis veritatis
            ipsam provident?
          </p>
        </div>
        {dataFooter.map((item, index) => (
          <div
            key={index}
            className="flex flex-col"
          >
            <h3 className="font-bold mb-8">{item.title}</h3>
            {item.detail.map((detail, index) => (
              <div
                key={index}
                className="flex"
              >
                <ComponentLink name={detail} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border border-white" />
      <div className="flex items-center justify-between">
        <p className="text-xs">© 2024 Qverse Lab. All rights reserved.</p>
        <div className="flex gap-8">
          <LogoIcon name="facebook" />
          <LogoIcon name="youtube" />
          <LogoIcon name="instagram" />
          <LogoIcon name="tiktok" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
