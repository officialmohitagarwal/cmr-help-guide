import { Link } from "react-router-dom";
import {
  Command,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import logoIcon from "../../assets/logo-icon.svg";

export default function Header({
  onMenuClick,
  onSearchClick,
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:px-5 lg:px-8">

        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={19} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src={logoIcon}
            alt="CMR"
            className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />

          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-[-0.025em] text-[var(--text-primary)]">
              COLD MAIL RESELLER
            </div>

            <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              Help Center
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="ml-12 hidden items-center gap-7 md:flex">
          <Link
            to="/getting-started"
            className="text-[13px] font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            Documentation
          </Link>

          <Link
            to="/faqs"
            className="text-[13px] font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            FAQs
          </Link>
        </nav>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1.5">

          {/* Desktop search */}
          <button
            onClick={onSearchClick}
            className="hidden h-9 w-[350px] items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-left text-[12px] text-[var(--text-tertiary)] shadow-[var(--shadow-sm)] transition hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-md)] sm:flex"
          >
            <Search size={15} />

            <span className="flex-1">
              Search documentation...
            </span>

            <span className="flex items-center gap-0.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-1.5 py-0.5 text-[10px]">
              <Command size={9} />
              K
            </span>
          </button>

          {/* Mobile search */}
          <button
            onClick={onSearchClick}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] sm:hidden"
            aria-label="Search documentation"
          >
            <Search size={18} />
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}