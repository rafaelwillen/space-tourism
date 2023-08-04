import ExploreBackgrounds from "@/components/ExploreBackgrounds";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { destinationData } from "../utils";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ExplorePage({ searchParams }: Props) {
  const destinationSearch = searchParams.destination ?? "moon";
  const destination =
    destinationData.find(({ name }) => {
      if (Array.isArray(destinationSearch)) {
        return undefined;
      }
      return name.toLowerCase() === destinationSearch.toLowerCase();
    }) ?? destinationData[0];

  return (
    <main className="text-center mt-6 desktop:text-left desktop:px-10 desktop:mt-[76px] desktop:container desktop:mx-auto">
      <ExploreBackgrounds />
      <p className="text-white text-nav tracking-nav uppercase text-left desktop:text-heading-5 desktop:tracking-heading-5 desktop:mb-16">
        <span className="mr-4 font-bold opacity-25">01</span> Pick your
        destination
      </p>
      <div className="desktop:flex gap-10 items-start">
        <Image
          className="mx-auto my-8 w-full h-auto max-w-[200px] tablet:max-w-[350px] desktop:max-w-lg desktop:flex-1"
          sizes="100vw"
          src={destination.image}
          alt={destination.name}
        />
        <div>
          <ul className="flex gap-7 justify-center mb-5 tablet:mb-8 desktop:justify-start desktop:mb-9">
            {destinationData.map(({ name }) => (
              <li key={name}>
                <Link
                  className={classNames(
                    "pb-3 border-b-3 border-white border-opacity-0 uppercase text-primary hover:border-opacity-50 ",
                    name === destination.name &&
                      "border-opacity-100 hover:border-opacity-100 text-white"
                  )}
                  href={{ query: { destination: name.toLowerCase() } }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="font-heading text-heading-3 uppercase text-white tablet:text-[5rem] desktop:text-heading-2 desktop:mb-3">
            {destination.name}
          </h1>
          <p className="max-w-xs text-nav leading-relaxed mx-auto tablet:max-w-xl desktop:max-w-md desktop:mx-0">
            {destination.description}
          </p>
          <div className="flex mx-auto flex-wrap justify-center gap-8 border-t border-[#383B4B] mt-8 pt-8 max-w-[327px] tablet:max-w-[573px] desktop:mt-14 desktop:flex-nowrap ">
            <div className="space-y-3 w-full tablet:max-w-[216px] desktop:max-w-none">
              <p className="text-subheading-2 tracking-subheading-2 uppercase">
                Avg. Distance
              </p>
              <p className="text-white font-heading text-heading-5 uppercase">
                {destination.distance}
              </p>
            </div>
            <div className=" space-y-3 w-full tablet:max-w-[216px] desktop:max-w-none">
              <p className="text-subheading-2 tracking-subheading-2 uppercase">
                Est. Travel Time
              </p>
              <p className="text-white font-heading text-heading-5 uppercase">
                {destination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
