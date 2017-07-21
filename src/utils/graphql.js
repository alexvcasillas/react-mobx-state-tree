import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql'
  })
});

const githubToken = '2d8b9b2fdd93cee2feec43f87685cdd6ecd7b9b3';

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
