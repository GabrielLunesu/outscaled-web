"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DesktopCard {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface MobileCard {
  number: string;
  title: string;
  description: string;
}

const DESKTOP_CARDS: DesktopCard[] = [
  {
    number: "01.",
    title: "Knows your brand",
    description:
      "Every agent learns from your brand voice, products, and rules before it writes a single word. The work sounds like you, because it was trained on you.",
    image:
      "/images/endless-expectations-612180.framer.app/pC12ErCmiABgUXftWqc8KsQZluM.png",
  },
  {
    number: "02.",
    title: "Does real work",
    description:
      "Beyond suggestions, your agents execute. Listing products, drafting campaigns, watching your numbers, handling the busywork across all your connected tools.",
    image:
      "/images/endless-expectations-612180.framer.app/jF7w5PT9lgaSIDfasrXaHSMrK4U.png",
  },
  {
    number: "03.",
    title: "Works your whole stack",
    description:
      "ecomOS sits on top of Shopify and the tools you already use. One team, every app, no switching tabs.",
    image:
      "/images/endless-expectations-612180.framer.app/5M8NQwtBDMwHm87dfXtDX1TOQ.png",
  },
  {
    number: "04.",
    title: "Gets better every run",
    description:
      "Agents remember feedback, learn your preferences, and sharpen with every task. The employee you hire today is the junior version of the one you'll have next month.",
    image:
      "/images/endless-expectations-612180.framer.app/EHl1CtlUBN1riBQS4dJqgiTwMog.png",
  },
];

const MOBILE_CARDS: MobileCard[] = [
  {
    number: "01.",
    title: "Always context-aware",
    description:
      "Parley remembers your preferences, priorities, and past decisions — so you never have to repeat yourself. It understands your work the way a long-time colleague would.",
  },
  {
    number: "02.",
    title: "Takes real action",
    description:
      "Beyond suggestions, Parley executes — sending emails, booking meetings, updating records, and managing tasks across all your tools without constant hand-holding.",
  },
  {
    number: "03.",
    title: "Connects everything",
    description:
      "Slack, Notion, HubSpot, GitHub — all in one place. Parley connects to 60+ tools. One conversation updates everything, no extra work.",
  },
  {
    number: "04.",
    title: "Gets better over time",
    description:
      "The longer you work together, the less you explain. Parley learns your tone, shortcuts, and rules. Today's prompts become tomorrow's one-word commands.",
  },
];

const MOBILE_IMAGE =
  "/images/endless-expectations-612180.framer.app/CpfLkhgt7FpnO01s75GIa7DPZo8.jpg";

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function WhyEcomOS() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center bg-background px-5 py-10 md:py-20">
      <div className="flex w-full max-w-[1240px] flex-col gap-10 md:gap-[73px]">
        <div className="flex w-full flex-col gap-4 md:h-[125px] md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground">Why ecomOS</span>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">
              Real employees,
              <br />
              not chatbots in disguise
            </h2>
          </div>
          <p className="max-w-[340px] text-sm text-muted-foreground italic md:text-right">
            Most AI tools wait for prompts. ecomOS agents take ownership of
            their job, doing the work across your store and reporting back
            with results, not suggestions.
          </p>
        </div>

        <div className="hidden grid-cols-4 gap-6 md:grid">
          {DESKTOP_CARDS.map((card, i) => (
            <RevealCard key={card.title} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-card">
                <div className="flex flex-col gap-4 px-6 pt-6">
                  <span className="text-xs text-muted-foreground">
                    {card.number}
                  </span>
                  <h3 className="font-heading text-lg text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {card.description}
                  </p>
                </div>
                <div className="relative mt-auto aspect-[3/4] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:hidden">
          {MOBILE_CARDS.map((card, i) => (
            <RevealCard key={card.title} delay={i * 100}>
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center">
                <h3 className="font-heading text-lg text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={MOBILE_IMAGE}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
