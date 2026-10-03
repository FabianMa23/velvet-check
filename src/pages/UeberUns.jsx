import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { usePageMeta } from "../utils/usePageMeta.js";
import { colors, gold, cream, velvet } from "../theme.js";
import { values, team } from "../data/content.js";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function UeberUns() {
  usePageMeta(
    "Über uns",
    "Velvet Check ist der unabhängige Mystery-Guest-Service für Luxushotels aus Berlin. Erfahren Sie, wer hinter Velvet Check steht und wofür wir stehen.",
  );

  return (
    <Layout>
      {/* Hero */}
      <section style={{ paddingTop: 170, paddingBottom: 96, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -160,
            width: 720,
            height: 720,
            background: `radial-gradient(circle, ${velvet(0.38)} 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <span className="section-label fade-in">Über uns</span>
          <h1
            className="fade-in fade-in-d1 hero-title"
            style={{ fontSize: 58, fontWeight: 300, lineHeight: 1.1, marginBottom: 32, maxWidth: 820, letterSpacing: -0.5 }}
          >
            Unabhängig. Diskret.{" "}
            <span className="gold-text" style={{ fontWeight: 700, fontStyle: "italic" }}>
              Aus Leidenschaft für Gastgeberschaft.
            </span>
          </h1>
          <p className="fade-in fade-in-d2 sans" style={{ fontSize: 17, lineHeight: 1.85, color: cream(0.55), maxWidth: 600 }}>
            Velvet Check macht sichtbar, was Gäste wirklich erleben – mit einer festen Methodik, geschulten Testern und
            Ergebnissen, auf die sich Hotels, Agenturen und Unternehmen verlassen können.
          </p>
        </div>
      </section>

      <div className="shimmer-line" />

      {/* Story & Mission */}
      <section>
        <div className="container">
          <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <span className="section-label">Unsere Geschichte</span>
              <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 32 }}>
                Warum es{" "}
                <span className="gold-text" style={{ fontWeight: 600 }}>
                  Velvet Check
                </span>{" "}
                gibt
              </h2>
              <div className="sans" style={{ fontSize: 16, lineHeight: 1.9, color: cream(0.6), display: "grid", gap: 20 }}>
                <p>
                  Online-Bewertungen sind laut, subjektiv und oft Wochen alt. Interne Audits wiederum sehen ein Hotel so, wie
                  es sich zeigen möchte – nicht so, wie ein Gast es erlebt.
                </p>
                <p>
                  Genau in dieser Lücke arbeitet Velvet Check. Wir checken anonym ein, prüfen jeden Touchpoint von der
                  Anreise bis zum Check-out und übersetzen das Erlebnis in einen vergleichbaren Score.
                </p>
                <p>
                  Unsere Mission: Luxus messbar machen. Damit gute Häuser wissen, was sie auszeichnet – und genau sehen, wo
                  noch Potenzial liegt.
                </p>
              </div>
            </div>
            <blockquote
              style={{
                marginTop: 56,
                padding: "44px 40px",
                background: `linear-gradient(160deg, ${velvet(0.55)} 0%, rgba(42,10,18,0.75) 100%)`,
                borderLeft: `3px solid ${colors.gold}`,
              }}
            >
              <p style={{ fontSize: 28, fontStyle: "italic", lineHeight: 1.45, marginBottom: 24 }}>
                „Ein Hotel ist nur so gut wie der Moment, in dem der Gast die Tür öffnet.“
              </p>
              <span className="sans" style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: colors.gold, fontWeight: 600 }}>
                Velvet Check Leitgedanke
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="velvet-band">
        <div className="container">
          <span className="section-label">Unsere Werte</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 56 }}>
            Wofür wir{" "}
            <span className="gold-text" style={{ fontWeight: 600 }}>
              stehen
            </span>
          </h2>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {values.map((v, i) => (
              <div key={v.title} className="hover-card" style={{ padding: "34px 26px" }}>
                <span className="gold-text" style={{ fontSize: 36, fontWeight: 300, display: "block", marginBottom: 16 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{v.title}</h3>
                <p className="sans" style={{ fontSize: 14, lineHeight: 1.75, color: cream(0.5) }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="container">
          <span className="section-label">Team</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 56 }}>
            Die Menschen hinter dem{" "}
            <span className="gold-text" style={{ fontWeight: 600 }}>
              Score
            </span>
          </h2>
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {team.map((person) => (
              <div
                key={person.name}
                style={{ display: "flex", gap: 28, alignItems: "flex-start", padding: 32, border: `1.5px solid ${gold(0.12)}`, background: "rgba(12,12,12,0.6)" }}
              >
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    style={{ width: 104, height: 104, objectFit: "cover", flexShrink: 0, border: `1.5px solid ${gold(0.4)}` }}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    style={{
                      width: 104,
                      height: 104,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(160deg, ${colors.velvet} 0%, ${colors.velvetDeep} 100%)`,
                      border: `1.5px solid ${gold(0.4)}`,
                    }}
                  >
                    <span className="gold-text" style={{ fontSize: 38, fontWeight: 700 }}>
                      {initials(person.name)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 4 }}>{person.name}</h3>
                  <p
                    className="sans"
                    style={{ fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: colors.gold, fontWeight: 600, marginBottom: 14 }}
                  >
                    {person.role} · {person.location}
                  </p>
                  <p className="sans" style={{ fontSize: 14, lineHeight: 1.8, color: cream(0.55) }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line" />

      {/* CTA */}
      <section style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at center, ${velvet(0.28)} 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <span className="section-label">Lernen wir uns kennen</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 20 }}>
            Bereit für Ihren ersten{" "}
            <span className="gold-text" style={{ fontWeight: 600, fontStyle: "italic" }}>
              Velvet Check?
            </span>
          </h2>
          <p className="sans" style={{ fontSize: 16, color: cream(0.5), maxWidth: 500, margin: "0 auto 40px" }}>
            Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.
          </p>
          <Link to="/#contact" className="cta-btn">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </Layout>
  );
}
