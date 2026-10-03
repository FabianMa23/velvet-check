import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { colors } from "../theme.js";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: colors.bg, color: colors.text, overflowX: "hidden" }}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
