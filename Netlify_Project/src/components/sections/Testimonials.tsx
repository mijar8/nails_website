"use client";

import React, { useState } from "react";
import { Icon } from "../ui/icons";
import { Section, Eyebrow, Stars } from "../ui/core";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <Section id="testimonials" label="05 Stimmen" className="border-t border-[var(--line-2)]">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-center">
        <div>
          <Eyebrow>Stimmen · Google Rezensionen</Eyebrow>
          <div className="font-mono mt-5 text-[11px] text-[var(--ink-2)] tracking-[0.2em]">
            0{i + 1} / 0{TESTIMONIALS.length}
          </div>
        </div>

        <div className="max-w-[760px]">
          <h2 className="font-heading text-[32px] md:text-[42px] leading-[1.25] font-light tracking-[-0.015em] m-0">
            <span className="text-[var(--accent)] italic">„</span>{t.quote}<span className="text-[var(--accent)] italic">”</span>
          </h2>
          <div className="mt-7 flex items-center gap-4">
            <Stars size={12} />
            <span className="text-[13px]">{t.name}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--line)]" />
            <span className="font-mono text-[11px] text-[var(--ink-2)] uppercase tracking-[0.2em]">{t.source}</span>
          </div>
        </div>

        <div className="flex gap-2.5">
          <button 
            onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} 
            className="w-12 h-12 rounded-full border border-[var(--line)] bg-transparent text-[var(--ink)] flex items-center justify-center cursor-pointer transition-colors hover:bg-[var(--line-2)]"
            aria-label="Vorheriger Bericht"
          >
            <Icon name="chevLeft" size={16} />
          </button>
          <button 
            onClick={() => setI((i + 1) % TESTIMONIALS.length)} 
            className="w-12 h-12 rounded-full border border-[var(--line)] bg-transparent text-[var(--ink)] flex items-center justify-center cursor-pointer transition-colors hover:bg-[var(--line-2)]"
            aria-label="Nächster Bericht"
          >
            <Icon name="chevRight" size={16} />
          </button>
        </div>
      </div>
    </Section>
  );
}
