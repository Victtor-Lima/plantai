import Link from "next/link";
import React from "react";

const LinkSection = () => {
  return (
    <ul className="grid col-span-full	order-1 mt:grid-cols-2 md:col-auto md:order-none  mt:gap-x-3 md:gap-x-2 lg:gap-x-6 mst:gap-x-24 mst:gap-y-9 gap-y-3 font-merriweather_sans  self-end">
      <li>
        <Link
          href="#"
          className="grid grid-cols-col2 lg:gap-x-2 items-center lg:text-lg msto:text-xl w-full md:md:h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink1 before:md:w-16 before:md:h-16"
        >
          Folhagens
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-2 lg:gap-x-4 items-center lg:text-lg msto:text-xl w-full md:h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink2"
        >
          Suculentas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-2 lg:gap-x-4 items-center lg:text-lg msto:text-xl w-full md:h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink3"
        >
          Sobre plantas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-2 lg:gap-x-4 items-center lg:text-lg msto:text-xl w-full md:h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink4"
        >
          Ferramentas
        </Link>
      </li>
    </ul>
  );
};

export default LinkSection;
