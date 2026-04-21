"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Btn } from "./ui/core";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("dsgvo_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("dsgvo_consent", "accepted");
    window.dispatchEvent(new Event("consentChanged"));
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("dsgvo_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-[var(--bg-2)] border-t border-[var(--line)] p-6 shadow-2xl">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[13px] text-[var(--ink-2)] max-w-[800px] leading-[1.6]">
          <strong className="text-[var(--ink)] font-heading text-[16px] block mb-2">Ihre Privatsphäre ist uns wichtig</strong>
          Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis auf unserer Website zu bieten, zur Webanalyse und für Google Maps. 
          Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="underline hover:text-[var(--accent)]">Datenschutzerklärung</Link>.
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <Btn variant="outline" onClick={declineCookies} className="!text-[10px] !py-2 !px-4">
            Ablehnen
          </Btn>
          <Btn variant="primary" onClick={acceptCookies} className="!text-[10px] !py-2 !px-4">
            Akzeptieren
          </Btn>
        </div>
      </div>
    </div>
  );
}
