import ApolloClient, { gql } from 'apollo-boost';

const githubToken = 'your_token_here';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${githubToken}`
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) return console.error('GrahQL Errors:', graphQLErrors);
    if (networkError) return console.error('Network Error: ', networkError);
  }
});

export { client, gql };