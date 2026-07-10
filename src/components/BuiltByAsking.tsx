"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DoubleChevronIcon } from "@/components/icons";
import { ProposedWorkMockup } from "@/components/ProposedWorkMockup";
import { BrandMemoryMockup } from "@/components/BrandMemoryMockup";

type ItemIndex = 0 | 1 | 2;

const ITEMS: { title: string; description: string }[] = [
  {
    title: "From sentence to working agent",
    description:
      "Outscaled breaks your request into a clear plan: what the agent does, which apps it uses, what it needs from you. You see the whole job before it starts.",
  },
  {
    title: "You decide the leash",
    description:
      "Every agent starts by proposing its work for review. As trust grows, you give it more room, until it runs on its own within the limits you set.",
  },
  {
    title: "A team that remembers",
    description:
      "Your agents share what they learn about your brand, products, and preferences. Train one, and the whole team gets smarter.",
  },
];

export function BuiltByAsking() {
  const [active, setActive] = useState<ItemIndex>(0);

  return (
    <section className="flex w-full flex-col items-center px-5 py-20">
      <div className="flex w-full max-w-[1240px] flex-col gap-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-start">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">
              Built by asking
            </p>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">
              Say it once. It gets done.
            </h2>
          </div>
          <p className="max-w-[500px] text-sm text-muted-foreground lg:pb-1">
            Describe what you need in plain words and Outscaled turns it into a
            working agent. It plans the job, picks the right skills and apps,
            and shows you every step before anything runs.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex flex-1 flex-col gap-12">
            {ITEMS.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index as ItemIndex)}
                  className="flex cursor-pointer flex-col gap-3 text-left"
                >
                  <span className="flex items-center gap-2">
                    <DoubleChevronIcon
                      className={cn(
                        "text-accent-pink",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span
                      className={cn(
                        "font-heading text-xl md:text-2xl",
                        isActive
                          ? "font-bold text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </span>
                  </span>
                  {isActive && (
                    <p className="max-w-[380px] pl-6 text-sm italic text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative aspect-[15/16] w-full flex-1 overflow-hidden rounded-3xl">
            {active === 0 && (
              <Image
                src="/images/endless-expectations-612180.framer.app/g2Q0UEGYPma6FK2cD4vkNBVTXao.png"
                alt="A person working with a laptop under a golden light path"
                fill
                className="object-cover"
              />
            )}
            {active === 1 && <ProposedWorkMockup />}
            {active === 2 && <BrandMemoryMockup />}
          </div>
        </div>
      </div>
    </section>
  );
}
