import { ChevronRight, Flame, Triangle, Mail, Hash } from "lucide-react";

const STEPS = [
  {
    label: "Log call notes for Acme Corp",
    app: "Hub Spot",
    icon: Flame,
    iconClassName: "text-orange-500",
  },
  {
    label: 'Move deal to "Proposal sent"',
    app: "Hub Spot",
    icon: Flame,
    iconClassName: "text-orange-500",
  },
  {
    label: "Generate contract from template",
    app: "Google Drive",
    icon: Triangle,
    iconClassName: "text-blue-500",
  },
  {
    label: "Send contract to maya@acmecorp.com",
    app: "Gmail",
    icon: Mail,
    iconClassName: "text-red-500",
  },
  {
    label: "Post deal update in #sales",
    app: "Slack",
    icon: Hash,
    iconClassName: "text-fuchsia-500",
  },
] as const;

export function TasksPanelMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-white p-6 text-sm">
      <div className="flex items-center justify-between">
        <div className="text-[13px]">
          <span className="text-neutral-400">Tasks/</span>{" "}
          <span className="font-semibold text-neutral-900">New task</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          draft
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-3">
        <ChevronRight className="h-4 w-4 shrink-0 text-orange-500" />
        <p className="text-[13px] text-neutral-800">
          close out the Acme deal — log the call, update the stage, send the
          contract
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-orange-500 align-middle" />
        </p>
      </div>

      <div className="flex items-center justify-between text-[13px]">
        <p>
          <span className="font-semibold text-neutral-900">Intent</span>{" "}
          <span className="text-neutral-400">
            · deal-close workflow · 5 steps
          </span>
        </p>
        <span className="font-medium text-emerald-600">95% match</span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="flex items-center justify-between gap-3 rounded-lg bg-neutral-100 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white text-xs font-medium text-neutral-500">
                  {index + 1}
                </span>
                <span className="text-[13px] text-neutral-800">
                  {step.label}
                </span>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs text-neutral-600">
                <Icon className={`h-3.5 w-3.5 ${step.iconClassName}`} />
                {step.app}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
