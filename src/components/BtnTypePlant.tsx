"use client";
import React from "react";
import { chosenTip } from "@/functions/chosenTip";
import { focusEl } from "@/functions/focus";

const BtnTypePlant = ({
  typePlant,
  categ,
  bg,
}: {
  typePlant: string;
  categ: string;
  bg: string;
}) => {
  return (
    <button
      id={`${categ}`}
      className={`inline-block font-merriweather_sans font-bold text-lg mb-3 mr-2 px-4 py-2 md:px-8 md:py-3 rounded-full md:mr-3 lg:mr-4
      ${bg}
      `}
      onClick={() => chosenTip(categ)}
      onFocus={() => focusEl(categ)}
    >
      {typePlant}
    </button>
  );
};

export default BtnTypePlant;
