import React, { FormEvent, useState } from 'react';
import { submitEarlyAccess, type EarlyAccessRequest } from '../../app/api';
import { FormStatusBadge, idleStatus, type FormStatus } from './FormStatusBadge';

export const EarlyAccessForm: React.FC = () => {
  const [formValues, setFormValues] = useState<EarlyAccessRequest>({
    fullName: '',
    email: '',
    company: '',
    useCase: 'Calm-state resilience program',
    readiness: 'prototype',
  });
  const [status, setStatus] = useState<FormStatus>(idleStatus);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Submitting your early access request…' });
    try {
      await submitEarlyAccess(formValues);
      setStatus({ state: 'success', message: "You're on the list. We’ll reach out with next steps." });
    } catch (error) {
      console.error('Early access submission failed', error);
      setStatus({ state: 'error', message: 'We could not submit right now. Please retry in a moment.' });
    }
  };

  const updateField = <Key extends keyof EarlyAccessRequest>(key: Key, value: EarlyAccessRequest[Key]) =>
    setFormValues((previous) => ({ ...previous, [key]: value }));

  return (
    <div id="early-access" className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-50">Request Early Access</h3>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Pebble &amp; Anchor</span>
      </div>
      <form className="grid gap-3" onSubmit={handleSubmit}>
        <label className="text-xs text-slate-300">
          Full name
          <input
            required
            value={formValues.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="fullName"
          />
        </label>
        <label className="text-xs text-slate-300">
          Work email
          <input
            required
            type="email"
            value={formValues.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="email"
          />
        </label>
        <label className="text-xs text-slate-300">
          Company or lab
          <input
            required
            value={formValues.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="company"
          />
        </label>
        <label className="text-xs text-slate-300">
          Primary use case
          <input
            required
            value={formValues.useCase}
            onChange={(event) => updateField('useCase', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="useCase"
            placeholder="Stress-aware steel, quantum-gated pharma, etc."
          />
        </label>
        <label className="text-xs text-slate-300">
          Deployment readiness
          <select
            value={formValues.readiness}
            onChange={(event) =>
              updateField('readiness', event.target.value as EarlyAccessRequest['readiness'])
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
          disabled={status.state === 'loading'}
        >
          {status.state === 'loading' ? 'Submitting…' : 'Send request'}
        </button>
      </form>
      <FormStatusBadge status={status} />
    </div>
  );
};
