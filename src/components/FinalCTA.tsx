import Image from "next/image";

import { ArrowRightIcon } from "@/components/icons";

export function FinalCTA() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5">
      <div className="relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl px-5 py-16 text-center sm:py-20 md:py-24">
        <Image
          src="/images/endless-expectations-612180.framer.app/IsVu6rT6bqu5BoGXtiz6Yd36c4.png"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center gap-5">
          <h2 className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            <span className="block font-sans font-bold">Meet your AI partner.</span>
            <span className="block font-heading font-normal italic">
              Built for real work
            </span>
          </h2>
          <p className="max-w-xl text-sm text-white/85 sm:text-base">
            Join 12,000+ professionals who use Parley as their daily partner. Set up in
            minutes. Cancel anytime. Your first 100 tasks are on us.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 py-1 pr-5 pl-1 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-white text-accent-pink">
              <ArrowRightIcon className="size-4" />
            </span>
            Get started free
          </a>
        </div>
      </div>
    </section>
  );
}
