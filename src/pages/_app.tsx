import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

const headingFont = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});
const bodyCondensedFont = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: "400",
});
const bodyFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${headingFont.variable} ${bodyCondensedFont.variable} ${bodyFont.variable} font-body text-body`}
    >
      <Component {...pageProps} />
    </main>
  );
}
