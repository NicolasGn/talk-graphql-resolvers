import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import schema from './schema';

let executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
