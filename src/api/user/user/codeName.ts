import { UserResolvers } from 'graphql.types';

const codeName: UserResolvers['codeName'] = (parent) => {
  return (
    parent.name.split(' ').pop()?.toUpperCase().split('').join('.') ?? 'N.O.N.E'
  );
};

export default codeName;
