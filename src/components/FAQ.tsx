"use client";

import { useState } from "react";
import { CloseIcon, DoubleChevronIcon, PlusIcon } from "@/components/icons";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is Parley different from ChatGPT and Copilot?",
    answer:
      "Parley isn't a chatbot — it's an action-taking agent. While tools like ChatGPT generate text responses, Parley connects to your real tools, executes multi-step tasks, remembers your context across sessions, and proactively manages your work. It's the difference between answering a question and doing the job.",
  },
  {
    question: "Is my data safe with Parley?",
    answer:
      "Yes — and it's not a checkbox answer. Your data is encrypted in transit and at rest, never used to train shared models, and stays inside your workspace. Parley is SOC 2 Type II and GDPR-compliant, with EU data residency available on request. You own every record we touch, and you can delete it from us in one click.",
  },
  {
    question: "What happens if Parley makes a mistake?",
    answer:
      "Every action Parley takes is logged with field-level reasoning, so mistakes are traceable, not mysterious. High-impact actions stay in human-approval mode by default — Parley drafts, you confirm. If something does slip through, one-click undo reverses the change in your connected tools, and Parley learns from the correction so the same mistake doesn't ship twice.",
  },
  {
    question: "How long does setup take?",
    answer:
      "About 8 minutes for your first workflow. Connect one tool (HubSpot, Slack, or Zendesk to start), pick a template, run it in test mode against a real record. No implementation calls, no four-week pilot. The teams shipping fastest have a workflow running before lunch on day one — and a second one before they head home.",
  },
  {
    question: "Can I build custom workflows without code?",
    answer:
      'Yes — describe what you do in plain English and Parley drafts the workflow for you to review. Edit any step the same way: "skip leads from competitors," "only ping me about deals over $50k." Templates are forkable on a Friday afternoon. Engineers stay in their queue; RevOps, Support, and Ops own their workflows directly.',
  },
];

const DECORATIVE_SQUARES = [
  { left: 0, top: 88, size: 14, className: "bg-accent-orange" },
  { left: 16, top: 108, size: 10, className: "bg-accent-orange/70" },
  { left: 38, top: 58, size: 14, className: "bg-accent-orange/40" },
  { left: 64, top: 44, size: 12, className: "bg-accent-orange" },
  { left: 84, top: 100, size: 10, className: "bg-accent-orange/30" },
  { left: 100, top: 18, size: 10, className: "bg-accent-orange/50" },
  { left: 120, top: 74, size: 14, className: "bg-accent-orange/40" },
  { left: 140, top: 52, size: 10, className: "bg-accent-orange/30" },
  { left: 165, top: 0, size: 10, className: "bg-accent-orange/50" },
  { left: 196, top: 28, size: 10, className: "bg-accent-orange/60" },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-20">
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-start gap-10 md:flex-row">
        <div className="relative flex w-full flex-col gap-5 md:w-[600px]">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              FAQ
            </span>
            <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl">
              Questions answered.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground">
              Still curious?
            </span>
            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <DoubleChevronIcon className="text-accent-pink" />
              Chat with us
            </button>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 hidden h-36 w-56 md:block">
            {DECORATIVE_SQUARES.map((square, index) => (
              <span
                key={index}
                className={`absolute rounded-sm ${square.className}`}
                style={{
                  left: square.left,
                  top: square.top,
                  width: square.size,
                  height: square.size,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 md:w-[600px]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="w-full rounded-2xl bg-cream"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-accent-orange">
                    {isOpen ? <CloseIcon /> : <PlusIcon />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
