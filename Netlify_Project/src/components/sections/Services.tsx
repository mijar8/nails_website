import React from "react";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Section, Eyebrow } from "../ui/core";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" label="02 Leistungen" className="border-t border-[var(--line-2)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-20 items-start mb-[72px]">
        <div>
          <Eyebrow>Leistungen · Nagelverlängerung · Maniküre · Pediküre</Eyebrow>
          <h2 className="text-[56px] leading-none mt-6 tracking-[-0.02em]">
            Maniküre &amp; <span className="italic">Nagelreparatur.</span>
          </h2>
        </div>
        <p className="text-[var(--ink-2)] text-[17px] max-w-[560px] md:justify-self-end md:self-end">
          Jede Behandlung wird individuell geplant — von der klassischen <em>Maniküre</em> über <em>Nagelverlängerung</em> bis zur <em>Pediküre</em>. Die Preise verstehen sich als Richtwerte.
        </p>
      </div>

      <div className="border border-[var(--line)]">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.name} s={s} i={i} last={i === SERVICES.length - 1} />
        ))}
      </div>
    </Section>
  );
}

function ServiceRow({ s, i, last }: { s: any, i: number, last: boolean }) {
  return (
    <Link
      href={`/leistungen/${s.slug}`}
      className={`group grid grid-cols-1 lg:grid-cols-[80px_1.2fr_2fr_1fr_180px] gap-3 lg:gap-8 items-center p-7 lg:px-8 lg:py-9 ${
        last ? "border-none" : "border-b border-[var(--line)]"
      } hover:bg-[var(--bg-2)] transition-colors duration-300 cursor-pointer block lg:grid`}
    >
      <div className="font-mono text-[11px] tracking-[0.3em] text-[var(--ink-2)] hidden lg:block">
        0{i + 1}
      </div>
      <div className="flex items-center gap-[18px]">
        <div className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center bg-transparent group-hover:bg-[var(--accent)] text-[var(--ink)] group-hover:text-[var(--accent-ink)] transition-colors duration-300">
          <Icon name={s.icon} size={18} />
        </div>
        <div>
          <div className="font-heading text-[26px] tracking-[-0.01em]">
            {s.name}
          </div>
          <div className="font-mono text-[11px] text-[var(--ink-2)] uppercase tracking-[0.2em] mt-1">
            {s.duration}
          </div>
        </div>
      </div>
      <div className="text-[var(--ink-2)] text-[14px] max-w-[420px] mt-2 lg:mt-0">
        {s.desc}
      </div>
      <div className="font-heading text-[24px] text-[var(--accent)] mt-2 lg:mt-0">
        {s.price}
      </div>
      <div className="justify-self-start lg:justify-self-end flex items-center gap-2.5 text-[12px] tracking-[0.14em] uppercase group-hover:translate-x-1.5 transition-transform duration-300 mt-4 lg:mt-0">
        <span className="inline-flex items-center gap-2.5 text-inherit">
          Mehr erfahren <Icon name="arrow" size={14} />
        </span>
      </div>
    </Link>
  );
}
