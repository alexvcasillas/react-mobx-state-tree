import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql'
  })
});

const githubToken = 'your_github_token_here';

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
