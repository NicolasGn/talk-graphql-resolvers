import { ErrorCodes } from 'api/errors';
import { ApolloError } from 'apollo-server-core';
import { UserResolvers } from 'graphql.types';

const metadata: UserResolvers['metadata'] = async (parent, args, context) => {
  const { services } = context;

  // We now have the right type of the parent param coming from Query.user resolver
  const { id: userId } = parent;

  const metadata = await services.users.getUserMetadata(userId);

  if (!metadata) {
    throw new ApolloError('UserMetadata not found', ErrorCodes.NOT_FOUND);
  }

  // The return type of this resolver is now Metadata (model type)
  return metadata;
};

export default metadata;
