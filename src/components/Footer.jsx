import { Link } from "react-router-dom";
import { cream, gold } from "../theme.js";

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        padding: "44px 48px",
        borderTop: `1px solid ${gold(0.1)}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div>
        <Link to="/" className="gold-text" style={{ fontSize: 20, fontWeight: 700, textDecoration: "none" }}>
          Velvet Check
        </Link>
        <span className="sans" style={{ fontSize: 11, color: cream(0.2), marginLeft: 16, fontWeight: 500 }}>
          © {new Date().getFullYear()} · Berlin
        </span>
      </div>
      <div className="sans" style={{ display: "flex", gap: 28, flexWrap: "wrap", fontSize: 12, color: cream(0.35), fontWeight: 500 }}>
        <Link to="/ueber-uns" className="footer-link">Über uns</Link>
        <Link to="/impressum" className="footer-link">Impressum</Link>
        <Link to="/datenschutz" className="footer-link">Datenschutz</Link>
        <a href="https://instagram.com/velvetcheck" target="_blank" rel="noopener noreferrer" className="footer-link">
          Instagram
        </a>
      </div>
    </footer>
  );
}
