import React from "react";
import Link from "next/link";
import { Icon } from "../ui/icons";
import { siteConfig } from "@/site.config";

export function Footer() {
  const siteMap = {
    "Leistungen": [
      ["Maniküre & Nagelpflege", "/leistungen/manikuere-nagelpflege", "services"],
      ["Nagelverlängerung",       "/leistungen/nagelverlaengerung",   "services"],
      ["Individuelles Nageldesign","/leistungen/nageldesign",         "services"],
      ["Pediküre",                 "/leistungen/pedikuere",           "services"],
      ["Nagelreparatur",           "/leistungen/nagelreparatur",      "services"]
    ],
    "Atelier": [
      ["Über uns",           "/#about",           "about"],
      ["Galerie",            "/#portfolio",       "portfolio"],
      ["Google Rezensionen", "/#testimonials",    "testimonials"],
      ["Öffnungszeiten",     "/#hours",           "hours"],
      ["FAQ",                "/#faq",             "faq"]
    ]
  };

  return (
    <footer id="contact" data-screen-label="10 Footer" className="bg-[var(--ink)] text-[var(--bg)] pt-[100px] pb-10">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-8">
          <div>
            <div className="font-heading text-[36px] tracking-[-0.015em]">
              {siteConfig.name}
            </div>
            <p className="mt-5 opacity-60 max-w-[360px] text-[14px] leading-[1.65]">
              {siteConfig.description}
            </p>

            <div className="mt-7 text-[13px] opacity-75 leading-[1.8]">
              {siteConfig.contact.address.street} · {siteConfig.contact.address.zip} {siteConfig.contact.address.city}<br />
              {siteConfig.contact.phone} · {siteConfig.contact.email}
            </div>

            <div className="mt-8">
              <Link 
                href="#booking"
                className="bg-transparent text-[var(--bg)] border border-[rgba(245,241,234,0.3)] px-5 py-3.5 text-[12px] tracking-[0.14em] uppercase inline-flex items-center gap-2.5 transition-colors hover:bg-[rgba(245,241,234,0.1)]"
              >
                Termin buchen <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>

          {Object.entries(siteMap).map(([group, items]) => (
            <div key={group}>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">{group}</div>
              <ul className="list-none p-0 mt-4 text-[14px] leading-loose">
                {items.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="opacity-80 hover:opacity-100 hover:text-[#C89A9F] transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[72px] pt-7 border-t border-[rgba(245,241,234,0.1)] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center text-center md:text-left">
          <div className="text-[12px] opacity-55">
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </div>
          <a 
            href={siteConfig.social.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center md:justify-start gap-2.5 text-[12px] tracking-[0.2em] uppercase opacity-80 hover:opacity-100 transition-opacity"
          >
            <Icon name="instagram" size={14} /> @{siteConfig.social.instagram.split('/').pop()}
          </a>
          <div className="flex gap-6 justify-center md:justify-end text-[12px] opacity-60 flex-wrap">
            <Link href="/impressum" className="hover:opacity-100">Impressum</Link>
            <Link href="/datenschutz" className="hover:opacity-100">Datenschutz</Link>
            <Link href="/agb" className="hover:opacity-100">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
