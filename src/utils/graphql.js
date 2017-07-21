import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql'
  })
});

const githubToken = 'a60dfad1937145aa185cffcee66e47537639649e';

client.networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) req.options.headers = {};
      req.options.headers.authorization = `Bearer ${githubToken}`;
      next();
    }
  }
]);

export default client;
export { gql };
