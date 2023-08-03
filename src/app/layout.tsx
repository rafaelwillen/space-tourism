import { IconHamburger, Logo } from "@/assets";
import classNames from "classnames";
import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const heading = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--heading",
});
const body = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--body",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          heading.variable,
          body.variable,
          body.className,
          "bg-black text-primary p-6"
        )}
      >
        <header>
          <nav>
            <ul>
              <Image src={Logo} alt="Space tourism logo" />
              <Image src={IconHamburger} alt="Open nav menu" />
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
