import { Nav } from "@/components/sections/Nav";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";
import { Display } from "@/components/ui/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen & Preise | Das Nagelatelier Göppingen",
  description: "Unsere Leistungen: Maniküre, Pediküre, Nagelverlängerung, Gelmodellage und Nageldesign im Nagelstudio Göppingen."
};

export default function LeistungenPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 min-h-screen">
        <div className="max-w-[1280px] mx-auto px-10 pb-16">
          <Display size={64} className="mb-6">Unsere Leistungen.</Display>
          <p className="text-[17px] text-[var(--ink-2)] max-w-[600px]">
            Hier finden Sie alle Details zu unseren Behandlungen und Preisen.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </>
  );
}
