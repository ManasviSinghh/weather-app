import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from '@apollo/client';
import { resolvers } from './resolvers';

const typeDefs = gql`
  type Weather {
    city: String!
    country: String!
    temperature: Int!
    description: String!
    humidity: Int!
    windSpeed: Float!
    icon: String!
  }

  type Forecast {
    date: String!
    temperature: Int!
    description: String!
    icon: String!
  }

  type Query {
    weather(city: String!): Weather
    forecast(city: String!): [Forecast]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
});