import { ErrorCodes } from 'api/errors';
import { ApolloError } from 'apollo-server-core';
import {
  UserResolvers,
  OnboardingStatus as GraphqlOnboardingStatus,
} from 'graphql.types';
import { OnboardingStatus } from 'services/users/model';

const onboardingStatusMap: Record<OnboardingStatus, GraphqlOnboardingStatus> = {
  ACCOUNT_CREATED: GraphqlOnboardingStatus.AccountCreated,
  UNDER_REVIEW: GraphqlOnboardingStatus.UnderReview,
  VALIDATED: GraphqlOnboardingStatus.Validated,
};

const metadata: UserResolvers['metadata'] = async (parent, args, context) => {
  const { services } = context;

  // Ok, so parent type is Partial<User> (graphql type)
  // To be clear: THIS IS FALSE !!!!
  // Indeed, the parent param will be provided by a User resolver (Query.user for instance)
  // Its real type is User, the one returned by services.users.getUser
  // TypeScript is happy, but in reality, it's lying (it's not its fault, the type is the one we defined in codegen config)
  const { id: userId, name, codeName } = parent;

  // codeName is not returned by Query.user, it will never be defined here, type lies...
  console.log(`${name} codeName is ${codeName ?? 'XXXXX'}`);

  // userId can be undefined because the parent is Partial<User> (graphql type)
  const metadata = await services.users.getUserMetadata(userId!);

  if (!metadata) {
    throw new ApolloError('UserMetadata not found', ErrorCodes.NOT_FOUND);
  }

  // We have to remap the enum here to be compliant with the return type Partial<UserMetadata> (graphql type)
  const graphqlOnboardingStatus =
    onboardingStatusMap[metadata.onboardingStatus];

  // We can be tempted to compute this field directly in this resolver as it's present in its return type.
  // Computing graphql fields in the parent resolver is an anti-pattern because it goes against the concept of modularity.
  // We have to implement these fields computation in each resolver returning UserMetadata.
  const isDeveloper = metadata.role === 'developer';

  return {
    ...metadata,
    onboardingStatus: graphqlOnboardingStatus,
    isDeveloper,
  };
};

export default metadata;
