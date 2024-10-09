import React from "react";
import logo from "../app/image/icon/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" h-16 bg-[#ADEB43] grid grid-cols-col2 gap-x-3 items-center border-b-2 md:grid-cols-3">
      <Image
        src={logo}
        width={117}
        height={24}
        alt="Plantai - logo do site"
        priority={true}
        className="ml-4 md:col-start-2 md:place-self-center w-4/5 mt:w-auto"
      />
      <div className="justify-self-end grid lg:grid-cols-2 justify-items-end gap-y-0.5 gap-x-4 font-merriweather_sans text-grayBlue text-xs mt:text-base mr-4">
        <p>Termos de Serviço</p>
        <p>Política de Privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;
