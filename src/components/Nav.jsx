import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSectionNav } from "../utils/useSectionNav.js";
import { colors, gold } from "../theme.js";

// [type, target, label] – "section" scrolls on the home page, "page" is a route.
const ITEMS = [
  ["section", "process", "Prozess"],
  ["section", "criteria", "Kriterien"],
  ["section", "pricing", "Pakete"],
  ["page", "/ueber-uns", "Über uns"],
  ["section", "contact", "Kontakt"],
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const goToSection = useSectionNav();

  const go = ([type, target]) => {
    if (type === "page") navigate(target);
    else goToSection(target);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(5,5,5,0.88)",
          backdropFilter: "blur(30px)",
          borderBottom: `1px solid ${gold(0.08)}`,
          padding: "18px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" className="gold-text" style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1.5, textDecoration: "none" }}>
          Velvet Check
        </Link>
        <div className="nav-desktop" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {ITEMS.map((item) => {
            const [type, target, label] = item;
            const isContact = target === "contact";
            const isActive = type === "page" && pathname === target;
            return (
              <button
                key={target}
                className={`nav-link${isActive ? " active" : ""}`}
                onClick={() => go(item)}
                style={isContact ? { color: colors.gold, fontWeight: 700 } : undefined}
              >
                {label}
              </button>
            );
          })}
        </div>
        <button className="hamburger" aria-label="Menü öffnen" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" aria-label="Menü schließen" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          {ITEMS.map((item) => (
            <button key={item[1]} onClick={() => go(item)}>
              {item[2]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
