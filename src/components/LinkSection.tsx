import Link from "next/link";
import React from "react";

const LinkSection = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-6 mst:gap-x-24 font-merriweather_sans mst:gap-y-9 gap-y-3 self-end">
      <li>
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-2 items-center  lg:text-lg msto:text-xl w-full h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink1"
        >
          Folhagens
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center lg:text-lg msto:text-xl w-full h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink2"
        >
          Suculentas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center lg:text-lg msto:text-xl w-full h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink3"
        >
          Sobre plantas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center lg:text-lg msto:text-xl w-full h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink4"
        >
          Ferramentas
        </Link>
      </li>
    </ul>
  );
};

export default LinkSection;
