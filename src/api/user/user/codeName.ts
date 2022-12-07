import { ApolloError } from 'apollo-server-core';
import { UserResolvers } from 'graphql.types';

const codeName: UserResolvers['codeName'] = (parent) => {
  throw new ApolloError('Not implemented');
};

export default codeName;
