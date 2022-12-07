import { UserResolvers } from 'graphql.types';

const codeName: UserResolvers['codeName'] = (parent) => {
  // parent.name is wrongly flagged as potentially undefined
  return (
    parent.name?.split(' ').pop()?.toUpperCase().split('').join('.') ??
    'N.O.N.E'
  );
};

export default codeName;
