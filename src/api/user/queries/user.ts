import { ErrorCodes } from 'api/errors';
import { ApolloError } from 'apollo-server-errors';
import { QueryResolvers } from 'graphql.types';

const user: QueryResolvers['user'] = async (parent, args, context) => {
  const { services } = context;
  const { userId } = args;

  const user = await services.users.getUser(userId);

  if (!user) {
    throw new ApolloError('User not found', ErrorCodes.NOT_FOUND);
  }

  return user;
};

export default user;
