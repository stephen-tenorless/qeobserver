import React from "react";
import { Link } from "react-router-dom";

type SiteFooterProps = {
  onOpenDisclaimer: () => void;
};

export const SiteFooter: React.FC<SiteFooterProps> = ({ onOpenDisclaimer }) => (
  <footer className="border-t border-slate-900 bg-slate-950">
    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-slate-200">qE Technologies</span>
        <span>· Calm minds. Cooperative matter.</span>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link to="/#what" className="hover:text-cyan-300">
          About
        </Link>
        <Link to="/#how" className="hover:text-cyan-300">
          Science
        </Link>
        <Link to="/#ethics" className="hover:text-cyan-300">
          Ethics &amp; Safety
        </Link>
        <Link to="/partnerships" className="hover:text-cyan-300">
          Partnerships
        </Link>
      </div>
    </div>
    <p className="pb-4 text-center text-[0.65rem] text-slate-600">
      <button
        onClick={onOpenDisclaimer}
        className="text-slate-500 hover:text-cyan-400 transition-colors underline"
      >
        Disclaimer
      </button>
    </p>
  </footer>
);
