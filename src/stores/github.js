import { types, process } from 'mobx-state-tree';
import client, { gql } from '../utils/graphql';

function compareRepo(a, b) {
  const aUpdated = new Date(a.updatedAt);
  const bUpdated = new Date(b.updatedAt);
  if (aUpdated > bUpdated) {
    return -1;
  }
  if (aUpdated < bUpdated) {
    return 1;
  }
  return 0;
}

const UserModel = types
  .model('UserModel', {
    name: types.maybe(types.string),
    bio: types.maybe(types.string),
    avatar: types.maybe(types.string),
    followers: types.maybe(types.number),
    following: types.maybe(types.number)
  })
  .views(self => ({}))
  .actions(self => ({}));

const RepositoryModel = types
  .model('RepoModel', {
    name: types.string,
    description: types.maybe(types.string),
    url: types.maybe(types.string),
    homepageUrl: types.maybe(types.string),
    isFork: types.maybe(types.boolean),
    stargazers: types.optional(types.frozen, null),
    createdAt: types.maybe(types.string),
    updatedAt: types.maybe(types.string)
  })
  .views(self => ({}))
  .actions(self => ({}));

const GithubStore = types
  .model('GithubStore', {
    searchName: types.optional(types.string, ''),
    user: types.optional(types.maybe(UserModel), null), // Object with all the user data that comes from the Github API Fetch
    repos: types.optional(types.array(RepositoryModel), []), // Array of Repositories that comes from the Github API Fetch
    fetchingData: types.optional(types.boolean, false)
  })
  .views(self => ({
    get AmountOfRepos() {
      return this.repos.length;
    }
  }))
  .actions(self => {
    const fetchFromGithub = process(function*() {
      self.fetchingData = true;
      const query = gql`
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
      const { data: { viewer } } = yield client.query({
        query: query,
        fetchPolicy: 'network-only'
      });
      self.user = UserModel.create({
        name: viewer.name,
        bio: viewer.bio,
        avatar: viewer.avatarUrl,
        followers: viewer.followers.totalCount,
        following: viewer.following.totalCount
      });
      let repoOrder = [...viewer.repositories.nodes];
      repoOrder = repoOrder.sort(compareRepo);
      self.repos = repoOrder;
      self.fetchingData = false;
    });
    return { fetchFromGithub };
  });

export default GithubStore;
