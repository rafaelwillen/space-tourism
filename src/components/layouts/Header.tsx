import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CloseSVG from "../../../public/assets/shared/icon-close.svg";
import HamburgerMenuSVG from "../../../public/assets/shared/icon-hamburger.svg";
import LogoSVG from "../../../public/assets/shared/logo.svg";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { pathname } = useRouter();

  return (
    <header className="text-nav-text font-body-condensed flex justify-between items-center tablet:pl-10">
      <Image src={LogoSVG} alt="Space Tourism Logo" className="w-12 h-12" />
      <button
        onClick={() => setIsMenuVisible(true)}
        type="button"
        className="w-6 h-5 tablet:hidden"
      >
        <Image src={HamburgerMenuSVG} alt="Menu Button" />
      </button>

      <nav
        className={`
        tablet:block relative w-auto mobile-menu
        ${
          isMenuVisible
            ? "block absolute top-0 bottom-0 right-0 w-[254px] mobile-menu font-body-condensed text-body"
            : "hidden"
        }`}
      >
        <div className="relative z-10 pt-8 pl-8 flex flex-col space-y-16 tablet:flex-row tablet:p-0 tablet:space-y-0">
          <button
            type="button"
            onClick={() => setIsMenuVisible(false)}
            className="tablet:hidden flex self-end mr-6"
          >
            <Image src={CloseSVG} alt="Close Button" />
          </button>
          <ul className="flex flex-col gap-8 tablet:flex-row tablet:px-12 tablet:gap-9">
            <li>
              <Link
                className={`flex gap-3 py-2 tablet:py-10 ${
                  routes.home === pathname
                    ? "border-r-4 tablet:border-b-4 tablet:border-r-0"
                    : ""
                } `}
                href={routes.home}
              >
                <span className="font-bold tablet:hidden">00</span>Home
              </Link>
            </li>
            <li>
              <Link
                className={`flex gap-3 py-2 tablet:py-10${
                  routes.destination === pathname
                    ? "border-r-4 tablet:border-r-0 "
                    : ""
                } `}
                href={routes.destination}
              >
                <span className="font-bold tablet:hidden">01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                className={`flex gap-3 py-2 tablet:py-10${
                  routes.crew === pathname
                    ? "border-r-4 tablet:border-r-0 "
                    : ""
                } `}
                href={routes.crew}
              >
                <span className="font-bold tablet:hidden">02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                className={`flex gap-3 py-2 tablet:py-10 ${
                  routes.technology === pathname
                    ? "border-r-4 tablet:border-r-0 "
                    : ""
                } `}
                href={routes.technology}
              >
                <span className="font-bold tablet:hidden">03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
