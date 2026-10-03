import Layout from "./Layout.jsx";
import { cream, gold } from "../theme.js";

export default function LegalLayout({ title, subtitle, children }) {
  return (
    <Layout>
      <main className="legal-main" style={{ maxWidth: 720, margin: "0 auto", padding: "150px 40px 96px" }}>
        <h1 style={{ fontSize: 44, fontWeight: 300, marginBottom: subtitle ? 16 : 48 }}>{title}</h1>
        {subtitle && (
          <p className="sans" style={{ fontSize: 13, color: cream(0.35), marginBottom: 48 }}>
            {subtitle}
          </p>
        )}
        <div style={{ borderTop: `1px solid ${gold(0.12)}`, paddingTop: 48 }}>{children}</div>
      </main>
    </Layout>
  );
}

export function LegalBlock({ label, children }) {
  return (
    <div className="sans" style={{ marginBottom: 36, fontSize: 15, lineHeight: 2, color: cream(0.75) }}>
      <strong
        style={{ color: "var(--gold)", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}
      >
        {label}
      </strong>
      {children}
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 16 }}>{title}</h2>
      <div className="sans legal-text" style={{ fontSize: 14, lineHeight: 2, color: cream(0.65) }}>
        {children}
      </div>
    </div>
  );
}
