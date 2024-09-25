import Link from "next/link";
import React from "react";

const LinkSection = () => {
  return (
    <ul className="grid grid-cols-2">
      <li>
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center font-merriweather_sans text-xl w-80 h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink1"
        >
          Folhagens
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center font-merriweather_sans text-xl w-80 h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink2"
        >
          Suculentas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center font-merriweather_sans text-xl w-80 h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink3"
        >
          Sobre plantas
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="grid grid-cols-col2 gap-x-4 items-center font-merriweather_sans text-xl w-80 h-24 bg-gradient-to-b from-gray-50 to-gray-200 rounded-3xl before:content-imglink4"
        >
          Equipamentos
        </Link>
      </li>
    </ul>
  );
};

export default LinkSection;
