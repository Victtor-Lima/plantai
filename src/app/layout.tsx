import type { Metadata } from "next";
import Header from "@/components/Header";
import { Merriweather_Sans, Madimi_One } from "next/font/google";
import "./globals.css";

const merriweather_sans = Merriweather_Sans({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather-sans",
});

const madimi_one = Madimi_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-madimi-one",
});

export const metadata: Metadata = {
  title: "Plantai",
  description:
    "O nosso objetivo é ajudar você a ter um lindo e saudável jardim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${merriweather_sans.variable} ${madimi_one.variable}`}
    >
      <body className="ms:mx-5 mt:mx-8 lg:mx-10">
        <Header />
        {children}
      </body>
    </html>
  );
}
