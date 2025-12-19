import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
  type?: "hash" | "route";
};

const navItems: NavItem[] = [
  { label: "How it works", to: "/#how", type: "hash" },
  { label: "qE Stack", to: "/#stack", type: "hash" },
  { label: "Ethics", to: "/#ethics", type: "hash" },
  { label: "Early Access", to: "/early-access", type: "route" },
  { label: "Technical Overview", to: "/technical-overview", type: "route" },
  { label: "Partnerships", to: "/partnerships", type: "route" },
];

const baseNavClasses =
  "relative text-slate-100/80 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-slate-100/70 after:transition-all hover:text-slate-100";

export const SiteHeader: React.FC = () => {
  const location = useLocation();

  const isActive = (item: NavItem) => {
    if (item.type === "hash") {
      const [, hash] = item.to.split("#");
      return location.pathname === "/" && location.hash === `#${hash}`;
    }

    return location.pathname === item.to;
  };

  return (
    <header className="border-b border-slate-800 backdrop-blur-md bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 group-hover:bg-cyan-500/25 transition-all duration-300">
            <span className="text-lg font-semibold text-cyan-300">qE</span>
          </div>
          <span className="text-sm font-medium text-slate-200 group-hover:text-slate-50 transition-colors">
            qE Technologies
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-slate-100 sm:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`${baseNavClasses} ${isActive(item) ? "text-slate-100 after:w-full" : ""}`}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
