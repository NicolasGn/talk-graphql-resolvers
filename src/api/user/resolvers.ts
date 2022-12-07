import { Resolvers } from 'graphql.types';
import user from './queries/user';
import codeName from './user/codeName';

const resolvers: Resolvers = {
  User: {
    codeName,
  },
  Query: {
    user,
  },
};

export default resolvers;
