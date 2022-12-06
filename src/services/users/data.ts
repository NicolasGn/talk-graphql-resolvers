import { OnboardingStatus, User, UserMetadata } from './model';

export const users: User[] = [
  {
    id: 'user-1',
    name: 'User One',
    email: 'user.one@test.fr',
    phone: '+33600000001',
    passwordHash: 'kjflajbdliaozhjdnbhiefu',
  },
  {
    id: 'user-2',
    name: 'User Two',
    email: 'user.two@test.fr',
    passwordHash: 'kbafiajofijabzhfuizaf',
  },
];

export const usersMetadata: UserMetadata[] = [
  {
    userId: 'user-1',
    role: 'developer',
    onboardingStatus: OnboardingStatus.VALIDATED,
  },
  {
    userId: 'user-2',
    role: 'user',
    onboardingStatus: OnboardingStatus.ACCOUNT_CREATED,
  },
];
