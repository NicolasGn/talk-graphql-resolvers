import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';

import { getContext } from 'api/context';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { GraphQLSchema } from 'graphql';
import http from 'http';
import schema from './api';

const startApolloServer = async (schema: GraphQLSchema) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    context: getContext,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer(schema);
