import {
  DestinationBackgroundDesktop,
  DestinationBackgroundMobile,
  DestinationBackgroundTablet,
} from "@/assets";
import Image from "next/image";

export default function ExploreBackgrounds() {
  return (
    <>
      <Image
        fill
        src={DestinationBackgroundMobile}
        alt=""
        className="-z-10 tablet:hidden  object-cover"
      />
      <Image
        alt=""
        fill
        src={DestinationBackgroundTablet}
        className="-z-10 desktop:hidden  object-cover"
      />
      <Image
        fill
        src={DestinationBackgroundDesktop}
        alt=""
        className="-z-10 max-desktop:hidden  object-cover"
      />
    </>
  );
}
