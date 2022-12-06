import { ApolloError } from 'apollo-server-core';
import { UserResolvers } from 'graphql.types';

const metadata: UserResolvers['metadata'] = async (parent, args, context) => {
  throw new ApolloError('Not implemented');
};

export default metadata;
