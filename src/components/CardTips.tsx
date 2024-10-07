import React from "react";
import { contentArray } from "@/contentArray";

const CardTips = ({ categ }: { categ: string }) => {
  return (
    <ul className=" mb-20 grid grid-flow-col gap-x-4 overflow-x-auto">
      {contentArray.categories[categ].map((item) => (
        <li
          key={`${item[0]}`}
          className="flex flex-col items-start gap-y-2 w-56 mt:w-72 bg-[#6AAC96] p-4 rounded-3xl"
        >
          <h3 className="font-madimi_one text-xl">{item[1]}</h3>
          {item[2].map((parag, index) => (
            <p key={`parag${index}`}>{parag}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default CardTips;
