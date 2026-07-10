import { ArrowRightIcon } from "@/components/icons";

function SearchGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-3.5 text-muted-foreground">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={1.5} />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function DiamondGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-accent-orange">
      <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function PersonAccountCard({
  label,
  labelClassName,
  name,
  tag,
  meta,
  highlighted,
}: {
  label: string;
  labelClassName?: string;
  name: string;
  tag: string;
  meta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        highlighted
          ? "rounded-xl border border-accent-orange/40 bg-accent-orange/5 p-4"
          : "rounded-xl border border-border bg-muted p-4"
      }
    >
      <span className={labelClassName ?? "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"}>
        {label}
      </span>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-bold text-foreground">{name}</span>
        <span className="rounded-full border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
          {tag}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
    </div>
  );
}

function PreferenceCard({
  label,
  value,
  meta,
}: {
  label: string;
  value: string;
  meta?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-muted p-4">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
      {meta ? <p className="mt-1 text-[11px] text-muted-foreground">{meta}</p> : null}
    </div>
  );
}

export function ProfilesPanelMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-5 bg-background p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h3 className="text-lg font-bold text-foreground">Profiles</h3>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5">
          <SearchGlyph />
          <span className="text-xs text-muted-foreground">Search 142 facts...</span>
        </div>
      </div>

      <div className="relative flex items-center justify-between overflow-hidden rounded-2xl border border-accent-orange/40 bg-cream/40 p-4">
        <div className="flex items-center gap-3">
          <DiamondGlyph />
          <div>
            <p className="text-sm font-bold text-foreground">Brief</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Tell it your role, priorities, and working style — no forms, just a quick chat
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-accent-orange px-3.5 py-1.5 text-xs font-medium text-accent-orange">
          Start brief
          <ArrowRightIcon className="size-3.5" />
        </div>
        <span className="pointer-events-none absolute right-24 top-3 size-2 rotate-12 rounded-[2px] bg-accent-orange/40" />
        <span className="pointer-events-none absolute right-16 top-1/2 size-1.5 -translate-y-1/2 rotate-45 rounded-[2px] border border-accent-orange/50" />
        <span className="pointer-events-none absolute bottom-3 right-32 size-1.5 rotate-45 rounded-[2px] bg-accent-orange/30" />
      </div>

      <div className="flex flex-col gap-3">
        <SectionLabel>PEOPLE &amp; ACCOUNTS</SectionLabel>
        <div className="grid grid-cols-2 gap-4">
          <PersonAccountCard
            label="VIP ACCOUNT"
            labelClassName="text-[11px] font-semibold uppercase tracking-wide text-accent-orange"
            name="Acme Corp"
            tag="ARR"
            meta="added 14d ago"
            highlighted
          />
          <PersonAccountCard label="ON-CALL" name="Maya Chen" tag="Wed" meta="updated 4m ago" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionLabel>PREFERENCES</SectionLabel>
        <div className="grid grid-cols-3 gap-4">
          <PreferenceCard label="VOICE" value="Friendly, terse" />
          <PreferenceCard label="WORKING HOURS" value="Mon–Thu, 9–18 PT" />
          <PreferenceCard
            label="LAST CONTEXT"
            value="Q2 churn review · 3 open follow-ups, due Friday"
            meta="updated 4m ago · auto-captured"
          />
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-2">
        <span className="size-1.5 rounded-full bg-green-500" />
        <span className="text-xs text-muted-foreground">
          Synced across 3 devices · Maya can edit any fact
        </span>
      </div>
    </div>
  );
}
