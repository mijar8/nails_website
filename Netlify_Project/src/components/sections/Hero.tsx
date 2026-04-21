import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Btn, Eyebrow, Stars, Rule } from "../ui/core";
import { IMG } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" data-screen-label="01 Hero" className="pt-[120px] relative">
      <div className="max-w-[1280px] mx-auto px-10 pb-[120px] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 md:gap-20 items-end">
          <div>
            <Eyebrow>Premium Nagelstudio — Göppingen</Eyebrow>
            <h1 className="text-[56px] md:text-[104px] leading-[0.98] tracking-[-0.025em] font-light font-heading text-[var(--ink)] mt-7">
              <span className="sr-only">Premium Nagelstudio in Göppingen</span>
              <span aria-hidden="true">
                Premium Nagelstudio<br />
                <span className="italic font-light">in Göppingen.</span>
              </span>
            </h1>
            <p className="max-w-[440px] mt-8 text-[var(--ink-2)] text-[17px] leading-[1.55]">
              Maniküre, <Link href="/leistungen/nagelverlaengerung" className="border-b border-[var(--line)] hover:text-[var(--accent)]">Nagelverlängerung</Link> und individuelles Nageldesign — in ruhiger, konzentrierter Atmosphäre.
            </p>
            <div className="mt-10 flex gap-4 items-center flex-wrap">
              <Btn variant="primary" href="#booking">
                Jetzt Termin buchen <Icon name="arrow" size={14} />
              </Btn>
              <Btn variant="ghost" href="#services">
                Leistungen ansehen
              </Btn>
            </div>
            <div className="mt-14 flex gap-8 items-center flex-wrap">
              <div className="flex items-center gap-2.5">
                <Stars />
                <span className="text-[13px] text-[var(--ink-2)]">5.0 · Google Rezensionen</span>
              </div>
              <span className="w-[1px] h-5 bg-[var(--line)]" />
              <span className="text-[13px] text-[var(--ink-2)]">Seit 2018</span>
            </div>
          </div>

          <div className="relative aspect-[3/4]">
            <div className="absolute inset-0 overflow-hidden bg-[var(--bg-2)]">
              <Image 
                src={IMG.heroA} 
                alt="Premium Nageldesign und Gelmodellage im Das Nagelatelier Göppingen"
                fill
                className="object-cover saturate-[0.92] contrast-[1.02]"
                priority
              />
            </div>
            <div className="absolute left-4 bottom-4 md:-left-12 md:bottom-12 bg-[var(--bg)] py-5 px-6 border border-[var(--line)] min-w-[220px]">
              <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--ink-2)] uppercase">Signature</div>
              <div className="font-heading text-[28px] leading-[1.1] mt-2">
                Burgundy<br /><span className="italic">Gloss</span>
              </div>
              <Rule className="my-[14px]" />
              <div className="flex justify-between text-[12px] text-[var(--ink-2)]">
                <span>Gel · 90 Min.</span>
                <span>ab €60</span>
              </div>
            </div>
            <div className="font-mono absolute right-0 -top-8 text-[10px] tracking-[0.3em] text-[var(--ink-2)] uppercase">
              Nr. 01 — Signature Collection
            </div>
          </div>
        </div>

        <div className="mt-[120px] border-t border-[var(--line)] pt-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[
            ["01", "Sterile Werkzeuge", "Medizinische Hygienestandards"],
            ["02", "Premium Materialien", "OPI, The Gel Bottle, Kodi"],
            ["03", "Individuelle Beratung", "Jeder Termin beginnt mit einem Gespräch"],
            ["04", "Ruhiges Atelier", "Max. zwei Kund:innen gleichzeitig"]
          ].map(([n, t, d]) => (
            <div key={n}>
              <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)] uppercase">— {n}</div>
              <div className="font-heading text-[20px] mt-3">{t}</div>
              <div className="text-[13px] text-[var(--ink-2)] mt-1.5">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
