import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Display, Section } from "@/components/ui/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Das Nagelatelier Göppingen",
  description: "Datenschutzerklärung des Nagelateliers in Göppingen nach DSGVO."
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 min-h-screen">
        <Section className="!pt-10">
          <Display size={56} className="mb-10">Datenschutzerklärung</Display>
          <div className="prose prose-stone max-w-3xl">
            <h3>1. Datenschutz auf einen Blick</h3>
            <p><strong>Allgemeine Hinweise</strong><br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            <h3>2. Datenerfassung auf dieser Website</h3>
            <p><strong>Cookies</strong><br />
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.</p>
            <h3>3. Drittanbieter-Tools (z.B. Google Maps, Buchungssystem)</h3>
            <p>Wir binden Google Maps ein sowie ein Buchungssystem (Calendly/Treatwell), welches eigene Cookies setzt, wenn Sie den Termin-Service nutzen.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
