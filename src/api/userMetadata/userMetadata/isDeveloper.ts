import { UserMetadataResolvers } from 'graphql.types';

const isDeveloper: UserMetadataResolvers['isDeveloper'] = (parent) => {
  return parent.role === 'developer';
};

export default isDeveloper;
