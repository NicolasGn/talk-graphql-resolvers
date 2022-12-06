import { ApolloError } from 'apollo-server-errors';
import { QueryResolvers } from 'graphql.types';

const user: QueryResolvers['user'] = async (parent, args, context) => {
  throw new ApolloError('Not implemented');
};

export default user;
