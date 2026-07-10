"use client";

import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement>;

function GoogleCalendarLogo({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...props}>
      <rect x={4} y={4} width={40} height={40} rx={8} fill="white" />
      <rect x={4} y={4} width={40} height={12} rx={4} fill="#4285F4" />
      <rect x={4} y={12} width={40} height={4} fill="#4285F4" />
      <rect
        x={4.5}
        y={4.5}
        width={39}
        height={39}
        rx={7.5}
        fill="none"
        stroke="#E4E2DC"
      />
      <text
        x={24}
        y={33}
        textAnchor="middle"
        fontSize={18}
        fontWeight={600}
        fontFamily="Helvetica Neue, Arial, sans-serif"
        fill="#3C4043"
      >
        15
      </text>
    </svg>
  );
}

function GmailLogo({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 36" className={className} {...props}>
      <rect x={1} y={1} width={46} height={34} rx={4} fill="white" stroke="#E4E2DC" />
      <path d="M6 8v20a2 2 0 002 2h4V13.5L24 22l12-8.5V30h4a2 2 0 002-2V8" fill="none" />
      <path d="M6 8h4l14 10 14-10h4v3.5L24 22 6 11.5V8z" fill="#EA4335" />
      <path d="M6 8v20a2 2 0 002 2h4V13.5L6 8z" fill="#4285F4" />
      <path d="M42 8v20a2 2 0 01-2 2h-4V13.5L42 8z" fill="#34A853" />
      <path d="M12 30V13.5L24 22l12-8.5V30h-8V17.5l-4 2.8-4-2.8V30h-8z" fill="#FBBC04" />
      <path d="M12 30V13.5L24 22l12-8.5" fill="none" />
    </svg>
  );
}

function SlackLogo({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...props}>
      <rect x={2} y={2} width={44} height={44} rx={8} fill="white" stroke="#E4E2DC" />
      <g>
        <path
          d="M18 27a3 3 0 11-3-3h3v3z"
          fill="#E01E5A"
        />
        <path
          d="M19.5 27a3 3 0 116 0v7.5a3 3 0 11-6 0V27z"
          fill="#E01E5A"
        />
        <path
          d="M21 18a3 3 0 113-3v3h-3z"
          fill="#36C5F0"
        />
        <path
          d="M21 19.5a3 3 0 010 6h-7.5a3 3 0 010-6H21z"
          fill="#36C5F0"
        />
        <path
          d="M30 21a3 3 0 113 3h-3v-3z"
          fill="#2EB67D"
        />
        <path
          d="M28.5 21a3 3 0 01-6 0v-7.5a3 3 0 016 0V21z"
          fill="#2EB67D"
        />
        <path
          d="M27 30a3 3 0 11-3 3v-3h3z"
          fill="#ECB22E"
        />
        <path
          d="M27 28.5a3 3 0 010-6h7.5a3 3 0 010 6H27z"
          fill="#ECB22E"
        />
      </g>
    </svg>
  );
}

const FEATURED_CATEGORIES = [
  {
    name: "Automation",
    count: "7 apps",
    dots: [
      { top: "14%", left: "78%", size: 8, tone: "orange" },
      { top: "10%", left: "60%", size: 6, tone: "peach" },
      { top: "34%", left: "88%", size: 7, tone: "orange" },
      { top: "48%", left: "68%", size: 5, tone: "peach" },
      { top: "26%", left: "50%", size: 6, tone: "peach" },
      { top: "58%", left: "84%", size: 8, tone: "orange" },
    ],
  },
  {
    name: "Analytics",
    count: "5 apps",
    dots: [
      { top: "12%", left: "56%", size: 7, tone: "orange" },
      { top: "22%", left: "82%", size: 6, tone: "peach" },
      { top: "40%", left: "68%", size: 8, tone: "peach" },
      { top: "52%", left: "88%", size: 5, tone: "orange" },
      { top: "62%", left: "58%", size: 6, tone: "peach" },
    ],
  },
  {
    name: "Calendar",
    count: "3 apps",
    dots: [
      { top: "16%", left: "62%", size: 6, tone: "orange" },
      { top: "30%", left: "84%", size: 8, tone: "peach" },
      { top: "46%", left: "56%", size: 5, tone: "peach" },
      { top: "58%", left: "76%", size: 7, tone: "orange" },
    ],
  },
  {
    name: "Communication",
    count: "6 apps",
    dots: [
      { top: "10%", left: "84%", size: 6, tone: "orange" },
      { top: "24%", left: "60%", size: 8, tone: "peach" },
      { top: "38%", left: "78%", size: 5, tone: "peach" },
      { top: "50%", left: "56%", size: 7, tone: "orange" },
      { top: "62%", left: "86%", size: 6, tone: "peach" },
    ],
  },
] as const;

