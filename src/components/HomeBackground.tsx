import {
  HomeBackgroundDesktop,
  HomeBackgroundMobile,
  HomeBackgroundTablet,
} from "@/assets";
import Image from "next/image";

export default function HomeBackground() {
  return (
    <>
      <Image
        fill
        src={HomeBackgroundMobile}
        alt=""
        className="-z-10 tablet:hidden  object-cover"
      />
      <Image
        alt=""
        fill
        src={HomeBackgroundTablet}
        className="-z-10 desktop:hidden  object-cover"
      />
      <Image
        fill
        src={HomeBackgroundDesktop}
        alt=""
        className="-z-10 max-desktop:hidden  object-cover"
      />
    </>
  );
}
