import {
  UserMetadataResolvers,
  OnboardingStatus as GraphqlOnboardingStatus,
} from 'graphql.types';
import { OnboardingStatus } from 'services/users/model';

const onboardingStatusMap: Record<OnboardingStatus, GraphqlOnboardingStatus> = {
  ACCOUNT_CREATED: GraphqlOnboardingStatus.AccountCreated,
  UNDER_REVIEW: GraphqlOnboardingStatus.UnderReview,
  VALIDATED: GraphqlOnboardingStatus.Validated,
};

const onboardingStatus: UserMetadataResolvers['onboardingStatus'] = (
  parent,
) => {
  return onboardingStatusMap[parent.onboardingStatus];
};

export default onboardingStatus;
