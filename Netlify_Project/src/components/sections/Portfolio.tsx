"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Section, Eyebrow, Btn } from "../ui/core";
import { PORTFOLIO } from "@/lib/data";

export function Portfolio() {
  const [filter, setFilter] = useState("Alle");
  const [lightbox, setLightbox] = useState<number | null>(null);
  
  const tags = ["Alle", ...new Set(PORTFOLIO.map(p => p.tag))];
  const items = filter === "Alle" ? PORTFOLIO : PORTFOLIO.filter(p => p.tag === filter);

  return (
    <Section id="portfolio" label="03 Galerie">
      <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
        <div>
          <Eyebrow>Galerie · Nageldesign &amp; Nail Art</Eyebrow>
          <h2 className="text-[56px] leading-none mt-6 tracking-[-0.02em]">
            Unsere <span className="italic">Nageldesign Experten.</span>
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(t => (
            <button 
              key={t} 
              onClick={() => setFilter(t)} 
              className={`px-4 py-2.5 rounded-full border text-[12px] tracking-[0.08em] uppercase cursor-pointer transition-colors duration-200 ${
                filter === t 
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]" 
                  : "border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--ink)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((p, i) => (
          <button 
            key={p.src} 
            onClick={() => setLightbox(i)} 
            className={`group relative overflow-hidden bg-[var(--bg-2)] border-none p-0 cursor-pointer ${
              i % 5 === 0 ? "aspect-[3/4] row-span-2" : "aspect-square row-span-1"
            }`}
          >
            <Image 
              src={p.src} 
              alt={p.alt} 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(42,15,20,0.65)] opacity-0 transition-opacity duration-300 flex flex-col justify-end p-5 text-[var(--bg)] text-left group-hover:opacity-100">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">{p.tag}</div>
              <div className="font-heading text-[20px] mt-1">{p.label}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center flex justify-center">
        <Btn variant="outline" href="#booking">
          Mehr auf Instagram <Icon name="instagram" size={14} />
        </Btn>
      </div>

      {lightbox !== null && (
        <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
      )}
    </Section>
  );
}

function Lightbox({ items, index, onClose, onChange }: { items: any[], index: number, onClose: () => void, onChange: (i: number) => void }) {
  useEffect(() => {
    document.body.classList.add("locked");
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  onChange((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
    };
    window.addEventListener("keydown", h);
    return () => { 
      document.body.classList.remove("locked"); 
      window.removeEventListener("keydown", h); 
    };
  }, [index, items.length, onChange, onClose]);

  const p = items[index];

  return (
    <div 
      className="fixed inset-0 z-[200] bg-[rgba(42,15,20,0.92)] flex items-center justify-center p-10"
      onClick={onClose}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onChange((index - 1 + items.length) % items.length); }} 
        className="fixed left-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[rgba(245,241,234,0.3)] bg-transparent text-[#F5F1EA] flex items-center justify-center cursor-pointer hover:bg-[rgba(245,241,234,0.1)] transition-colors"
      >
        <Icon name="chevLeft" size={22} />
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onChange((index + 1) % items.length); }} 
        className="fixed right-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[rgba(245,241,234,0.3)] bg-transparent text-[#F5F1EA] flex items-center justify-center cursor-pointer hover:bg-[rgba(245,241,234,0.1)] transition-colors"
      >
        <Icon name="chevRight" size={22} />
      </button>
      <button 
        onClick={onClose} 
        className="fixed right-7 top-7 w-12 h-12 rounded-full border border-[rgba(245,241,234,0.3)] bg-transparent text-[#F5F1EA] flex items-center justify-center cursor-pointer hover:bg-[rgba(245,241,234,0.1)] transition-colors"
      >
        <Icon name="close" size={18} />
      </button>

      <div 
        onClick={(e) => e.stopPropagation()} 
        className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-10 items-stretch"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
        </div>
        <div className="text-[var(--bg)] flex flex-col justify-between py-3">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-70">
              {p.tag} · 0{(index + 1)}/{items.length}
            </div>
            <div className="font-heading text-[48px] mt-4 leading-none">{p.label}</div>
            <p className="mt-5 opacity-80 text-[14px]">
              Individuell gestaltet im Studio. Auf Wunsch für deinen Termin reproduzierbar.
            </p>
          </div>
          <div className="border-t border-[rgba(245,241,234,0.2)] pt-5 flex justify-between text-[12px] opacity-70">
            <span className="hidden md:inline">← → zum Blättern</span>
            <span>ESC schließen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
