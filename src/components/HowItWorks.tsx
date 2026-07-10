"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Clock,
  FileText,
  Inbox,
  LayoutGrid,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { IntegrationsPickerMockup } from "./IntegrationsPickerMockup";
import { ProfilesPanelMockup } from "./ProfilesPanelMockup";
import { TasksPanelMockup } from "./TasksPanelMockup";

type SidebarItemKey = "Integrations" | "Profiles" | "Tasks";

const TABS: readonly { label: string; sidebarItem: SidebarItemKey }[] = [
  { label: "Connect your tools", sidebarItem: "Integrations" },
  { label: "Brief & customize", sidebarItem: "Profiles" },
  { label: "Delegate everywhere", sidebarItem: "Tasks" },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const activeSidebarItem = TABS[activeTab].sidebarItem;

  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-20">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-10">
        <div className="flex max-w-[1240px] flex-col items-center gap-5 text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            How it works
          </span>
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            From ask to done. Without the back-and-forth.
          </h2>
        </div>

        <div className="relative isolate w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/endless-expectations-612180.framer.app/g2Q0UEGYPma6FK2cD4vkNBVTXao.png"
            alt=""
            fill
            sizes="1240px"
            className="-z-10 object-cover"
          />

          <div className="flex flex-col items-center gap-8 px-6 py-10 sm:px-10 sm:py-14">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i as 0 | 1 | 2)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    i === activeTab
                      ? "bg-white text-foreground shadow-sm"
                      : "bg-white/30 text-foreground/60 hover:bg-white/50"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full overflow-x-auto">
              <div className="mx-auto flex min-w-[720px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="flex">
                  <Sidebar activeItem={activeSidebarItem} />
                  <div className="min-w-0 flex-1 bg-white">
                    {activeTab === 0 && <IntegrationsPickerMockup />}
                    {activeTab === 1 && <ProfilesPanelMockup />}
                    {activeTab === 2 && <TasksPanelMockup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sidebar({ activeItem }: { activeItem: SidebarItemKey }) {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col gap-6 border-r border-border bg-cream px-4 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm font-semibold text-background">
            P
          </span>
          <span className="text-sm font-semibold text-foreground">
            Ravenpath
          </span>
        </div>
        <ChevronDown className="size-4 text-muted-foreground" />
      </div>

      <nav className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="px-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
            Workspace
          </span>
          <SidebarItem icon={Plus} label="New task" active={false} />
          <SidebarItem icon={Inbox} label="Inbox" count={3} active={false} />
          <SidebarItem icon={Clock} label="Tasks" count={12} active={activeItem === "Tasks"} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="px-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
            Library
          </span>
          <SidebarItem
            icon={LayoutGrid}
            label="Profiles"
            active={activeItem === "Profiles"}
          />
          <SidebarItem
            icon={FileText}
            label="Integrations"
            active={activeItem === "Integrations"}
          />
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  count,
  active,
}: {
  icon: LucideIcon;
  label: string;
  count?: number;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border-l-2 border-transparent px-2 py-1.5 text-sm",
        active
          ? "border-accent-orange bg-white/70 font-semibold text-accent-orange"
          : "text-muted-foreground"
      )}
    >
      <Icon className="size-4" />
      <span className="flex-1">{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            "text-xs",
            active ? "text-accent-orange" : "text-muted-foreground/70"
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
}
