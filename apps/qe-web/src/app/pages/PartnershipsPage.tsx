import React from "react";
import { PartnershipForm } from "../../components/forms/PartnershipForm";
import { usePageMetadata } from "../seo";

export const PartnershipsPage: React.FC = () => {
  usePageMetadata(
    "Partnerships | qE Technologies",
    "Propose a partnership with qE Technologies for research, field deployments, or ecosystem integrations across calm computing and adaptive materials."
  );

  return (
    <main className="bg-slate-950">
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Partnerships
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl leading-tight">
              Build with qE: research, pilots, and ecosystems.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you run a research lab, operate critical infrastructure, or lead product at a calm computing startup,
              share the collaboration you have in mind. We align teams with the right qE leads for co-development, co-marketing, or field work.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold text-slate-100">What we look for</p>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-semibold">•</span>
                    <span>Credible field sites for Anchor Matter resilience pilots.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-semibold">•</span>
                    <span>Clinical or lab partners with calm-state safety protocols.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-semibold">•</span>
                    <span>Platform teams ready to embed Drive Channel decisioning.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-xs text-cyan-100">
                <p className="font-semibold text-cyan-200">Aligned messaging</p>
                <p className="text-cyan-100/80 mt-1">
                  SEO-friendly partnership language that makes it clear we deliver calm quantum interfaces, active materials healing,
                  and adaptive biology—no hype required.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-cyan-500/10">
              <PartnershipForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
