import React from 'react';

export type FormStatus = {
  state: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export const idleStatus: FormStatus = {
  state: 'idle',
  message: '',
};

type FormStatusBadgeProps = {
  status: FormStatus;
};

export const FormStatusBadge: React.FC<FormStatusBadgeProps> = ({ status }) => {
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
