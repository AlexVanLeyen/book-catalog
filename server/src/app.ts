import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import mocks from './mocks';

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    Server is Running!
    Listening on port 4000
  `);
});
