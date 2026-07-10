"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DoubleChevronIcon } from "@/components/icons";

type BillingPeriod = "monthly" | "annual";

interface Tier {
  name: string;
  price: Record<BillingPeriod, string>;
  caption: Record<BillingPeriod, string>;
  description: string;
  includedFeatures: string[];
  excludedFeatures: string[];
  cta: string;
  background: "cream" | "photo";
}

const tiers: Tier[] = [
  {
    name: "Solo",
    price: { monthly: "$0", annual: "$0" },
    caption: { monthly: "Free forever", annual: "Free forever" },
    description:
      "Perfect for individuals getting started with AI-powered productivity. No credit card required.",
    includedFeatures: [
      "1 connected workspace",
      "Up to 5 integrations",
      "100 AI tasks / month",
      "Basic memory (30 days)",
      "Email + calendar workflows",
    ],
    excludedFeatures: ["Custom workflows", "Priority support", "Team features"],
    cta: "Get started free",
    background: "cream",
  },
  {
    name: "Pro",
    price: { monthly: "$49", annual: "$169" },
    caption: {
      monthly: "per month, billed monthly",
      annual: "per month, billed monthly",
    },
    description:
      "The full Parley experience for professionals who want a true AI partner in their work.",
    includedFeatures: [
      "1 connected workspace",
      "Up to 5 integrations",
      "100 AI tasks / month",
      "Basic memory (30 days)",
      "Email + calendar workflows",
    ],
    excludedFeatures: ["Custom workflows", "Priority support", "Team features"],
    cta: "Get started free",
    background: "photo",
  },
  {
    name: "Teams",
    price: { monthly: "$89", annual: "$299" },
    caption: { monthly: "per seat / month", annual: "per seat / month" },
    description:
      "For growing teams that want shared intelligence, role-based access, and centralized control.",
    includedFeatures: [
      "1 connected workspace",
      "Up to 5 integrations",
      "100 AI tasks / month",
      "Long-term memory (forever)",
      "All workflow templates",
      "Custom workflows & automations",
      "Priority support",
      "Team features",
    ],
    excludedFeatures: [],
    cta: "Talk to sales",
    background: "cream",
  },
];

export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section className="w-full flex flex-col items-center px-5 py-20">
      <div className="w-full max-w-[1240px] flex flex-col gap-10 overflow-clip">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3 md:w-[540px]">
            <span className="text-sm font-medium text-foreground">Pricing</span>
            <h2 className="font-heading text-[40px] leading-[1.15] text-foreground">
              Simple, transparent pricing. No surprises.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5 md:w-[420px]">
            <p className="text-sm text-muted-foreground md:text-right">
              Start free, scale as you grow. Every plan includes core features —
              upgrade when you need more power or seats.
            </p>
            <div className="inline-flex items-center gap-1 rounded-full bg-cream p-1">
              <button
                type="button"
                onClick={() => setPeriod("monthly")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  period === "monthly"
                    ? "bg-white text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setPeriod("annual")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  period === "annual"
                    ? "bg-white text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Annual <span className="text-muted-foreground">-15%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} period={period} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ tier, period }: { tier: Tier; period: BillingPeriod }) {
  const isPhoto = tier.background === "photo";

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col overflow-hidden rounded-2xl p-5",
        !isPhoto && "bg-cream"
      )}
    >
      {isPhoto && (
        <Image
          src="/images/endless-expectations-612180.framer.app/izM6Io4LYERFIddIZdCV0bYEH5k.png"
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      )}
      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="font-heading text-2xl text-foreground">{tier.name}</h3>
        <p className="mt-6 font-heading text-4xl text-foreground">
          {tier.price[period]}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {tier.caption[period]}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {tier.includedFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <span className="size-2 shrink-0 bg-accent-orange" />
              {feature}
            </li>
          ))}
          {tier.excludedFeatures.map((feature) => (
            <li key={feature} className="pl-4 text-sm text-muted-foreground">
              {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={cn(
            "mt-8 flex w-full items-center gap-3 rounded-xl border px-2 py-2 text-sm font-medium transition-colors",
            isPhoto
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-border/60 bg-white/40 text-foreground hover:bg-white"
          )}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white">
            <DoubleChevronIcon className="size-3.5 text-accent-pink" />
          </span>
          {tier.cta}
        </button>
      </div>
    </div>
  );
}
