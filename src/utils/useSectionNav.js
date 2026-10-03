import { useLocation, useNavigate } from "react-router-dom";

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Scrolls to a section on the home page, navigating there first from subpages.
export function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (id) => {
    if (pathname === "/") scrollToId(id);
    else navigate(`/#${id}`);
  };
}
