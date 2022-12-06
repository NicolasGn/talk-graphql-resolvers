import { Resolvers } from 'graphql.types';
import userMetadata from './user/metadata';

const resolvers: Resolvers = {
  User: {
    metadata: userMetadata,
  },
};

export default resolvers;
