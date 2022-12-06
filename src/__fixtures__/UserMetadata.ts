import { OnboardingStatus, User, UserMetadata } from 'services/users/model';

export const getUserMetadataFixture = (
  dataOverride?: Partial<UserMetadata>,
): UserMetadata => {
  return {
    userId: '__USER_ID__',
    onboardingStatus: OnboardingStatus.VALIDATED,
    role: 'user',
    ...dataOverride,
  };
};
