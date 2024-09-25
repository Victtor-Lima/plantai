import React from "react";

const Aspects = () => {
  return (
    <ul className="grid gap-y-3 text-lg font-merriweather_sans justify-self-end">
      <li className="grid grid-cols-col2 gap-x-3 items-center w-60 py-3 px-5 bg-clear_shell rounded-3xl before:content-sun">
        Condição solar
      </li>
      <li className="grid grid-cols-col2 gap-x-3 items-center w-60 py-3 px-5 bg-panache rounded-3xl before:content-watering ">
        Rega
      </li>
      <li className="grid grid-cols-col2 gap-x-3 items-center w-60 py-3 px-5 bg-clear_shell rounded-3xl before:content-plantsize before:px-1 before:relative before:top-1">
        Porte
      </li>
    </ul>
  );
};

export default Aspects;
