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
  }
  """
  Simple wrapper around our list of launches that contains a cursor to the
  last item in the list. Pass this cursor to the launches query to fetch results
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
`;

module.exports = typeDefs;