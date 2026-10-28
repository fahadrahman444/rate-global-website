"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Rate Global structure project pricing and estimates?",
    answer:
      "We operate primarily on transparent, fixed-scope sprint milestones. After an initial discovery session, we provide a detailed technical roadmap with milestone deliverables and set pricing. For ongoing product evolution, we offer dedicated monthly engineering pods with guaranteed allocation.",
  },
  {
    question: "How quickly can a new development sprint begin?",
    answer:
      "Most projects kick off within 5 to 7 business days following requirement sign-off and environment setup. We immediately establish shared communication channels, code repositories, and weekly milestone schedules.",
  },
  {
    question: "Who owns the code and intellectual property (IP)?",
    answer:
      "You do. 100% of the source code, design systems, architectural documentation, and custom assets belong entirely to your company upon milestone completion. We provide full repository transfer with zero vendor lock-in.",
  },
  {
    question: "What core technologies and frameworks do you build with?",
    answer:
      "Our approved core stack is centered on Next.js (App Router), React, strict TypeScript, Tailwind CSS, and Framer Motion for frontends, coupled with Node.js/PostgreSQL/Supabase/Cloudflare on the backend. This delivers maximum speed, type safety, and scalability.",
  },
  {
    question: "Do you offer post-launch maintenance, monitoring, and SLAs?",
    answer:
      "Yes. Every production deployment includes a post-launch warranty period. Beyond that, we provide monthly engineering retainers covering proactive security updates, performance monitoring, dependency patches, and new feature sprints with a < 24-hour response SLA.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "We believe in continuous visibility: direct Slack or Discord channels with our senior engineers, weekly live demo staging links, and transparent milestone tracking. No middlemen or uncommunicative silos.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 lg:py-16 px-6 lg:px-10 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3.5 py-1 text-[12px] font-medium text-brand-blue mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-brand-charcoal tracking-tight">
            Everything you need to know about working with us.
          </h2>
          <p className="mt-3 text-[15px] text-brand-slate">
            Clear answers to common questions about timelines, pricing, code ownership, and collaboration.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/80 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-semibold text-brand-charcoal pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-brand-blue" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[14.5px] text-brand-slate leading-relaxed border-t border-slate-50 pt-3">
                    {faq.answer}
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
