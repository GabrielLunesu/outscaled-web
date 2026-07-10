"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CloseIcon, DoubleChevronIcon, MenuIcon } from "@/components/icons";

const WORKFLOW_LINKS = [
  { label: "Lead enrichment", href: "#" },
  { label: "Inbound triage", href: "#" },
  { label: "Ticket triage", href: "#" },
] as const;

const NAV_LINKS = [
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
] as const;

const linkClassName =
  "relative text-sm font-medium leading-[16.8px] text-[rgb(48,48,48)]";

const bulletAfterClassName =
  "after:absolute after:left-[calc(100%+10px)] after:top-1/2 after:size-1 after:-translate-y-1/2 after:bg-foreground after:content-['']";

const ctaClassName =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium leading-[16.8px] text-[rgb(48,48,48)]";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-[1280px]">
      <nav className="flex h-[72px] items-center justify-center bg-white px-5 pt-5 backdrop-blur-[60px]">
        <div className="flex h-[52px] w-full max-w-[1240px] items-center justify-between">
          <Link
            href="/"
            className="flex size-[53px] items-center justify-center"
            aria-label="Parley home"
          >
            <Image
              src="/images/endless-expectations-612180.framer.app/h7fOCKCsvgnj6pswnDzTWfVkQ.png"
              alt="Parley AI agent Framer template logo"
              width={53}
              height={32}
              preload
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <div className="group relative">
              <Link href="#" className={cn(linkClassName, bulletAfterClassName)}>
                Workflows
              </Link>
              <div className="invisible absolute left-0 top-full z-10 mt-3 min-w-[190px] rounded-lg border border-border bg-white py-2 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                {WORKFLOW_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-[rgb(48,48,48)] hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="#" className={cn(linkClassName, bulletAfterClassName)}>
              Pricing
            </Link>
            <Link href="#" className={cn(linkClassName, bulletAfterClassName)}>
              Contact
            </Link>
            <Link href="#" className={linkClassName}>
              Blog
            </Link>
          </div>

          <Link href="#" className={cn(ctaClassName, "hidden md:inline-flex")}>
            <DoubleChevronIcon className="size-3.5 text-accent-pink" />
            Hire Parley
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex items-center justify-center md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="flex flex-col gap-6 bg-white px-5 pb-8 pt-2 md:hidden">
          <Link
            href="#"
            className="text-sm font-medium leading-[16.8px] text-[rgb(48,48,48)]"
            onClick={() => setMobileOpen(false)}
          >
            Workflows
          </Link>
          <div className="flex flex-col gap-4 pl-1">
            {WORKFLOW_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium leading-[16.8px] text-[rgb(48,48,48)]"
                onClick={() => setMobileOpen(false)}
              >
                <span className="size-1.5 bg-accent-orange" />
                {link.label}
              </Link>
            ))}
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium leading-[16.8px] text-[rgb(48,48,48)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className={cn(ctaClassName, "w-fit")}
            onClick={() => setMobileOpen(false)}
          >
            <DoubleChevronIcon className="size-3.5 text-accent-pink" />
            Hire Parley
          </Link>
        </div>
      )}
    </header>
  );
}
