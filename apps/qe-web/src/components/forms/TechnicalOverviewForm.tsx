import React, { FormEvent, useState } from 'react';
import { submitTechnicalOverview, type TechnicalOverviewRequest } from '../../app/api';
import { FormStatusBadge, idleStatus, type FormStatus } from './FormStatusBadge';

export const TechnicalOverviewForm: React.FC = () => {
  const [formValues, setFormValues] = useState<TechnicalOverviewRequest>({
    email: '',
    role: 'Founder',
    focusArea: 'Built environment',
  });
  const [status, setStatus] = useState<FormStatus>(idleStatus);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Preparing your technical overview…' });
    try {
      await submitTechnicalOverview(formValues);
      setStatus({
        state: 'success',
        message: 'Download link sent. Check your inbox for the technical overview.',
      });
    } catch (error) {
      console.error('Technical overview request failed', error);
      setStatus({ state: 'error', message: 'Unable to send the technical overview. Try again shortly.' });
    }
  };

  const updateField = <Key extends keyof TechnicalOverviewRequest>(
    key: Key,
    value: TechnicalOverviewRequest[Key],
  ) => setFormValues((previous) => ({ ...previous, [key]: value }));

  return (
    <div id="technical-overview" className="border-t border-slate-800 pt-6">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-50">Download Technical Overview</h3>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Drive Channel</span>
      </div>
      <form className="mt-3 grid gap-3" onSubmit={handleSubmit}>
        <label className="text-xs text-slate-300">
          Work email
          <input
            required
            type="email"
            value={formValues.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="techEmail"
          />
        </label>
        <label className="text-xs text-slate-300">
          Role
          <select
            value={formValues.role}
            onChange={(event) => updateField('role', event.target.value)}
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
            value={formValues.focusArea}
            onChange={(event) => updateField('focusArea', event.target.value)}
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
          disabled={status.state === 'loading'}
        >
          {status.state === 'loading' ? 'Sending…' : 'Email me the deck'}
        </button>
      </form>
      <FormStatusBadge status={status} />
    </div>
  );
};
