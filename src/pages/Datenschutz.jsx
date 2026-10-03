import LegalLayout, { LegalSection } from "../components/LegalLayout.jsx";
import { usePageMeta } from "../utils/usePageMeta.js";

const gap = { marginTop: 12 };
const Hl = ({ children }) => <strong style={{ color: "var(--gold)" }}>{children}</strong>;

export default function Datenschutz() {
  usePageMeta("Datenschutz");
  return (
    <LegalLayout title="Datenschutzerklärung" subtitle="Stand: Oktober 2026">
      <LegalSection title="1. Verantwortlicher">
        <p>
          Fabian Matthies
          <br />
          Velvet Check
          <br />
          Rigaerstraße 18B, 10247 Berlin
          <br />
          E-Mail: hello@velvetcheck.de
        </p>
      </LegalSection>

      <LegalSection title="2. Übersicht der Verarbeitungen">
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und
          verweist auf die betroffenen Personen.
        </p>
        <p style={gap}>
          <Hl>Arten der verarbeiteten Daten:</Hl> Kontaktdaten (z.B. E-Mail, Telefon), Inhaltsdaten (z.B. Eingaben in
          Formularen), Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeit), Meta-/Kommunikationsdaten (z.B. IP-Adressen,
          Browserinformationen).
        </p>
        <p style={gap}>
          <Hl>Kategorien betroffener Personen:</Hl> Nutzer der Website, Geschäfts- und Vertragspartner, Interessenten.
        </p>
      </LegalSection>

      <LegalSection title="3. Rechtsgrundlagen">
        <p>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der folgenden Rechtsgrundlagen:</p>
        <p style={gap}>
          <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die
          Verarbeitung gegeben.
        </p>
        <p style={gap}>
          <strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</strong> – Die Verarbeitung ist zur Erfüllung eines Vertrages
          erforderlich.
        </p>
        <p style={gap}>
          <strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Die Verarbeitung ist zur Wahrung berechtigter
          Interessen erforderlich.
        </p>
      </LegalSection>

      <LegalSection title="4. Kontaktaufnahme">
        <p>
          Bei der Kontaktaufnahme mit uns (z.B. per E-Mail oder über das Kontaktformular) werden die Angaben des Nutzers zur
          Bearbeitung der Kontaktanfrage und deren Abwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO verarbeitet. Die Angaben der
          Nutzer können in unserem Customer-Relationship-Management-System (CRM) oder vergleichbarer Anfragenorganisation
          gespeichert werden.
        </p>
        <p style={gap}>
          Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei
          Jahre. Es gelten die gesetzlichen Archivierungspflichten.
        </p>
      </LegalSection>

      <LegalSection title="5. Webhosting & Bereitstellung">
        <p>
          Wir nutzen die Dienste von <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) zum Hosting
          unserer Website. Vercel verarbeitet dabei personenbezogene Daten in unserem Auftrag. Dies umfasst IP-Adressen,
          Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeit und die abgerufene Seite.
        </p>
        <p style={gap}>
          Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten
          Bereitstellung unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Vercel hat sich zur Einhaltung des EU-US Data Privacy
          Framework verpflichtet.
        </p>
        <p style={gap}>
          Weitere Informationen:{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
            Vercel Datenschutzerklärung
          </a>
        </p>
      </LegalSection>

      <LegalSection title="6. Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten werden lokal von unserem eigenen Server ausgeliefert. Es findet keine
          Verbindung zu Servern von Google oder anderen Schriftanbietern statt.
        </p>
      </LegalSection>

      <LegalSection title="7. E-Mail-Kommunikation">
        <p>
          Unsere E-Mail-Adressen werden über <strong>united-domains AG</strong> gehostet. Wenn Sie uns eine E-Mail senden,
          werden Ihre Daten (E-Mail-Adresse, Name, Inhalt) auf den Servern von united-domains verarbeitet. Die Verarbeitung
          erfolgt zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="8. Kontaktformular">
        <p>
          Unser Kontaktformular wird über den Dienst <strong>Formspree Inc.</strong> (USA) verarbeitet. Wenn Sie das Formular
          nutzen, wird die von Ihnen eingegebene E-Mail-Adresse an Formspree übermittelt und von dort an uns weitergeleitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p style={gap}>
          Ihre Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies">
        <p>
          Diese Website verwendet keine Cookies, die einer Einwilligung bedürfen. Es werden keine Tracking- oder
          Marketing-Cookies eingesetzt. Es werden keine Analysetools von Drittanbietern verwendet.
        </p>
      </LegalSection>

      <LegalSection title="10. Social Media">
        <p>
          Wir unterhalten Onlinepräsenzen auf Instagram (@velvetcheck). Wenn Sie diese Plattform besuchen, gelten die
          Datenschutzbedingungen des jeweiligen Betreibers. Wir verarbeiten die Daten der Nutzer nur, sofern diese mit uns
          innerhalb der Plattform kommunizieren (z.B. per Direktnachricht).
        </p>
      </LegalSection>

      <LegalSection title="11. Ihre Rechte">
        <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <p style={gap}>
          <Hl>Auskunftsrecht</Hl> (Art. 15 DSGVO) – Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten Daten zu
          erhalten.
          <br />
          <Hl>Berichtigungsrecht</Hl> (Art. 16 DSGVO) – Sie haben das Recht, unrichtige Daten berichtigen zu lassen.
          <br />
          <Hl>Löschungsrecht</Hl> (Art. 17 DSGVO) – Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.
          <br />
          <Hl>Einschränkung der Verarbeitung</Hl> (Art. 18 DSGVO) – Sie haben das Recht, die Einschränkung der Verarbeitung zu
          verlangen.
          <br />
          <Hl>Datenübertragbarkeit</Hl> (Art. 20 DSGVO) – Sie haben das Recht, Ihre Daten in einem strukturierten Format zu
          erhalten.
          <br />
          <Hl>Widerspruchsrecht</Hl> (Art. 21 DSGVO) – Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.
        </p>
        <p style={{ marginTop: 16 }}>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für Berlin zuständige
          Behörde ist: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstraße 219, 10969 Berlin.
        </p>
      </LegalSection>

      <LegalSection title="12. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
          entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
          Datenschutzerklärung.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
