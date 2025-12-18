import React, { FormEvent, useState } from 'react';
import {
  loginWithProvider,
  submitEarlyAccess,
  submitPartnership,
  submitTechnicalOverview,
  type EarlyAccessRequest,
  type PartnershipRequest,
  type SocialProvider,
  type TechnicalOverviewRequest,
} from '../app/api';

type FormStatus = {
  state: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const defaultStatus: FormStatus = {
  state: 'idle',
  message: '',
};

const StatusBadge: React.FC<{ status: FormStatus }> = ({ status }) => {
  if (status.state === 'idle') return null;

  const color =
    status.state === 'success'
      ? 'text-emerald-300 bg-emerald-500/10 border-emerald-400/40'
      : status.state === 'error'
        ? 'text-rose-300 bg-rose-500/10 border-rose-400/40'
        : 'text-cyan-200 bg-cyan-500/10 border-cyan-400/40';

  return (
    <p
      className={`mt-3 rounded-lg border px-3 py-2 text-xs font-medium ${color}`}
      role="status"
      aria-live="polite"
    >
      {status.message}
    </p>
  );
};

export const ConversionForms: React.FC = () => {
  const [earlyAccess, setEarlyAccess] = useState<EarlyAccessRequest>({
    fullName: '',
    email: '',
    company: '',
    useCase: 'Calm-state resilience program',
    readiness: 'prototype',
  });
  const [technicalOverview, setTechnicalOverview] = useState<TechnicalOverviewRequest>({
    email: '',
    role: 'Founder',
    focusArea: 'Built environment',
  });
  const [partnership, setPartnership] = useState<PartnershipRequest>({
    fullName: '',
    organization: '',
    message: '',
  });

  const [earlyStatus, setEarlyStatus] = useState<FormStatus>(defaultStatus);
  const [techStatus, setTechStatus] = useState<FormStatus>(defaultStatus);
  const [partnerStatus, setPartnerStatus] = useState<FormStatus>(defaultStatus);
  const [socialStatus, setSocialStatus] = useState<FormStatus>(defaultStatus);

  const handleEarlyAccessSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setEarlyStatus({ state: 'loading', message: 'Submitting your early access request…' });
    try {
      await submitEarlyAccess(earlyAccess);
      setEarlyStatus({ state: 'success', message: "You're on the list. We’ll reach out with next steps." });
    } catch (error) {
      console.error('Early access submission failed', error);
      setEarlyStatus({ state: 'error', message: 'We could not submit right now. Please retry in a moment.' });
    }
  };

  const handleTechnicalSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setTechStatus({ state: 'loading', message: 'Preparing your technical overview…' });
    try {
      await submitTechnicalOverview(technicalOverview);
      setTechStatus({ state: 'success', message: 'Download link sent. Check your inbox for the technical overview.' });
    } catch (error) {
      console.error('Technical overview request failed', error);
      setTechStatus({ state: 'error', message: 'Unable to send the technical overview. Try again shortly.' });
    }
  };

  const handlePartnershipSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setPartnerStatus({ state: 'loading', message: 'Sharing your note with our partnerships team…' });
    try {
      await submitPartnership(partnership);
      setPartnerStatus({ state: 'success', message: 'Thanks for reaching out. We will reply with a tailored fit session.' });
    } catch (error) {
      console.error('Partnership request failed', error);
      setPartnerStatus({ state: 'error', message: 'We could not send your note. Please try again in a few minutes.' });
    }
  };

  const handleSocialLogin = async (provider: SocialProvider) => {
    setSocialStatus({ state: 'loading', message: `Connecting with ${provider}…` });
    try {
      const response = await loginWithProvider(provider);
      setSocialStatus({
        state: 'success',
        message: `Welcome, ${response.name}. We captured your ${provider} profile (${response.email}).`,
      });
    } catch (error) {
      console.error('Social login failed', error);
      setSocialStatus({ state: 'error', message: 'We could not complete the login. Please retry.' });
    }
  };

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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-cyan-500/10 space-y-6">
            <div id="early-access" className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50">Request Early Access</h3>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Pebble &amp; Anchor</span>
              </div>
              <form className="grid gap-3" onSubmit={handleEarlyAccessSubmit}>
                <label className="text-xs text-slate-300">
                  Full name
                  <input
                    required
                    value={earlyAccess.fullName}
                    onChange={(event) => setEarlyAccess((prev) => ({ ...prev, fullName: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="fullName"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Work email
                  <input
                    required
                    type="email"
                    value={earlyAccess.email}
                    onChange={(event) => setEarlyAccess((prev) => ({ ...prev, email: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="email"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Company or lab
                  <input
                    required
                    value={earlyAccess.company}
                    onChange={(event) => setEarlyAccess((prev) => ({ ...prev, company: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="company"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Primary use case
                  <input
                    required
                    value={earlyAccess.useCase}
                    onChange={(event) => setEarlyAccess((prev) => ({ ...prev, useCase: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="useCase"
                    placeholder="Stress-aware steel, quantum-gated pharma, etc."
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Deployment readiness
                  <select
                    value={earlyAccess.readiness}
                    onChange={(event) =>
                      setEarlyAccess((prev) => ({
                        ...prev,
                        readiness: event.target.value as EarlyAccessRequest['readiness'],
                      }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="readiness"
                  >
                    <option value="prototype">Prototype ready</option>
                    <option value="pilot">Pilot-ready environment</option>
                    <option value="production">Production deployment</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={earlyStatus.state === 'loading'}
                >
                  {earlyStatus.state === 'loading' ? 'Submitting…' : 'Send request'}
                </button>
              </form>
              <StatusBadge status={earlyStatus} />
            </div>

            <div id="technical-overview" className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50">Download Technical Overview</h3>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Drive Channel</span>
              </div>
              <form className="mt-3 grid gap-3" onSubmit={handleTechnicalSubmit}>
                <label className="text-xs text-slate-300">
                  Work email
                  <input
                    required
                    type="email"
                    value={technicalOverview.email}
                    onChange={(event) =>
                      setTechnicalOverview((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="techEmail"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Role
                  <select
                    value={technicalOverview.role}
                    onChange={(event) =>
                      setTechnicalOverview((prev) => ({ ...prev, role: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="role"
                  >
                    <option value="Founder">Founder</option>
                    <option value="CTO">CTO / VP Engineering</option>
                    <option value="Research lead">Research lead</option>
                    <option value="Operations">Operations / Safety</option>
                  </select>
                </label>
                <label className="text-xs text-slate-300">
                  Focus area
                  <select
                    value={technicalOverview.focusArea}
                    onChange={(event) =>
                      setTechnicalOverview((prev) => ({ ...prev, focusArea: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="focusArea"
                  >
                    <option value="Built environment">Built environment</option>
                    <option value="Healthcare">Healthcare &amp; pharma</option>
                    <option value="Genetics">Genetics &amp; adaptive biology</option>
                    <option value="Defense">Defense &amp; aerospace</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/10 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={techStatus.state === 'loading'}
                >
                  {techStatus.state === 'loading' ? 'Sending…' : 'Email me the deck'}
                </button>
              </form>
              <StatusBadge status={techStatus} />
            </div>

            <div className="border-t border-slate-800 pt-6" id="partnerships">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50">Partnership &amp; Pilot</h3>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Custom Fit</span>
              </div>
              <form className="mt-3 grid gap-3" onSubmit={handlePartnershipSubmit}>
                <label className="text-xs text-slate-300">
                  Full name
                  <input
                    required
                    value={partnership.fullName}
                    onChange={(event) => setPartnership((prev) => ({ ...prev, fullName: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="partnerName"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  Organization
                  <input
                    required
                    value={partnership.organization}
                    onChange={(event) =>
                      setPartnership((prev) => ({ ...prev, organization: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    name="organization"
                  />
                </label>
                <label className="text-xs text-slate-300">
                  How can we help?
                  <textarea
                    required
                    value={partnership.message}
                    onChange={(event) => setPartnership((prev) => ({ ...prev, message: event.target.value }))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                    rows={3}
                    name="message"
                    placeholder="Pilot in a hospital wing, deploy on a bridge, evaluate in your lab…"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={partnerStatus.state === 'loading'}
                >
                  {partnerStatus.state === 'loading' ? 'Sending…' : 'Start a conversation'}
                </button>
              </form>
              <StatusBadge status={partnerStatus} />
            </div>

            <div className="border-t border-slate-800 pt-6" aria-label="Social login">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-50">One-click login</h3>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Profile Capture</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Sign in with a social profile to save your contact details for follow ups.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
                  disabled={socialStatus.state === 'loading'}
                >
                  <span aria-hidden>🔐</span>
                  Continue with Google
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('facebook')}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
                  disabled={socialStatus.state === 'loading'}
                >
                  <span aria-hidden>🔗</span>
                  Continue with Facebook
                </button>
              </div>
              <StatusBadge status={socialStatus} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForms;
