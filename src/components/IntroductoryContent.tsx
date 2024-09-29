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
      <section className="grid mt:grid-cols-col2b md:grid-cols-2 mt:auto-cols-max gap-y-6 mt:gap-y-8 md:gap-0 lg:gap-y-12 msto:grid-cols-col2 mt:gap-x-2 md:gap-x-7 msto:gap-x-20 mst:gap-x- max-w-sec m-m-centro">
        <div className="mt:w-full msto:w-420 msto:w-480">
          <h2 className="font-merriweather_sans font-bold text-sm md:text-base lg:text-xl text-orange mt-8 md:mt-20 md:mb-2">
            O MELHOR PARA SUAS PLANTAS
          </h2>
          <h1 className="font-merriweather_sans font-bold text-2xl mt:text-34px md:text-36px lg:text-48px text-grayBlue mb-3 lg:mb-7">
            Ajudamos você a ter um lindo e saudável jardim.
          </h1>
          <p className="font-merriweather_sans font-light text-sm md:text-[15px] lg:text-lg text-grayBlue mb-4 lg:mb-5 msto:mb-7 ">
            Aprenda a cuidar das suas verdinhas!
          </p>
          <Link
            href={"/#dicas"}
            className="inline-block font-merriweather_sans font-bold text-white mb-3 px-2 py-2 md:px-4 md:py-3 bg-gradient-to-t from-lime-500 to-lime-400 rounded-full after:content-arrow after:pl-2 after:md:pl-4 mr-2 md:mr-3 lg:mr-7"
          >
            Aprender
          </Link>
          <button className="font-merriweather_sans font-bold text-grayBlue text-sm">
            <Image
              src={play}
              width={40}
              height={40}
              alt="ícone de play"
              sizes="100vw"
              className="inline-block mr-3 md:w-12  lg:w-13 lg:h-13"
              priority={true}
            ></Image>
            Assista ao vídeo
          </button>
        </div>
        <div className="grid lg:grid-rows-row2 msto:grid-cols-col2a items-start">
          <Image
            src={p_plant}
            width={316}
            height={412}
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
