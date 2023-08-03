"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destination",
    href: "/explore",
  },
  {
    name: "Crew",
    href: "/crew",
  },
  {
    name: "Technology",
    href: "/technology",
  },
];

export default function Header() {
  return (
    <header className="overflow-clip">
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="Space tourism logo" width={40} height={40} />
        <SidebarMenu />
      </div>
    </header>
  );
}
