import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

const typeDefs = readFileSync('./src/airports.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);
