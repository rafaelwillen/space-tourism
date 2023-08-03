"use client";

import { Logo } from "@/assets";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
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
    <header className="overflow-clip desktop:mt-10">
      <div className="flex justify-between items-center tablet:h-24">
        <Image
          src={Logo}
          alt="Space tourism logo "
          sizes="(min-width: 768px) 48px, 40px)"
          className="tablet:pt-6 desktop:pt-0"
        />
        <SidebarMenu />
        <div className="relative max-desktop:hidden w-full ml-16">
          <div className="absolute left-0 -right-6 z-10 h-px bg-white/[0.25] " />
        </div>
        <nav className="max-tablet:hidden self-stretch bg-white/[0.04] backdrop-blur-2xl px-12 pt-10 desktop:pr-40 desktop:pl-32">
          <ul className="flex gap-9 h-full desktop:gap-12">
            {navLinks.map((item, index) => (
              <NavbarItem {...item} index={index} key={item.name} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
