export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
}

export enum OnboardingStatus {
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  VALIDATED = 'VALIDATED',
}

type Role = 'user' | 'admin' | 'developer';

export interface UserMetadata {
  userId: string;
  role: Role;
  onboardingStatus: OnboardingStatus;
}
