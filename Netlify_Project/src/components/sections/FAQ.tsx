"use client";

import React, { useState } from "react";
import { Icon } from "../ui/icons";
import { Section, Eyebrow } from "../ui/core";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <Section id="faq" label="08 FAQ" className="border-t border-[var(--line-2)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">
        <div>
          <Eyebrow>FAQ · Häufige Fragen</Eyebrow>
          <h2 className="text-[48px] leading-none mt-6 tracking-[-0.02em]">
            Noch <span className="italic">Fragen?</span>
          </h2>
          <p className="mt-6 text-[var(--ink-2)] max-w-[360px]">
            Du findest keine Antwort? Schreib uns per WhatsApp oder E-Mail — wir melden uns am selben Tag.
          </p>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <div 
              key={i} 
              className={`border-t border-[var(--line)] ${i === FAQS.length - 1 ? "border-b" : "border-b-0"}`}
            >
              <button 
                onClick={() => setOpen(open === i ? -1 : i)} 
                className="w-full py-7 flex justify-between items-center bg-transparent border-none cursor-pointer text-left group"
              >
                <span className="flex gap-5 items-baseline">
                  <span className="font-mono text-[11px] text-[var(--ink-2)] tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-[22px] tracking-[-0.01em] font-normal m-0 group-hover:text-[var(--accent)] transition-colors">
                    {f.q}
                  </h3>
                </span>
                <span className={`text-[var(--accent)] transition-transform duration-200 ${open === i ? "rotate-45" : "rotate-0"}`}>
                  <Icon name="plus" size={20} />
                </span>
              </button>
              <div 
                className="overflow-hidden transition-[max-height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)]"
                style={{ maxHeight: open === i ? 200 : 0 }}
              >
                <p className="text-[var(--ink-2)] text-[15px] leading-[1.65] pb-7 max-w-[600px]">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
