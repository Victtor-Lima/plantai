import Link from "next/link";
import React from "react";
import play from "../app/image/icon/icon_play.svg";
import p_plant from "../app/image/p_plant.svg";
import Image from "next/image";
import Aspects from "./Aspects";
import LinkSection from "./LinkSection";

const IntroductoryContent = () => {
  return (
    <>
      <section className="grid grid-cols-2 auto-cols-max gap-y-12 msto:grid-cols-col2 gap-x-7 msto:gap-x-20 mst:gap-x-28 msto:gap-y-12 max-w-sec m-m-centro">
        <div className="w-full msto:w-420 msto:w-480">
          <h2 className="font-merriweather_sans font-bold lg:text-xl text-orange mt-20">
            O MELHOR PARA SUAS PLANTAS
          </h2>
          <h1 className="font-merriweather_sans font-bold md:text-[2.125rem] lg:text-40px mst:text-48px text-grayBlue mb-3 msto:mb-7">
            Ajudamos você a ter um lindo e saudável jardim.
          </h1>
          <p className="font-merriweather_sans font-light md:text-[15px] lg:text-lg text-grayBlue mb-4 lg:mb-7">
            Aprenda rapidinho a cuidar das suas verdinhas!
          </p>
          <Link
            href={"/#dicas"}
            className="inline-block font-merriweather_sans font-bold text-white	px-4 py-3 bg-gradient-to-t from-lime-500 to-lime-400 rounded-full after:content-arrow after:pl-4"
          >
            Aprender
          </Link>
          <button className="ml-3 lg:ml-7 font-merriweather_sans font-bold text-grayBlue md:text-sm">
            <Image
              src={play}
              width={49}
              height={49}
              alt="ícone de play"
              sizes="100vw"
              className="inline-block mr-3 lg:w-14 lg:h-14"
            ></Image>
            Assista ao vídeo
          </button>
        </div>
        <div className="grid lg:grid-rows-row2 msto:grid-cols-col2-1 items-start">
          <Image
            src={p_plant}
            alt="imagem de um exemplar da Dieffenbachia Seguine ou Comigo-ninguém-pode"
            className="justify-self-center self-center msto:w-400 msto:h-500 mt-1.5 relative msto:right-8"
          />
          <Aspects />
        </div>
        <div className="col-span-full order-2	w-full h-36 md:col-auto md:order-none md:h-full lg:h-64 bg-[#30384B] rounded-3xl lg:before:content-arrowSpiral2 before:relative before:top-[-120px] before:left-28"></div>
        <LinkSection />
      </section>
    </>
  );
};

export default IntroductoryContent;
