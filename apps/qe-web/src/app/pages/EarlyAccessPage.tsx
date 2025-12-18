import React from "react";
import { EarlyAccessForm } from "../../components/forms/EarlyAccessForm";
import { usePageMetadata } from "../seo";

export const EarlyAccessPage: React.FC = () => {
  usePageMetadata(
    "Request Early Access | qE Technologies",
    "Join the qE early access program to pilot Pebble, Anchor Matter, and the Drive Channel with calm, quantum-aware controls."
  );

  return (
    <main className="bg-slate-950">
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Early Access Program
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl leading-tight">
              Pilot calm-state quantum interfaces first.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              We prioritize teams with clear safety, compliance, or infrastructure needs. Tell us how you plan to deploy Pebble,
              Anchor Matter, or the Drive Channel and we will share tailored runbooks, pilots, and validation artifacts.
            </p>
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">Wearable pilots</p>
                <p className="text-slate-400 mt-1">Neural interface readiness checklists and calm-state validation.</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">Anchor Matter</p>
                <p className="text-slate-400 mt-1">Material and biological substrates tuned for active resilience.</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">Drive Channel</p>
                <p className="text-slate-400 mt-1">Quantum-safe control layers with transparent decisioning.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-xs text-cyan-100">
                <p className="font-semibold text-cyan-200">SEO-focused positioning</p>
                <p className="text-cyan-100/80 mt-1">
                  Calm quantum interfaces, self-healing Anchor Matter, and Drive Channel coordination for healthcare, infrastructure,
                  and adaptive biology—indexed with the exact language decision makers search for.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Proof-of-concept blueprints tailored to regulated industries.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Pre-flight assessments for biosafety, materials safety, and data integrity.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Hands-on onboarding with qE engineers and partner labs.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-cyan-500/10">
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