const POPULAR_APPS = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    description:
      "Google Calendar is a time-management and scheduling service that helps users organize events, set reminders, and share calendars.",
    Logo: GoogleCalendarLogo,
  },
  {
    id: "gmail",
    name: "Gmail",
    description:
      "Gmail is an email service by Google that allows users to send, receive, and organize emails securely across devices.",
    Logo: GmailLogo,
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "Slack is a business communication tool that enables teams to collaborate through messaging, file sharing, and organized channels in real time.",
    Logo: SlackLogo,
  },
] as const;

const AUTOPLAY_APP_ID = "gmail";
const AUTOPLAY_APP_NAME = "Gmail";

type ConnectPhase = "idle" | "connecting" | "connected";

export function IntegrationsPickerMockup() {
  const [phase, setPhase] = useState<ConnectPhase>("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      timers.push(
        setTimeout(() => setPhase("connecting"), 3000),
        setTimeout(() => {
          setPhase("connected");
          setShowToast(true);
        }, 4800),
        setTimeout(() => setShowToast(false), 8300),
        setTimeout(() => {
          setPhase("idle");
          runCycle();
        }, 11500)
      );
    };

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  const connectedCount = 3 + (phase === "connected" ? 1 : 0);

  return (
    <div className="relative w-full bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-xl font-medium text-foreground">
          Integrations
        </h3>
        <div className="relative w-56 shrink-0">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            readOnly
            placeholder="Search integrations..."
            className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>

        {showToast && (
          <div className="absolute right-0 top-10 z-10 flex w-64 items-start gap-2.5 rounded-xl border border-border bg-white p-3 shadow-lg">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500">
              <Check className="size-3 text-white" strokeWidth={3} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {AUTOPLAY_APP_NAME} connected
              </p>
              <p className="text-xs text-muted-foreground">
                Ready to use in tasks
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setShowToast(false)}
              className="text-muted-foreground/60 hover:text-muted-foreground"
            >
              <X className="size-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground">
          FEATURED
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {FEATURED_CATEGORIES.map((category) => (
          <div
            key={category.name}
            className="relative h-32 overflow-hidden rounded-xl bg-cream p-4"
          >
            {category.dots.map((dot, i) => (
              <span
                key={i}
                className={cn(
                  "absolute rounded-[2px]",
                  dot.tone === "orange" ? "bg-accent-orange" : "bg-accent-orange/35"
                )}
                style={{
                  top: dot.top,
                  left: dot.left,
                  width: dot.size,
                  height: dot.size,
                }}
              />
            ))}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold text-foreground">
                {category.name}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {category.count}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous"
          className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground">
          MOST POPULAR
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {POPULAR_APPS.map((app) => {
          const isAutoplayCard = app.id === AUTOPLAY_APP_ID;
          const cardPhase: ConnectPhase = isAutoplayCard ? phase : "idle";

          return (
            <div
              key={app.id}
              className="flex flex-col justify-between rounded-xl bg-cream p-4"
            >
              <div>
                <app.Logo className="size-10" />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  {app.name}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {app.description}
                </p>
              </div>
              <button
                type="button"
                disabled={cardPhase === "connecting"}
                className={cn(
                  "mt-4 w-full rounded-full border py-2 text-sm font-medium transition-colors",
                  cardPhase === "idle" &&
                    "border-border bg-white text-foreground hover:bg-secondary",
                  cardPhase === "connecting" &&
                    "border-accent-orange bg-accent-orange/10 text-accent-orange",
                  cardPhase === "connected" &&
                    "border-green-500/40 bg-green-50 text-green-700"
                )}
              >
                {cardPhase === "idle" && "Connect"}
                {cardPhase === "connecting" && "Connecting…"}
                {cardPhase === "connected" && (
                  <span className="flex items-center justify-center gap-1.5">
                    <Check className="size-3.5" strokeWidth={3} />
                    Connected
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground">
          CONNECTED - {connectedCount}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
