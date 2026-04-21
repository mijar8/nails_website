import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Display, Section } from "@/components/ui/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Das Nagelatelier Göppingen",
  description: "Impressum des Nagelateliers in Göppingen."
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 min-h-screen">
        <Section className="!pt-10">
          <Display size={56} className="mb-10">Impressum</Display>
          <div className="prose prose-stone max-w-3xl">
            <p><strong>Angaben gemäß § 5 TMG</strong></p>
            <p>Das Nagelatelier<br />
            Hauptstraße 42<br />
            73033 Göppingen</p>
            <p><strong>Vertreten durch:</strong><br />
            Molly Musterfrau</p>
            <p><strong>Kontakt:</strong><br />
            Telefon: +49 7161 000 000<br />
            E-Mail: hello@dasnagelatelier.de</p>
            <p><strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
