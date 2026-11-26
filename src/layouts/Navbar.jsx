import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Container from "../components/Container";
import { CloseIcon, PlusIcon, MenuIcon } from "../components/Icons";
import ThemeToggle from "../components/ThemeToggle";

function getLinkClasses({ isActive }) {
  return [
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-brand-soft text-brand"
      : "text-ink-muted hover:bg-surface-muted hover:text-ink",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-16 items-center justify-between gap-4"
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-ink"
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-brand text-on-brand"
            >
              React Journal
            </span>
          </Link>

          {/* Desktop and Tablet */}
          <div className="hidden items-center gap-1 sm:flex">
            <NavLink to="/" end className={getLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/posts/new" end className={getLinkClasses}>
              Write
            </NavLink>
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-lg text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-canvas sm:hidden animate-fade-in"
        >
          <Container className="flex flex-col gap-1 py-3">
            <NavLink to="/" end onClick={closeMenu} className={getLinkClasses}>
              Home
            </NavLink>
            <NavLink
              to="/posts/new"
              end
              onClick={closeMenu}
              className={getLinkClasses}
            >
              <span className="inline-flex items-center gap-2">
                <PlusIcon size={16} /> Write a Post
              </span>
            </NavLink>
          </Container>
        </div>
      )}
    </header>
  );
}