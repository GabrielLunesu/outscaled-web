import Image from "next/image";

interface FooterLinkColumn {
  title: string;
  links: string[];
}

const linkColumns: FooterLinkColumn[] = [
  {
    title: "Workflows",
    links: ["Lead enrichment", "Inbound triage", "Ticket triage"],
  },
  { title: "Company", links: ["Blog", "Contact"] },
  { title: "Legal", links: ["404", "Waitlist"] },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 bg-white px-5 pt-10">
      <div className="flex w-full max-w-[1240px] flex-col gap-5">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/endless-expectations-612180.framer.app/h7fOCKCsvgnj6pswnDzTWfVkQ.png"
              alt="Parley"
              width={159}
              height={96}
              className="h-8 w-auto"
            />
            <p className="max-w-[260px] text-sm leading-relaxed text-muted-foreground">
              Your AI partner for email, calendar, research, and everything
              in between. Built for people who want to do their best work
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
            {linkColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h3 className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <span
                    aria-hidden
                    className="size-1 rounded-full bg-foreground"
                  />
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-left font-sans text-[clamp(4.5rem,19vw,280px)] leading-none font-bold tracking-tight text-cream"
        >
          Parley
        </p>
      </div>
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© 2026 Parley. AI Agent template · Designed by Apollo Studio</p>
        <a href="#" className="hover:text-foreground">
          Terms &amp; Conditions
        </a>
      </div>
    </footer>
  );
}
