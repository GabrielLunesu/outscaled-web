import Image from "next/image";
import { DoubleChevronIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-5 p-5">
      <div className="relative flex aspect-[1240/619] w-full max-w-[1240px] flex-col items-center justify-center gap-2.5 overflow-clip rounded-3xl">
        <Image
          src="/images/endless-expectations-612180.framer.app/BvP2CQBZpvSA9Mcp4n3LoGf0E.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 1240px, 100vw"
          className="object-cover"
        />
        <div className="relative z-[2] flex max-w-[892px] flex-col items-center gap-5 px-6 text-center md:px-[109px]">
          <h1 className="font-heading text-4xl text-white md:text-5xl lg:whitespace-nowrap">
            Stop doing jobs. Start giving them.
          </h1>
          <p className="max-w-[687px] text-sm text-white/85 md:text-base">
            Connect your store and the tools you already use, then create AI
            employees for any job, from product listers to creative
            strategists. They actively learn everything about your brand, so
            you can scale your AI fleet with confidence.
          </p>
          <a
            href="#"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-foreground"
          >
            <DoubleChevronIcon className="text-accent-pink" />
            Get started free
          </a>
        </div>
      </div>
    </section>
  );
}
