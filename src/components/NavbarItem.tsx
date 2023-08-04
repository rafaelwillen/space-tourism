"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./Header";

type Props = (typeof navLinks)[number] & { index: number };

export default function NavbarItem({ href, name, index }: Props) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={classNames(
          "block h-full text-white text-nav tracking-[2.36px] uppercase border-b-3 border-white border-opacity-0 hover:border-opacity-50",
          pathname === href && "border-opacity-100 hover:border-opacity-100"
        )}
        href={href}
      >
        <span className="mr-2 font-bold max-desktop:hidden">0{index + 1}</span>
        {name}
      </Link>
    </li>
  );
}
