import { gql } from 'apollo-server-core';

const schema = gql`
  type User {
    id: ID!
    name: String!
    codeName: String!
    email: String!
    phone: String
  }

  type Query {
    user(userId: ID!): User!
  }
`;

export default schema;
