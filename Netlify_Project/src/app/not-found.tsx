import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Display, Btn } from "@/components/ui/core";
import { siteConfig } from "@/site.config";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-10 pt-20">
        <div className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--ink-2)] mb-6">
          Fehler 404
        </div>
        <Display size={80} className="mb-8 italic">
          Seite nicht gefunden.
        </Display>
        <p className="text-[16px] text-[var(--ink-2)] max-w-[400px] mb-12 leading-[1.6]">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Btn variant="primary" href="/">
          Zurück zur Startseite
        </Btn>
      </main>
      <Footer />
    </>
  );
}
