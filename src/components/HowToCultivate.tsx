import React from "react";
import CardTips from "./CardTips";

const HowToCultivate = () => {
  const type = ["folhagens", "suculentas"];

  return (
    <>
      <section>
        <h1 className="font-madimi_one text-2xl mt:text-[30px] md:text-36px lg:text-40px  text-grayBlue leading-normal pb-2 rounded-lg underline underline-offset-[12px] decoration-[#AAE83F] mb-10">
          Dicas Práticas para Cuidar de suas Plantas
        </h1>
        {type.map((categ) => (
          <CardTips key={categ} categ={categ} />
        ))}
      </section>
    </>
  );
};

export default HowToCultivate;
