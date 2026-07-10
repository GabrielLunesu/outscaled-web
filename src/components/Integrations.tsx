import {
  MessageSquare,
  FileText,
  GitBranch,
  BookOpen,
  Boxes,
  Zap,
  Layers,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationTile {
  Icon: LucideIcon;
  color: string;
}

const ROW_ONE: IntegrationTile[] = [
  { Icon: MessageSquare, color: "text-blue-500" },
  { Icon: FileText, color: "text-purple-500" },
  { Icon: GitBranch, color: "text-neutral-800" },
  { Icon: BookOpen, color: "text-blue-600" },
  { Icon: Boxes, color: "text-indigo-500" },
  { Icon: Zap, color: "text-orange-500" },
  { Icon: Layers, color: "text-purple-600" },
  { Icon: CalendarDays, color: "text-green-500" },
];

const ROW_TWO: IntegrationTile[] = [
  { Icon: BookOpen, color: "text-blue-600" },
  { Icon: Layers, color: "text-neutral-800" },
  { Icon: MessageSquare, color: "text-orange-500" },
  { Icon: Zap, color: "text-red-500" },
  { Icon: FileText, color: "text-purple-500" },
  { Icon: CalendarDays, color: "text-blue-500" },
  { Icon: Boxes, color: "text-indigo-600" },
  { Icon: GitBranch, color: "text-neutral-700" },
];

function MarqueeRow({
  tiles,
  className,
}: {
  tiles: IntegrationTile[];
  className?: string;
}) {
  const looped = [...tiles, ...tiles];
  return (
    <div className={cn("flex w-max shrink-0 gap-4", className)}>
      {looped.map(({ Icon, color }, i) => (
        <div
          key={i}
          className="flex size-[76px] shrink-0 items-center justify-center rounded-2xl bg-muted"
        >
          <Icon className={cn("size-9", color)} strokeWidth={1.75} />
        </div>
      ))}
    </div>
  );
}

export function Integrations() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-20">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-sm font-medium text-muted-foreground">
            Integrations
          </span>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Connect your workflow. Parley meets you there.
          </h2>
          <p className="max-w-[560px] text-base text-muted-foreground">
            Slack, Linear, Notion, GitHub and 60+ more. Parley triggers
            actions, fetches context, and keeps things in sync — right where
            your team already works.
          </p>
        </div>

        <div
          className="relative h-[227px] w-full max-w-[800px] overflow-hidden rounded-xl"
          style={{
            maskImage:
              "radial-gradient(50% 122%, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 80.6%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "radial-gradient(50% 122%, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 80.6%, rgba(0,0,0,0) 100%)",
          }}
        >
          <style>{`
            @keyframes integrations-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <MarqueeRow
              tiles={ROW_ONE}
              className="animate-[integrations-marquee_28s_linear_infinite]"
            />
            <MarqueeRow
              tiles={ROW_TWO}
              className="animate-[integrations-marquee_24s_linear_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
