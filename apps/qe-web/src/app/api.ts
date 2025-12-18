export type SocialProvider = 'google' | 'facebook';

export interface EarlyAccessRequest {
  fullName: string;
  email: string;
  company: string;
  useCase: string;
  readiness: 'prototype' | 'pilot' | 'production';
}

export interface TechnicalOverviewRequest {
  email: string;
  role: string;
  focusArea: string;
}

export interface PartnershipRequest {
  fullName: string;
  organization: string;
  message: string;
}

export interface SocialLoginResponse {
  provider: SocialProvider;
  name: string;
  email: string;
  avatarUrl?: string;
}

const simulateNetwork = async <T>(response: T, latency = 600): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(response), latency));

export const submitEarlyAccess = async (payload: EarlyAccessRequest) =>
  simulateNetwork({ status: 'ok', received: payload, timestamp: Date.now() });

export const submitTechnicalOverview = async (
  payload: TechnicalOverviewRequest,
) => simulateNetwork({ status: 'ok', received: payload, timestamp: Date.now() });

export const submitPartnership = async (payload: PartnershipRequest) =>
  simulateNetwork({ status: 'ok', received: payload, timestamp: Date.now() });

export const loginWithProvider = async (
  provider: SocialProvider,
): Promise<SocialLoginResponse> =>
  simulateNetwork({
    provider,
    name: provider === 'google' ? 'Google Researcher' : 'Facebook Engineer',
    email: provider === 'google' ? 'researcher@qe.example' : 'engineer@qe.example',
    avatarUrl:
      provider === 'google'
        ? 'https://www.gravatar.com/avatar/?d=identicon'
        : 'https://www.gravatar.com/avatar/?d=mp',
  });
