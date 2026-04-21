import React from "react";
import { siteConfig } from "@/site.config";
import { Icon } from "./ui/icons";

export function FloatingWhatsApp() {
  if (!siteConfig.contact.whatsapp) return null;

  // Format number for wa.me link (remove spaces, +, etc)
  const waNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const waMessage = encodeURIComponent("Hallo! Ich möchte gerne einen Termin vereinbaren.");

  return (
    <a
      href={`https://wa.me/${waNumber}?text=${waMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 md:hidden group"
      aria-label="Termin via WhatsApp buchen"
    >
      {/* Fallback to phone icon if custom whatsapp icon isn't present in our icon set yet */}
      <Icon name="phone" size={24} />
      
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-[var(--bg-2)] text-[var(--ink)] text-[12px] font-sans px-3 py-1.5 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[var(--line-2)] pointer-events-none hidden sm:block">
        WhatsApp Termin
      </span>
    </a>
  );
}
