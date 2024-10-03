import Image from "next/image";
import React from "react";
import img1 from "../app/image/img_condition.svg";
import img2 from "../app/image/img_watering.svg";
import img3 from "../app/image/img_nutritionPruning.svg";

const GeneralInformation = () => {
  return (
    <section className="grid pt-12 lg:pt-20 border-t-2 justify-items-center gap-y-12 mt:gap-y-16 font-merriweather_sans">
      <h1 className="font-madimi_one text-2xl mt:text-[30px] md:text-36px lg:text-40px text-center text-grayBlue leading-normal pb-2 rounded-lg underline underline-offset-[12px] decoration-[#FFA46D]">
        Primeiros passos para começar bem com suas plantas
      </h1>
      <ul className="grid min-[545px]:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 text-center max-w-screen-xl items-start">
        <li className="grid gap-y-3 min-w-[200px] max-w-[400px]">
          <Image
            src={img1}
            width={138}
            height={127}
            alt="imagem ilustrando a ideia de luminosidade ideal para uma planta"
            className="justify-self-center mt:w-154 mt:h-142 rounded-bp"
          />
          <h3 className="mt:text-xl before:content-regGreen before:relative before:bottom-1 before:pr-1 after:content-regGreen after:relative after:bottom-1 after:pl-1">
            Planta adequada
          </h3>
          <p className="font-light text-sm mt:text-base">
            Certifique-se de que a planta seja apropriada para as condições de
            luz, temperatura e umidade do ambiente.
          </p>
        </li>
        <li className="grid gap-y-3 min-w-[200px] max-w-[400px]">
          <Image
            src={img2}
            width={138}
            height={127}
            alt="imagem que ilutra uma planta sendo regada"
            className="justify-self-center mt:w-154 mt:h-142 rounded-bp"
          />
          <h3 className="mt:text-xl before:content-regGreen before:relative before:bottom-1 before:pr-1 after:content-regGreen after:relative after:bottom-1 after:pl-1">
            Rega correta
          </h3>
          <p className="font-light text-sm mt:text-base">
            Ajuste a rega conforme a planta, clima e estação, evitando tanto o
            excesso quanto a falta de água.
          </p>
        </li>
        <li className="grid min-[545px]:col-span-full lg:col-auto gap-y-3 min-w-[200px]">
          <Image
            src={img3}
            width={138}
            height={127}
            alt="imagem que ilustra a pota inteligente de uma planta"
            className="justify-self-center mt:w-154 mt:h-142 rounded-bp"
          />
          <h3 className="mt:text-xl before:content-regGreen before:relative before:bottom-1 before:pr-1 after:content-regGreen after:relative after:bottom-1 after:pl-1">
            Nutrientes e poda
          </h3>
          <p className="font-light text-sm mt:text-base max-w-[400px] justify-self-center">
            Adube regularmente e faça podas para remover partes mortas ou
            doentes, promovendo o crescimento saudável da planta.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default GeneralInformation;
