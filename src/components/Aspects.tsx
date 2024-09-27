import React from "react";

const Aspects = () => {
  return (
    <ul className="grid grid-cols-3 gap-x-2 msto:grid-cols-1 justify-self-stretch msto:gap-y-3 mst:text-lg font-merriweather_sans justify-self-end msto:mt-32 msto:after:content-arrowSpiral1 after:relative msto:after:right-[150px] mst:after:right-[280px] msto:after:top-full2	 mst:after:top-40">
      <li className="grid grid-cols-col2 gap-x-3 items-center w-full py-2 px-3 mst:py-3 mst:px-5 bg-clear_shell rounded-3xl before:content-sun">
        Condição
      </li>
      <li className="grid grid-cols-col2 gap-x-3 items-center w-full py-2 px-3 mst:py-3 msto:px-5 bg-panache rounded-3xl before:content-watering">
        Rega
      </li>
      <li className="grid grid-cols-col2 gap-x-3 items-center w-full py-2 px-3 mst:py-3 mst:px-5 bg-clear_shell rounded-3xl before:content-plantsize before:px-1 before:relative before:top-1">
        Porte
      </li>
    </ul>
  );
};

export default Aspects;
