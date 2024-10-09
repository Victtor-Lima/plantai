"use serve";
import React from "react";
import { contentArray } from "@/contentArray";

const CardTips = ({ categ, display }: { categ: string; display: string }) => {
  return (
    <ul
      className={`${categ} mb-20 ${display} grid-flow-col gap-x-4 overflow-x-auto`}
    >
      {contentArray.categories[categ].map((tip) => (
        <li
          key={`${tip[0]}`}
          className="flex flex-col items-start gap-y-2 w-56 mt:w-72 bg-[#6AAC96] p-4 rounded-3xl"
        >
          <h3 className="font-madimi_one text-xl">{tip[1]}</h3>
          {tip[2].map((parag, index) => (
            <p key={`parag${index}`}>{parag}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default CardTips;
