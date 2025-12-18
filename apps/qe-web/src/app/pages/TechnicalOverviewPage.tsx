import React from "react";
import { TechnicalOverviewForm } from "../../components/forms/TechnicalOverviewForm";
import { usePageMetadata } from "../seo";

export const TechnicalOverviewPage: React.FC = () => {
  usePageMetadata(
    "Technical Overview | qE Technologies",
    "Request the qE technical overview to understand Pebble, Anchor Matter, and Drive Channel architectures for your stack."
  );

  return (
    <main className="bg-slate-950">
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Technical Briefing
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl leading-tight">
              Integrate qE with confidence.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              The qE stack is designed for observability, compliance, and performance. Share how you architect systems today and
              we will map Pebble, Anchor Matter, and Drive Channel into your data flows with diagrams, API references, and latency profiles.
            </p>
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">Deployment clarity</p>
                <p className="text-slate-400 mt-1">Data boundaries, safety gates, and auditability for regulated teams.</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">Performance data</p>
                <p className="text-slate-400 mt-1">Latency envelopes, sampling cadence, and hardware requirements.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Expect architectural diagrams, integration examples, and recommended observability guardrails. We also include SEO-friendly summaries
                you can use to keep stakeholders aligned on what qE delivers.
              </p>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-xs text-cyan-100">
                <p className="font-semibold text-cyan-200">Built for search and humans</p>
                <p className="text-cyan-100/80 mt-1">
                  Quantum wearables, calm-state gating, self-healing materials, and adaptive biology pipelines described in plain language that ranks and reassures.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Security model with audit-ready logging and permissions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Reference deployments for materials, healthcare, and genetic programs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-semibold">•</span>
                  <span>Change management and rollout plans for calm-state interfaces.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-cyan-500/10">
              <TechnicalOverviewForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
