import React from 'react';
import { EarlyAccessForm } from './forms/EarlyAccessForm';
import { PartnershipForm } from './forms/PartnershipForm';
import { TechnicalOverviewForm } from './forms/TechnicalOverviewForm';

export const ConversionForms: React.FC = () => {
  return (
    <section id="contact" className="border-t border-slate-900 bg-slate-950" aria-label="Get in touch">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">Engage with qE</p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Early access, proofs of concept, and research partnerships.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Share how you want to deploy Pebble, Anchor Matter, or the Drive Channel. Our team will route your note to the right
              technical owner, whether you are building calm-aware wearables or reinforcing critical infrastructure.
            </p>
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">For innovators</p>
                <p className="text-slate-400 mt-1">Early product pilots, lab deployments, and field-readiness checklists.</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-slate-100 font-semibold">For operators</p>
                <p className="text-slate-400 mt-1">Safety validation, compliance artifacts, and integration runbooks.</p>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-xs text-cyan-100">
              <p className="font-semibold text-cyan-200">SEO-ready copy</p>
              <p className="text-cyan-100/80 mt-1">
                Calm quantum interfaces, Anchor Matter self-healing materials, and Drive Channel decisioning for healthcare,
                infrastructure, and adaptive biology. Search engines can parse exactly what we offer.
              </p>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-cyan-500/10">
            <EarlyAccessForm />
            <TechnicalOverviewForm />
            <PartnershipForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForms;
