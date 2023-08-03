import Header from "@/components/Header";
import classNames from "classnames";
import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const heading = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--heading",
});
const body = Barlow_Condensed({
  weight: ["400", "700"],
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
          "bg-black text-primary p-6 tablet:pt-0 tablet:pr-0 tablet:pl-14"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
