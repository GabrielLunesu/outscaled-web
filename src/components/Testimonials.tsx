"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/types/content";

const testimonials: Testimonial[] = [
  {
    quote:
      "Parley does what every other AI tool promised but never delivered — it actually takes things off my plate. My inbox went from 200 unread to zero, daily.",
    name: "James R.",
    title: "CEO, CloudPlex",
    avatar:
      "/images/endless-expectations-612180.framer.app/Savle5DZHOWqtAcOxHiJI3UY.png",
  },
  {
    quote:
      "I was skeptical about 'AI partners' — but Parley learned my communication style in a week and now drafts emails I barely need to edit. Genuinely impressive.",
    name: "Sophie K.",
    title: "VP Marketing, Tytotone",
    avatar:
      "/images/endless-expectations-612180.framer.app/XFKsIZRI4mxNoJj3C4tv0S9qk.png",
  },
  {
    quote:
      "The CRM follow-up workflow alone saved our sales team 12 hours a week. And the meeting notes are better than anything our team was writing manually.",
    name: "Daniel M.",
    title: "Head of Sales, Bloopglow",
    avatar:
      "/images/endless-expectations-612180.framer.app/FcQKk42EHfLdnZvoj6ItkuQFQ.png",
  },
  {
    quote:
      "Parley is the first AI tool that actually reduces my workload. I stay on top of emails, clients, and meetings without the usual chaos",
    name: "Paul M.",
    title: "Operations Director, ZingZap",
    avatar:
      "/images/endless-expectations-612180.framer.app/KnorwvqN1HtowWhMecWMyaG6dws.png",
  },
  {
    quote:
      "Parley feels like the assistant I always needed. It keeps conversations organized, handles follow-ups, and saves me hours every week.",
    name: "Emily C.",
    title: "Head of Client Success, Junotwig",
    avatar:
      "/images/endless-expectations-612180.framer.app/8z52bh95AkYVEkLdscJpmO2iPbk.png",
  },
];

const avatarBackground =
  "/images/endless-expectations-612180.framer.app/CpfLkhgt7FpnO01s75GIa7DPZo8.jpg";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col justify-between gap-6 md:w-[300px]">
      <p className="text-[15px] leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${avatarBackground})` }}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {testimonial.name}
          </span>
          <span className="text-sm text-muted-foreground">
            {testimonial.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-20"
    >
      <div className="flex w-full max-w-[1240px] flex-col gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-sm font-medium text-muted-foreground">
            What people say
          </span>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Teams that work with Parley, not around it
          </h2>
          <p className="max-w-[560px] text-base text-muted-foreground">
            From solo founders to enterprise teams — here&apos;s what our
            users have to say after making Parley their daily partner.
          </p>
        </div>

        <div
          className={`flex gap-2.5 overflow-x-auto rounded-[10px] transition-opacity duration-700 ease-out md:overflow-clip ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
