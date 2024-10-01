import Image from "next/image";
import React from "react";
import img1 from "../app/image/img_condition.svg";
import img2 from "../app/image/img_watering.svg";
import img3 from "../app/image/img_nutritionPruning.svg";

const GeneralInformation = () => {
  return (
    <section className="grid pt-20 border-t-2 justify-items-center gap-y-16 font-merriweather_sans ">
      <h1 className="font-madimi_one text-40px text-grayBlue pb-2 border-b-4 border-orangeP rounded">
        Passos para começar bem com suas plantas
      </h1>
      <ul className="grid grid-cols-3 gap-x-10 text-center max-w-screen-xl items-start">
        <li className="grid gap-y-3 ">
          <Image
            src={img1}
            width={154}
            height={142}
            alt="imagem ilustrando a ideia de luminosidade ideal para uma planta"
            className="justify-self-center rounded-bp"
          />
          <h3 className="text-xl">Planta adequada</h3>
          <p className="font-light	">
            Certifique-se de que a planta seja apropriada para as condições de
            luz, temperatura e umidade do ambiente.
          </p>
        </li>
        <li className="grid gap-y-3">
          <Image
            src={img2}
            width={154}
            height={142}
            alt="imagem que ilutra uma planta sendo regada"
            className="justify-self-center rounded-bp"
          />
          <h3 className="text-xl">Rega correta</h3>
          <p className="font-light">
            Ajuste a rega conforme a planta, clima e estação, evitando tanto o
            excesso quanto a falta de água.
          </p>
        </li>
        <li className="grid gap-y-3">
          <Image
            src={img3}
            width={154}
            height={142}
            alt="imagem que ilustra a pota inteligente de uma planta"
            className="justify-self-center rounded-bp"
          />
          <h3 className="text-xl">Nutrientes e poda</h3>
          <p className="font-light">
            Adube regularmente e faça podas para remover partes mortas ou
            doentes, promovendo o crescimento saudável da planta.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default GeneralInformation;
