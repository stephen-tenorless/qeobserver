import React, { FormEvent, useState } from 'react';
import { submitPartnership, type PartnershipRequest } from '../../app/api';
import { FormStatusBadge, idleStatus, type FormStatus } from './FormStatusBadge';

export const PartnershipForm: React.FC = () => {
  const [formValues, setFormValues] = useState<PartnershipRequest>({
    fullName: '',
    organization: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>(idleStatus);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Sharing your note with our partnerships team…' });
    try {
      await submitPartnership(formValues);
      setStatus({
        state: 'success',
        message: 'Thanks for reaching out. We will reply with a tailored fit session.',
      });
    } catch (error) {
      console.error('Partnership request failed', error);
      setStatus({ state: 'error', message: 'We could not send your note. Please try again in a few minutes.' });
    }
  };

  const updateField = <Key extends keyof PartnershipRequest>(key: Key, value: PartnershipRequest[Key]) =>
    setFormValues((previous) => ({ ...previous, [key]: value }));

  return (
    <div className="border-t border-slate-800 pt-6" id="partnerships">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-50">Partnership &amp; Pilot</h3>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Custom Fit</span>
      </div>
      <form className="mt-3 grid gap-3" onSubmit={handleSubmit}>
        <label className="text-xs text-slate-300">
          Full name
          <input
            required
            value={formValues.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="partnerName"
          />
        </label>
        <label className="text-xs text-slate-300">
          Organization
          <input
            required
            value={formValues.organization}
            onChange={(event) => updateField('organization', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            name="organization"
          />
        </label>
        <label className="text-xs text-slate-300">
          How can we help?
          <textarea
            required
            value={formValues.message}
            onChange={(event) => updateField('message', event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            rows={3}
            name="message"
            placeholder="Pilot in a hospital wing, deploy on a bridge, evaluate in your lab…"
          />
        </label>
        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status.state === 'loading'}
        >
          {status.state === 'loading' ? 'Sending…' : 'Start a conversation'}
        </button>
      </form>
      <FormStatusBadge status={status} />
    </div>
  );
};
