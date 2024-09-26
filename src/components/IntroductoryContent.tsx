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
      <section className="grid grid-cols-col2 gap-x-28 gap-y-14 max-w-sec m-m-centro">
        <div className="w-480">
          <h2 className="font-merriweather_sans font-bold text-xl text-orange mt-20">
            O MELHOR PARA SUAS PLANTAS
          </h2>
          <h1 className="font-merriweather_sans font-bold text-40px text-grayBlue mb-7">
            Ajudamos você a ter um lindo e saudável jardim.
          </h1>
          <p className="font-merriweather_sans font-light text-lg text-grayBlue mb-7">
            Aprenda rapidinho a cuidar das suas verdinhas!
          </p>
          <Link
            href={"/#dicas"}
            className="inline-block font-merriweather_sans font-bold text-white	px-7 py-4 bg-gradient-to-t from-lime-500 to-lime-400 rounded-full after:content-arrow after:pl-5"
          >
            Aprender
          </Link>
          <button className="ml-7 font-merriweather_sans font-bold text-grayBlue">
            <Image
              src={play}
              width={55}
              height={55}
              alt="ícone de play"
              sizes="100vw"
              className="inline-block mr-3"
            ></Image>
            Assista ao vídeo
          </button>
        </div>
        <div className="grid grid-cols-col2-1 items-start">
          <Image
            src={p_plant}
            width={400}
            height={515}
            alt="imagem de um exemplar da Dieffenbachia Seguine ou Comigo-ninguém-pode"
            className="justify-self-center self-center mt-1.5 relative right-8"
          />
          <Aspects />
        </div>
        <div className="w-full h-64 bg-[#30384B] rounded-3xl before:content-arrowSpiral2 before:relative before:top-[-120px] before:left-28"></div>
        <LinkSection />
      </section>
    </>
  );
};

export default IntroductoryContent;
