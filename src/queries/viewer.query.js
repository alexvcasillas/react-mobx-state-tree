import { gql } from '../services/graphql.service';

export const viewerQuery = gql`
  query {
    viewer {
      avatarUrl
      bio
      login
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      websiteUrl
      url
      repositories(first: 100) {
        totalCount
        nodes {
          name
          description
          url
          homepageUrl
          isFork
          createdAt
          updatedAt
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;