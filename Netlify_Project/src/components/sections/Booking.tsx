"use client";

import React, { useState } from "react";
import { Section, Eyebrow, Btn } from "../ui/core";
import { siteConfig } from "@/site.config";
import { SERVICES } from "@/lib/data";
import { submitContact } from "@/actions/contact";
import { Icon } from "../ui/icons";

export function Booking() {
  const isIframe = siteConfig.booking.type === "iframe";

  return (
    <Section id="booking" label="07 Termin" className="bg-[var(--accent)] text-[var(--accent-ink)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-[72px] items-start">
        <div>
          <div className="eyebrow !text-[rgba(245,241,234,0.7)] flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--bg)]" />
            Termin buchen
          </div>
          <h2 className="font-heading text-[64px] leading-none mt-6 font-light tracking-[-0.02em]">
            Termin<br /><span className="italic">online buchen.</span>
          </h2>
          <p className="mt-7 text-[rgba(245,241,234,0.75)] text-[16px] max-w-[380px] leading-[1.65]">
            Wähle Leistung, Tag und Uhrzeit. Du erhältst eine Bestätigung per E-Mail. Stornierung bis 24 Std. vorher kostenlos.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            {["Leistung", "Datum & Uhrzeit", "Kontaktdaten", "Bestätigung"].map((s, i) => (
              <div key={s} className="flex items-center gap-3.5 opacity-50">
                <span className="font-mono w-7 h-7 rounded-full inline-flex items-center justify-center border border-[rgba(245,241,234,0.3)] text-[11px]">
                  0{i + 1}
                </span>
                <span className="font-heading text-[22px]">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--bg)] text-[var(--ink)] p-10 min-h-[560px] relative flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--ink-2)] mb-4">
            Online Buchung
          </div>
          <h3 className="font-heading text-[32px] mt-2 font-normal">
            Termin vereinbaren
          </h3>
          
          <div className="mt-8 flex-1 border border-[var(--line)] bg-[var(--bg-2)] flex items-center justify-center relative">
            {isIframe ? (
              <iframe 
                src={siteConfig.booking.iframeUrl} 
                className="w-full h-full min-h-[400px]"
                frameBorder="0"
                title="Online Terminbuchung"
              />
            ) : (
              <BookingForm />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    
    if (result.success) {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center p-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center mb-6">
          <Icon name="check" size={24} />
        </div>
        <h4 className="font-heading text-[28px] mb-2">Vielen Dank!</h4>
        <p className="text-[14px] text-[var(--ink-2)] max-w-[280px]">
          Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen zur Bestätigung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-8 flex flex-col gap-5">
      <div>
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">Leistung</label>
        <select name="service" required className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none">
          <option value="">Bitte wählen...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>{s.name} ({s.price})</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">Datum</label>
          <input type="date" name="date" required className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none" />
        </div>
        <div>
          <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">Uhrzeit</label>
          <input type="time" name="time" required className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">Name</label>
          <input type="text" name="name" required className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none" />
        </div>
        <div>
          <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">E-Mail</label>
          <input type="email" name="email" required className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none" />
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-2)] block mb-2">Anmerkungen</label>
        <textarea name="notes" rows={3} className="w-full p-3 border border-[var(--line)] bg-transparent text-[14px] font-sans outline-none resize-y" />
      </div>

      <Btn variant="primary" className="w-full justify-center mt-2" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
      </Btn>
    </form>
  );
}
