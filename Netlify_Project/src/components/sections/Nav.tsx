"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { Btn } from "../ui/core";
import { siteConfig } from "@/site.config";

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Leistungen",    id: "services",    href: "/leistungen" },
    { label: "Galerie",       id: "portfolio",   href: "/#portfolio" },
    { label: "Atelier",       id: "about",       href: "/#about" },
    { label: "Ratgeber",      id: "blog",        href: "/#blog" },
    { label: "Öffnungszeiten",id: "hours",       href: "/#hours" }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[rgba(245,241,234,0.82)] backdrop-blur-[14px] saturate-[140%] border-b border-[var(--line-2)]" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className={`max-w-[1280px] mx-auto px-10 flex items-center justify-between transition-[height] duration-300 ${scrolled ? "h-16" : "h-[84px]"}`}>
          <Link href="/" className="font-heading text-[22px] tracking-[-0.01em] font-normal flex items-baseline gap-2" aria-label={`${siteConfig.name} — Premium Nagelstudio`}>
            {siteConfig.shortName}
            <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--ink-2)] uppercase ml-1.5 hidden sm:inline">Studio · {siteConfig.contact.address.city}</span>
          </Link>

          <nav className="hidden md:flex gap-9 items-center">
            {links.map(l => (
              <Link key={l.id} href={l.href} className="text-[13px] text-[var(--ink)] tracking-[0.02em] relative hover:text-[var(--accent)] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Btn variant="outline" href="#booking" className="hidden md:flex !py-2.5 !px-[18px]">
              Termin buchen
            </Btn>
            <button onClick={() => setOpen(true)} className="md:hidden bg-transparent border border-[var(--line)] p-2.5 rounded-sm" aria-label="Menu">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {open && <MobileMenu links={links} onClose={() => setOpen(false)} />}
    </>
  );
}

function MobileMenu({ links, onClose }: { links: any[], onClose: () => void }) {
  React.useEffect(() => {
    document.body.classList.add("locked");
    return () => document.body.classList.remove("locked");
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col">
      <div className="px-10 py-6 flex justify-between items-center border-b border-[var(--line-2)]">
        <span className="font-heading text-[22px]">{siteConfig.shortName}</span>
        <button onClick={onClose} className="bg-transparent border border-[var(--line)] p-2.5 rounded-sm">
          <Icon name="close" />
        </button>
      </div>
      <nav className="px-10 py-12 flex flex-col gap-6 flex-1">
        {links.map((l, i) => (
          <Link key={l.id} href={l.href} onClick={onClose} className="font-heading text-[40px] tracking-[-0.02em] flex items-baseline gap-3.5 hover:text-[var(--accent)]">
            <span className="font-mono text-[11px] text-[var(--ink-2)]">0{i + 1}</span>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="px-10 py-8 border-t border-[var(--line-2)]">
        <Btn variant="primary" href="#booking" onClick={onClose} className="w-full justify-center">
          Termin buchen <Icon name="arrow" size={14} />
        </Btn>
      </div>
    </div>
  );
}
