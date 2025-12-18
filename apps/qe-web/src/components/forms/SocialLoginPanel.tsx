import React, { useState } from 'react';
import { loginWithProvider, type SocialLoginResponse, type SocialProvider } from '../../app/api';
import { FormStatusBadge, idleStatus, type FormStatus } from './FormStatusBadge';

export const SocialLoginPanel: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(idleStatus);
  const [profile, setProfile] = useState<SocialLoginResponse | null>(null);

  const handleSocialLogin = async (provider: SocialProvider) => {
    setStatus({ state: 'loading', message: `Connecting with ${provider}…` });
    try {
      const response = await loginWithProvider(provider);
      setProfile(response);
      setStatus({
        state: 'success',
        message: `Welcome, ${response.name}. We captured your ${provider} profile (${response.email}).`,
      });
    } catch (error) {
      console.error('Social login failed', error);
      setStatus({ state: 'error', message: 'We could not complete the login. Please retry.' });
    }
  };

  return (
    <div className="space-y-3 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300">Profile capture</p>
          <h3 className="text-base font-semibold text-slate-50">One-click login</h3>
        </div>
        <span aria-hidden>🔐</span>
      </div>
      <p className="text-xs text-slate-400">
        Sign in with a social profile to save your contact details for follow ups.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleSocialLogin('google')}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
          disabled={status.state === 'loading'}
        >
          <span aria-hidden>🔗</span>
          Continue with Google
        </button>
        <button
          type="button"
          onClick={() => handleSocialLogin('facebook')}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
          disabled={status.state === 'loading'}
        >
          <span aria-hidden>🌐</span>
          Continue with Facebook
        </button>
      </div>
      {profile && (
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-200">
          <p className="font-semibold text-slate-100">Active session</p>
          <p className="text-slate-400">{profile.name}</p>
          <p className="text-slate-500">{profile.email}</p>
        </div>
      )}
      <FormStatusBadge status={status} />
    </div>
  );
};
