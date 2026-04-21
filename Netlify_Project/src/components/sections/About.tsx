import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Section, Eyebrow } from "../ui/core";
import { IMG } from "@/lib/data";

export function About() {
  return (
    <Section id="about" label="04 Molly" className="bg-[var(--bg-2)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-20 items-center">
        <div className="relative w-full max-w-[500px] mx-auto md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg)]">
            <Image 
              src={IMG.molly} 
              alt="Inhaberin des Das Nagelatelier — Nageldesign Expertin Göppingen" 
              fill
              className="object-cover saturate-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="font-mono absolute -bottom-5 -left-5 bg-[var(--accent)] text-[var(--accent-ink)] py-3.5 px-5 text-[11px] tracking-[0.3em] uppercase">
            — Das Atelier
          </div>
        </div>

        <div>
          <Eyebrow>Das Atelier</Eyebrow>
          <h2 className="text-[56px] leading-none mt-6 tracking-[-0.02em] font-light">
            Acht Jahre<br /><span className="italic">Handarbeit.</span>
          </h2>
          <p className="mt-8 text-[17px] text-[var(--ink-2)] max-w-[520px] leading-[1.65]">
            Was 2018 als kleines Studio begann, ist heute eine feste Adresse in Göppingen. Jede Behandlung folgt demselben Anspruch: volle Aufmerksamkeit, medizinische Hygiene und Materialien, die halten, was sie versprechen — von der <Link href="/leistungen/manikuere-nagelpflege" className="border-b border-[var(--line)] hover:text-[var(--accent)]">Maniküre</Link> bis zur <Link href="/leistungen/nagelverlaengerung" className="border-b border-[var(--line)] hover:text-[var(--accent)]">Nagelverlängerung</Link>.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[520px]">
            {[
              ["Hygiene", "Autoklav-sterilisierte Werkzeuge, Einweg-Feilen, geprüfte Luftfiltration."],
              ["Materialien", "Kuratiert aus OPI, The Gel Bottle, Kodi Professional und Mesauda."],
              ["Beratung", "Jeder Termin beginnt mit einem Gespräch — nicht mit einem Preisschild."],
              ["Zeit", "Keine Akkordarbeit. Zwei Kund:innen maximal parallel im Studio."]
            ].map(([t, d]) => (
              <div key={t}>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={14} />
                  <span className="font-heading text-[18px]">{t}</span>
                </div>
                <p className="text-[13px] text-[var(--ink-2)] mt-2 leading-[1.55]">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 font-heading italic text-[22px] leading-[1.45] text-[var(--accent)] max-w-[460px] border-l border-[var(--accent)] pl-5">
            „Ein schöner Nagel ist leise. Man erkennt ihn am zweiten Blick.”
          </div>
        </div>
      </div>
    </Section>
  );
}
