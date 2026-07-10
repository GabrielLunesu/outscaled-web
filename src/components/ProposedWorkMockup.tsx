import { Bell, Check, Gauge, Pencil, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CHECKLIST_ITEMS = [
  "Rewrite 24 product titles",
  "Update missing descriptions",
  "Flag risky changes for approval",
];

const AUTONOMY_STOPS = [
  "Review every step",
  "Approve batches",
  "Auto-run safe tasks",
  "Run within limits",
];

const ACTIVE_STOP_INDEX = 1;

const LIMIT_TAGS = [
  { icon: Gauge, label: "Max 25 changes/day" },
  { icon: ShieldCheck, label: "Never publish without approval" },
  { icon: Bell, label: "Alert on failed steps" },
];

export function ProposedWorkMockup() {
  return (
    <div className="flex w-full max-w-[600px] flex-col gap-5">
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-foreground">
          Proposed work
        </h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {CHECKLIST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-2.5">
          <Button size="sm">
            <Check />
            Approve
          </Button>
          <Button variant="outline" size="sm">
            <Pencil />
            Edit limits
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-foreground">
          Autonomy level
        </h3>
        <div className="mt-6 flex items-center">
          {AUTONOMY_STOPS.map((stop, index) => (
            <div key={stop} className="contents">
              {index > 0 && (
                <div
                  className={cn(
                    "h-0.5 flex-1",
                    index <= ACTIVE_STOP_INDEX ? "bg-blue-600" : "bg-border"
                  )}
                />
              )}
              <div className="flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                <span
                  className={cn(
                    "shrink-0 rounded-full",
                    index === ACTIVE_STOP_INDEX
                      ? "size-4 bg-blue-600 ring-4 ring-blue-600/15"
                      : "size-2.5 border-2 border-border bg-background"
                  )}
                />
                <span
                  className={cn(
                    "text-xs leading-tight",
                    index === ACTIVE_STOP_INDEX
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {stop}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h4 className="mt-6 text-sm font-semibold text-foreground">Limits</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {LIMIT_TAGS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Icon className="size-3.5" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
