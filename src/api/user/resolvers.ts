import { Resolvers } from 'graphql.types';
import user from './queries/user';

const resolvers: Resolvers = {
  Query: {
    user,
  },
};

export default resolvers;
