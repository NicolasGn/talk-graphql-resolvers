import { Resolvers } from 'graphql.types';
import userMetadata from './user/metadata';
import isDeveloper from './userMetadata/isDeveloper';
import onboardingStatus from './userMetadata/onboardingStatus';

const resolvers: Resolvers = {
  UserMetadata: {
    isDeveloper,
    onboardingStatus,
  },
  User: {
    metadata: userMetadata,
  },
};

export default resolvers;
