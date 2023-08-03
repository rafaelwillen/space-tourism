"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./Header";

type Props = (typeof navLinks)[number] & { index: number };

export default function NavbarItem({ href, name, index }: Props) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <li>
      <Link
        className={classNames(
          "block h-full text-white text-nav tracking-[2.36px] uppercase",
          pathname === href && "border-b-[3px] border-white"
        )}
        href={href}
      >
        <span className="mr-2 font-bold max-desktop:hidden">0{index + 1}</span>
        {name}
      </Link>
    </li>
  );
}
