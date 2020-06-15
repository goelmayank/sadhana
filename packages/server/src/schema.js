const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): PostConnection
    me: User
  }

  type Mutation {
    login(email: String): String # login token
  }

  """
  Simple wrapper around our list of posts that contains a cursor to thes
  last item in the list. Pass this cursor to the posts query to fetch results
  after these.
  """
  type PostConnection {
    cursor: String!
    hasMore: Boolean!
    posts: [Post]!
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
    image: String
  }

  type Sadhana {
    userId: Int
    id: Int
    title: String
    body: String
    image: String
  }

  type User {
    id: ID!
    email: String!
    profileImage: String
    sadhana: [Sadhana]!
  }
`;

module.exports = typeDefs;