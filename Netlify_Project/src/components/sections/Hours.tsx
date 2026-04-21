import React from "react";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Section, Eyebrow } from "../ui/core";
import { HOURS } from "@/lib/data";

export function Hours() {
  return (
    <Section id="hours" label="06 Öffnungszeiten" className="bg-[var(--bg-2)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-[72px] items-stretch">
        <div>
          <Eyebrow>Besuch · Kontakt</Eyebrow>
          <h2 className="text-[48px] leading-none mt-6 tracking-[-0.02em]">
            Komm <span className="italic">vorbei.</span>
          </h2>
          <p className="mt-6 text-[var(--ink-2)] max-w-[420px]">
            Das Studio liegt zentral in Göppingen — fünf Minuten zu Fuß vom Hauptbahnhof.
          </p>

          <div className="mt-10 border border-[var(--line)] bg-[var(--bg)]">
            {HOURS.map((row, i) => {
              const isClosed = row.h === "geschlossen";
              return (
                <div 
                  key={row.d} 
                  className={`flex justify-between items-center px-6 py-[18px] ${
                    i === HOURS.length - 1 ? "border-none" : "border-b border-[var(--line-2)]"
                  } ${isClosed ? "opacity-50" : "opacity-100"}`}
                >
                  <span className="font-heading text-[18px]">{row.d}</span>
                  <span className="font-mono text-[13px] tracking-[0.08em]">{row.h}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex gap-7 flex-wrap">
            <div className="flex items-center gap-3">
              <Icon name="mapPin" size={16} />
              <span className="text-[14px]">Hauptstraße 42, 73033 Göppingen</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="phone" size={16} />
              <span className="text-[14px]">+49 7161 000 000</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[var(--bg)]">
          <svg viewBox="0 0 400 520" className="w-full h-full absolute inset-0">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M24 0H0V24" fill="none" stroke="rgba(42,15,20,0.08)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="520" fill="url(#grid)"/>
            <path d="M-20 180 L420 240" stroke="rgba(42,15,20,0.15)" strokeWidth="22" fill="none"/>
            <path d="M160 -20 L220 540" stroke="rgba(42,15,20,0.15)" strokeWidth="18" fill="none"/>
            <path d="M40 60 L380 420" stroke="rgba(42,15,20,0.08)" strokeWidth="8" fill="none"/>
            <path d="M0 400 L400 300" stroke="rgba(42,15,20,0.08)" strokeWidth="6" fill="none"/>
            <rect x="40" y="60" width="80" height="90" fill="rgba(42,15,20,0.04)"/>
            <rect x="260" y="80" width="100" height="110" fill="rgba(42,15,20,0.04)"/>
            <rect x="60" y="300" width="110" height="80" fill="rgba(42,15,20,0.04)"/>
            <rect x="250" y="340" width="100" height="120" fill="rgba(42,15,20,0.04)"/>
            <g transform="translate(200, 240)">
              <circle r="36" fill="rgba(92,31,43,0.08)"/>
              <circle r="20" fill="rgba(92,31,43,0.18)"/>
              <circle r="9" fill="#5C1F2B"/>
              <circle r="3" fill="#F5F1EA"/>
            </g>
          </svg>

          <div className="absolute left-6 bottom-6 right-6 py-[18px] px-5 bg-[var(--bg-2)] border border-[var(--line)] flex justify-between items-center gap-4 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink-2)]">Studio</div>
              <div className="font-heading text-[20px] mt-1">Hauptstraße 42</div>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-[var(--accent)] hover:underline">
              Route <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
