import Image from "next/image";
import {
  CircleCheck,
  FileText,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tags = [
  { label: "Tone of voice", icon: MessageCircle },
  { label: "Product rules", icon: FileText },
  { label: "Brand preferences", icon: Star },
  { label: "Approved examples", icon: CircleCheck },
];

function TagChip({ label, icon: Icon }: { label: string; icon: typeof MessageCircle }) {
  return (
    <div className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-border bg-secondary px-2 py-1.5 text-[10px] font-medium text-foreground">
      <Icon className="size-3 shrink-0 text-muted-foreground" />
      <span>{label}</span>
    </div>
  );
}

function AgentCard({
  name,
  status,
  avatarSrc,
  className,
}: {
  name: string;
  status: string;
  avatarSrc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex w-[190px] items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-2.5 shadow-sm",
        className,
      )}
    >
      <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image src={avatarSrc} alt={name} fill sizes="36px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-foreground">{name}</p>
        <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-green-500" />
          <span className="truncate">{status}</span>
        </p>
      </div>
    </div>
  );
}

function CroppedNodeChip({
  label,
  avatarSrc,
  className,
}: {
  label: string;
  avatarSrc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex h-10 w-[150px] items-center gap-2 rounded-xl border border-border bg-background px-2.5 shadow-sm",
        className,
      )}
    >
      <div className="relative size-7 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image src={avatarSrc} alt="" fill sizes="28px" className="object-cover" />
      </div>
      <p className="flex items-center gap-1 truncate text-[11px] text-muted-foreground">
        <span className="size-1.5 shrink-0 rounded-full bg-green-500" />
        {label}
      </p>
    </div>
  );
}

export function BrandMemoryMockup() {
  return (
    <div className="relative mx-auto h-[460px] w-[600px] max-w-full overflow-hidden">
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 600 460"
        fill="none"
        aria-hidden="true"
      >
        <path d="M115 20 L175 130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-border" />
        <path d="M485 20 L425 130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-border" />
        <path d="M125 330 L180 310" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-border" />
        <path d="M475 330 L420 310" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-border" />
        <path d="M210 157 L140 182" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-border" />
        <circle cx="115" cy="20" r="3" className="fill-border" />
        <circle cx="485" cy="20" r="3" className="fill-border" />
        <circle cx="125" cy="330" r="3" className="fill-border" />
        <circle cx="475" cy="330" r="3" className="fill-border" />
        <circle cx="175" cy="130" r="3" className="fill-border" />
        <circle cx="425" cy="130" r="3" className="fill-border" />
        <circle cx="180" cy="310" r="3" className="fill-border" />
        <circle cx="420" cy="310" r="3" className="fill-border" />
      </svg>

      <CroppedNodeChip
        label="Learned tone"
        avatarSrc="/images/endless-expectations-612180.framer.app/FcQKk42EHfLdnZvoj6ItkuQFQ.png"
        className="left-10 top-0 -translate-y-1/2"
      />
      <CroppedNodeChip
        label="Uses examples"
        avatarSrc="/images/endless-expectations-612180.framer.app/KnorwvqN1HtowWhMecWMyaG6dws.png"
        className="right-10 top-0 -translate-y-1/2"
      />

      <div className="absolute left-5 top-[140px] z-20 flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 shadow-sm">
        <CircleCheck className="size-3.5 shrink-0 text-green-600" />
        <span className="text-[11px] font-medium text-foreground">New preference saved</span>
      </div>

      <div className="absolute left-1/2 top-[130px] z-10 w-[320px] -translate-x-1/2 rounded-2xl border border-border bg-background p-5 shadow-md">
        <h3 className="text-center text-base font-semibold text-foreground">Brand memory</h3>
        <p className="mt-0.5 text-center text-xs text-muted-foreground">Shared across agents</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {tags.map((tag) => (
            <TagChip key={tag.label} label={tag.label} icon={tag.icon} />
          ))}
        </div>
      </div>

      <AgentCard
        name="Support Agent"
        status="Knows policies"
        avatarSrc="/images/endless-expectations-612180.framer.app/FcQKk42EHfLdnZvoj6ItkuQFQ.png"
        className="left-[30px] top-[330px]"
      />
      <AgentCard
        name="Email Agent"
        status="Matches voice"
        avatarSrc="/images/endless-expectations-612180.framer.app/KnorwvqN1HtowWhMecWMyaG6dws.png"
        className="right-[30px] top-[330px]"
      />

      <div className="absolute left-1/2 top-[420px] z-10 flex w-max -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-secondary px-3.5 py-2">
        <Sparkles className="size-3.5 shrink-0 text-accent-pink" />
        <span className="text-xs font-medium text-foreground">
          Train one agent. The whole team gets smarter.
        </span>
      </div>
    </div>
  );
}
