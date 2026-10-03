import { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import { scrollToId } from "../utils/useSectionNav.js";
import { usePageMeta } from "../utils/usePageMeta.js";
import { colors, goldGradient, gold, cream, velvet } from "../theme.js";
import {
  testimonials,
  heroStats,
  audiences,
  processSteps,
  packages,
  criteria,
  scoreTiers,
  faqs,
} from "../data/content.js";

const FORMSPREE_URL = "https://formspree.io/f/mlgpdqrq";

export default function Home() {
  usePageMeta();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const submit = async () => {
    if (!email.includes("@") || sending) return;
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Neue Anfrage über velvet-check.de" }),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section style={{ paddingTop: 170, paddingBottom: 110, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -150,
            width: 700,
            height: 700,
            background: `radial-gradient(circle, ${gold(0.07)} 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 640,
            height: 640,
            background: `radial-gradient(circle, ${velvet(0.35)} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div className="fade-in" style={{ marginBottom: 28 }}>
            <span
              className="sans"
              style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: cream(0.4), fontWeight: 500 }}
            >
              Independent Luxury Hotel Testing
            </span>
          </div>
          <h1
            className="fade-in fade-in-d1 hero-title"
            style={{ fontSize: 62, fontWeight: 300, lineHeight: 1.08, marginBottom: 36, maxWidth: 780, letterSpacing: -0.5 }}
          >
            Wissen Sie wirklich, wie Ihr{" "}
            <span className="gold-text" style={{ fontWeight: 700, fontStyle: "italic" }}>
              Hotel erlebt
            </span>{" "}
            wird?
          </h1>
          <p
            className="fade-in fade-in-d2 sans"
            style={{ fontSize: 17, lineHeight: 1.85, color: cream(0.55), maxWidth: 560, marginBottom: 52, fontWeight: 400 }}
          >
            Velvet Check ist der unabhängige Mystery-Guest-Service für Luxushotels. Standardisiert, diskret und buchbar bis
            24 Stunden vorher.
          </p>
          <div className="fade-in fade-in-d3" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollToId("contact")}>
              Jetzt anfragen
            </button>
            <button className="cta-btn-outline" onClick={() => scrollToId("process")}>
              So funktioniert's
            </button>
          </div>
          <div
            className="fade-in fade-in-d4 hero-stats"
            style={{ display: "flex", gap: 52, marginTop: 72, paddingTop: 44, borderTop: `1px solid ${gold(0.12)}` }}
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <span className="gold-text" style={{ fontSize: 34, fontWeight: 700 }}>
                  {s.val}
                </span>
                <p className="sans" style={{ fontSize: 12, color: cream(0.4), marginTop: 6, fontWeight: 500, letterSpacing: 0.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line" />

      {/* Audiences */}
      <section style={{ padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="sans"
            style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: cream(0.2), marginBottom: 24, fontWeight: 500 }}
          >
            Für Hotels, Agenturen &amp; Unternehmen in Berlin
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {audiences.map((a) => (
              <span
                key={a}
                className="sans"
                style={{ fontSize: 13, color: cream(0.18), letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line" />

      {/* Process */}
      <section id="process">
        <div className="container">
          <span className="section-label">Der Prozess</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 64 }}>
            Vier Schritte zum{" "}
            <span className="gold-text" style={{ fontWeight: 600 }}>
              Velvet Score
            </span>
          </h2>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {processSteps.map((step, i) => {
              const restBorder = i === 0 ? gold(0.5) : velvet(0.7);
              return (
                <div
                  key={step.num}
                  style={{ padding: "36px 28px", borderTop: `2px solid ${restBorder}`, position: "relative", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = gold(0.6))}
                  onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = restBorder)}
                >
                  <span className="gold-text" style={{ fontSize: 44, fontWeight: 300, display: "block", marginBottom: 18 }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 14 }}>{step.title}</h3>
                  <p className="sans" style={{ fontSize: 14, lineHeight: 1.75, color: cream(0.5), fontWeight: 400 }}>
                    {step.desc}
                  </p>
                  {i < processSteps.length - 1 && (
                    <span className="process-arrow" style={{ position: "absolute", right: -18, top: 44, color: gold(0.25), fontSize: 22 }}>
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section id="criteria" className="velvet-band">
        <div className="container">
          <span className="section-label">Bewertungssystem</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 16 }}>
            Was wir{" "}
            <span className="gold-text" style={{ fontWeight: 600 }}>
              prüfen
            </span>
          </h2>
          <p className="sans" style={{ fontSize: 15, color: cream(0.5), marginBottom: 52, maxWidth: 520, fontWeight: 400 }}>
            Sechs gewichtete Kategorien ergeben den Velvet Score – vergleichbar über alle Hotels.
          </p>
          <div className="criteria-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {criteria.map((c) => (
              <div key={c.name} className="hover-card" style={{ padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 19, fontWeight: 600 }}>{c.name}</span>
                  <span className="sans" style={{ fontSize: 14, color: colors.gold, fontWeight: 700 }}>
                    {c.weight}%
                  </span>
                </div>
                <div style={{ height: 3, background: velvet(0.5), borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${c.weight}%`, height: "100%", background: goldGradient, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
          <div
            className="score-badges-wrap"
            style={{
              marginTop: 44,
              padding: "28px 32px",
              border: `1.5px solid ${gold(0.12)}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              background: "rgba(12,12,12,0.5)",
            }}
          >
            <span className="section-label" style={{ marginBottom: 0 }}>
              Velvet Score Stufen
            </span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {scoreTiers.map((t) => (
                <div key={t.label} className="score-badge" style={{ opacity: t.opacity }}>
                  <span style={{ color: colors.gold, fontWeight: 600 }}>{t.label}</span>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: colors.velvetBright }} />
                  <span style={{ color: cream(0.5) }}>{t.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "88px 0", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at center, ${velvet(0.22)} 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <div style={{ minHeight: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: 28, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, maxWidth: 620, marginBottom: 24 }}>
              „{testimonials[quoteIndex].text}“
            </p>
            <span className="sans" style={{ fontSize: 13, color: cream(0.35), letterSpacing: 1.5, fontWeight: 500 }}>
              — {testimonials[quoteIndex].author}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setQuoteIndex(i)}
                style={{
                  width: i === quoteIndex ? 28 : 8,
                  height: 3,
                  background: i === quoteIndex ? colors.gold : velvet(0.8),
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line" />

      {/* Pricing */}
      <section id="pricing">
        <div className="container">
          <span className="section-label">Pakete</span>
          <h2 className="page-h2" style={{ fontSize: 44, fontWeight: 300, marginBottom: 64 }}>
            Investition in{" "}
            <span className="gold-text" style={{ fontWeight: 600 }}>
              Qualität
            </span>
          </h2>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {packages.map((p) => (
              <div key={p.name} className={`pricing-card${p.highlight ? " featured" : ""}`}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: -1.5, left: 0, right: 0, height: 3, background: goldGradient }} />
                )}
                <p
                  className="sans"
                  style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10, fontWeight: 700, minHeight: 24 }}
                >
                  {p.highlight && <span className="featured-badge">★ Empfohlen</span>}
                </p>
                <h3 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
                <p className="sans" style={{ fontSize: 14, color: cream(0.4), marginBottom: 28, fontWeight: 400 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 32 }}>
                  <span className="sans" style={{ fontSize: 14, color: cream(0.4) }}>
                    ab
                  </span>
                  <span className="gold-text" style={{ fontSize: 46, fontWeight: 700 }}>
                    €{p.price}
                  </span>
                </div>
                <div style={{ height: 1, background: gold(0.12), marginBottom: 28 }} />
                {p.features.map((f) => (
                  <div
                    key={f}
                    className="sans"
                    style={{ fontSize: 14, color: cream(0.55), padding: "8px 0", display: "flex", gap: 12, alignItems: "flex-start", fontWeight: 400 }}
                  >
                    <span style={{ color: colors.gold, fontSize: 9, marginTop: 5, fontWeight: 700 }}>◆</span>
                    {f}
                  </div>
                ))}
                <button
                  className={p.highlight ? "cta-btn" : "cta-btn-outline"}
                  style={{ width: "100%", marginTop: 32 }}
                  onClick={() => scrollToId("contact")}
                >
                  Anfragen
                </button>
              </div>
            ))}
          </div>
          <p className="sans" style={{ textAlign: "center", fontSize: 13, color: cream(0.25), marginTop: 28, fontWeight: 400 }}>
            Alle Preise zzgl. MwSt. · Übernachtungskosten inklusive · Individuelle Pakete auf Anfrage
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="velvet-band">
        <div className="container" style={{ maxWidth: 740, margin: "0 auto" }}>
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 38, fontWeight: 300, marginBottom: 52, textAlign: "center" }}>Häufige Fragen</h2>
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: "26px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 20, fontWeight: 500 }}>{f.q}</span>
                <span
                  style={{
                    color: openFaq === i ? colors.gold : cream(0.3),
                    fontSize: 20,
                    transition: "transform 0.3s ease",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    flexShrink: 0,
                    marginLeft: 20,
                  }}
                >
                  +
                </span>
              </div>
              {openFaq === i && (
                <p className="sans" style={{ fontSize: 15, lineHeight: 1.85, color: cream(0.5), marginTop: 18, paddingRight: 48, fontWeight: 400 }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="shimmer-line" />

      {/* Contact */}
      <section id="contact" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            maxWidth: "100%",
            height: 500,
            background: `radial-gradient(ellipse, ${velvet(0.28)} 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <span className="section-label">Bereit?</span>
          <h2 className="page-h2" style={{ fontSize: 48, fontWeight: 300, marginBottom: 20 }}>
            Starten Sie Ihren ersten{" "}
            <span className="gold-text" style={{ fontWeight: 600, fontStyle: "italic" }}>
              Velvet Check
            </span>
          </h2>
          <p className="sans" style={{ fontSize: 16, color: cream(0.5), maxWidth: 500, margin: "0 auto 44px", fontWeight: 400 }}>
            Hinterlassen Sie Ihre E-Mail und wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.
          </p>
          {sent ? (
            <div
              style={{
                padding: "28px 48px",
                border: `1.5px solid ${gold(0.35)}`,
                background: velvet(0.25),
                display: "inline-block",
                animation: "glow 2s ease-in-out infinite",
              }}
            >
              <span className="gold-text" style={{ fontSize: 22, fontWeight: 600 }}>
                Vielen Dank!
              </span>
              <p className="sans" style={{ fontSize: 15, color: cream(0.5), marginTop: 8 }}>
                Wir melden uns innerhalb von 24h bei Ihnen.
              </p>
            </div>
          ) : (
            <div className="email-form" style={{ display: "flex", justifyContent: "center", gap: 0 }}>
              <input
                type="email"
                className="email-input"
                placeholder="ihre@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <button className="cta-btn" style={{ borderLeft: "none" }} onClick={submit}>
                {sending ? "Wird gesendet..." : "Anfragen"}
              </button>
            </div>
          )}
          <p className="sans" style={{ fontSize: 13, color: cream(0.3), marginTop: 28 }}>
            Oder direkt:{" "}
            <a href="mailto:hello@velvetcheck.de" style={{ color: colors.gold, fontWeight: 600, textDecoration: "none" }}>
              hello@velvetcheck.de
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
