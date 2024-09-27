import Image from "next/image";
import React from "react";
import logo from "../app/image/icon/logo.svg";
import IcChat from "../app/image/icon/icon_chat.svg";
import "../app/globals.css";

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center py-3 border-b-2 ms:grid-cols-3 ms:py-6 sm:py-8">
      <Image
        src={logo}
        width={117}
        height={24}
        alt="Plantai - logo do site"
        priority={true}
        className="ms:col-start-2 ms:place-self-center"
      />
      <button className="place-self-end">
        <Image
          src={IcChat}
          width={26}
          height={26}
          alt="Ícone do botão chat"
          className=" ms:w-7 h-7 sm:w-8 h-8"
        />
      </button>
    </header>
  );
};

export default Header;
