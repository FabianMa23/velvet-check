import LegalLayout, { LegalBlock } from "../components/LegalLayout.jsx";
import { usePageMeta } from "../utils/usePageMeta.js";

export default function Impressum() {
  usePageMeta("Impressum");
  return (
    <LegalLayout title="Impressum">
      <LegalBlock label="Angaben gemäß § 5 DDG">
        Fabian Matthies
        <br />
        Velvet Check
        <br />
        Rigaerstraße 18B
        <br />
        10247 Berlin
      </LegalBlock>

      <LegalBlock label="Kontakt">
        E-Mail: <a href="mailto:hello@velvetcheck.de" style={{ color: "var(--gold)" }}>hello@velvetcheck.de</a>
        <br />
        Telefon: +49 155 10084711
      </LegalBlock>

      <LegalBlock label="Umsatzsteuer">
        Kleinunternehmer gemäß § 19 UStG – es wird keine Umsatzsteuer ausgewiesen.
      </LegalBlock>

      <LegalBlock label="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        Fabian Matthies
        <br />
        Rigaerstraße 18B, 10247 Berlin
      </LegalBlock>

      <LegalBlock label="Verbraucherstreitbeilegung">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </LegalBlock>

      <LegalBlock label="Haftung für Inhalte">
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt.
      </LegalBlock>

      <LegalBlock label="Haftung für Links">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
        wir für diese fremden Inhalte auch keine Gewähr übernehmen.
      </LegalBlock>
    </LegalLayout>
  );
}
