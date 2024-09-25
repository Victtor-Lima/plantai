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
      <section>
        <div className="w-480">
          <h2 className="font-merriweather_sans font-bold text-xl text-orange">
            O MELHOR PARA SUAS PLANTAS
          </h2>
          <h1 className="font-merriweather_sans font-bold text-40px text-grayBlue">
            Ajudamos você a ter um lindo e saudável jardim.
          </h1>
          <p className="font-merriweather_sans font-light text-base text-grayBlue">
            Aprenda rapidinho a cuidar das suas verdinhas!
          </p>
          <Link
            href={"/#dicas"}
            className="inline-block font-merriweather_sans font-bold text-white	px-7 py-3 bg-gradient-to-t from-lime-500 to-lime-400 rounded-full after:content-arrow after:pl-5"
          >
            Aprender
          </Link>
          <button className="ml-7 font-merriweather_sans font-bold text-grayBlue">
            <Image
              src={play}
              width={49}
              height={49}
              alt="ícone de play"
              sizes="100vw"
              className="inline-block mr-3"
            ></Image>
            Assista ao vídeo
          </button>
        </div>
        <div className="grid grid-cols-2 items-start">
          <Image
            src={p_plant}
            width={361}
            height={465}
            alt="imagem de um exemplar da Dieffenbachia Seguine ou Comigo-ninguém-pode"
            className="justify-self-center"
          />
          <Aspects />
        </div>
        <LinkSection />
      </section>
    </>
  );
};

export default IntroductoryContent;
