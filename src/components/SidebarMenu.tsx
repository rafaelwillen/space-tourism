import { IconClose, IconHamburger } from "@/assets";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./Header";

export default function SidebarMenu() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="tablet:hidden">
      <button onClick={() => setShowSidebar(true)} title="Open nav menu">
        <Image src={IconHamburger} alt="Open nav menu" />
      </button>
      <aside
        className={classNames(
          "fixed right-0 top-0 bottom-0 z-10 bg-white/[0.04] backdrop-blur-2xl duration-500 overflow-x-hidden",
          showSidebar ? "w-2/3" : "w-0"
        )}
      >
        <div className="py-8 pl-8 pr-6">
          <button
            onClick={() => setShowSidebar(false)}
            title="Close nav menu"
            className="text-right block ml-auto"
          >
            <Image src={IconClose} alt="Close nav menu" />
          </button>
          <nav className="mt-16">
            <ol className="space-y-8">
              {navLinks.map(({ href, name }, index) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="tracking-nav uppercase text-nav text-white"
                  >
                    <span className="mr-2 font-bold">0{index + 1}</span>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </aside>
    </div>
  );
}
