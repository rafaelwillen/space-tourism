import Link from "next/link";

export default function Home() {
  return (
    <main className="desktop:flex justify-between items-end desktop:mt-60">
      <div className="mt-12 mb-20 text-center uppercase space-y-4 max-w-[444px] mx-auto tablet:mt-[106px] tablet:mb-40 tablet:space-y-6 desktop:my-0 desktop:text-left">
        <p className=" text-nav tracking-nav tablet:text-xl tablet:tracking-[3.375px] desktop:text-subheading-1 desktop:tracking-heading-5">
          So, you want to travel to
        </p>
        <h1 className="text-white font-heading text-7xl leading-relaxed tablet:text-heading-1 tablet:leading-[150px] desktop:leading-normal">
          Space
        </h1>
        <p className="normal-case text-nav leading-relaxed desktop:text-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        className="flex justify-center items-center mx-auto w-36 h-36 bg-white text-black rounded-full font-heading text-xl uppercase tablet:text-heading-4 tablet:w-60 tablet:h-60 desktop:w-72 desktop:h-72"
        href="/explore"
      >
        Explore
      </Link>
    </main>
  );
}
