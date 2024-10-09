import React from "react";
import CardTips from "./CardTips";
import BtnTypePlant from "./BtnTypePlant";

const HowToCultivate = () => {
  const type = ["folhagens", "suculentas"];

  return (
    <>
      <section className="howToCultivate mx-4 lg:mx-10 ">
        <h1 className="font-madimi_one text-2xl mt:text-[30px] md:text-36px lg:text-40px  text-grayBlue leading-normal pb-2 rounded-lg underline underline-offset-[12px] decoration-[#AAE83F] mb-10 ">
          Dicas Práticas para Cuidar de suas Plantas
        </h1>
        <div>
          <BtnTypePlant
            bg="bg-gradient-to-t from-[#499b7f] to-[#6AAC96]"
            categ="folhagens"
            typePlant="Folhagens"
          />
          <BtnTypePlant
            bg="bg-gradient-to-t from-lime-500 to-lime-400"
            categ="suculentas"
            typePlant="Suculentas"
          />
        </div>
        <CardTips key={type[0]} categ={type[0]} display="grid" />
        <CardTips key={type[1]} categ={type[1]} display="hidden" />
      </section>
    </>
  );
};

export default HowToCultivate;
